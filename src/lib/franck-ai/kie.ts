// Kie.ai client for the Franck AI chat (server-side only).
// Kie resells several model families, each in its vendor's own wire format:
//   Claude -> POST /claude/v1/messages   (Anthropic Messages, SSE)
//   GPT    -> POST /codex/v1/responses   (OpenAI Responses, SSE)
// Default chain is GPT first: on Kie (tested 2026-11-14) GPT 6.1 Terra streams
// its first token in ~3s and was reliable, while Kie's Claude endpoints
// returned frequent 500s and buffered the whole reply (11-18s of silence).
// Every request walks the chain until one model starts streaming.

export type ChatMessage = { role: "user" | "assistant"; content: string };

type Provider = "claude" | "gpt";
type Attempt = { provider: Provider; model: string };

const MAX_TOKENS = 700;
// Only covers getting response headers back. Once text is streaming, it runs
// until the model finishes.
const CONNECT_TIMEOUT_MS = 20_000;

function chain(): Attempt[] {
  const parse = (id: string): Attempt => ({
    provider: id.startsWith("gpt") ? "gpt" : "claude",
    model: id,
  });
  // Comma-separated override, e.g. FRANCK_AI_MODELS="claude-sonnet-5-5,gpt-6-1-terra"
  // (any "gpt-*" id goes to the Responses endpoint, anything else to Claude).
  const custom = process.env.FRANCK_AI_MODELS?.split(",").map((s) => s.trim()).filter(Boolean);
  const ids = custom?.length ? custom : ["gpt-6-1-terra", "claude-sonnet-5-5", "claude-haiku-5-5"];
  return ids.map(parse);
}

function request(a: Attempt, system: string, messages: ChatMessage[]) {
  if (a.provider === "claude") {
    return {
      url: "https://api.kie.ai/claude/v1/messages",
      body: { model: a.model, system, messages, stream: true, max_tokens: MAX_TOKENS },
    };
  }
  return {
    url: "https://api.kie.ai/codex/v1/responses",
    body: {
      model: a.model,
      instructions: system,
      input: messages,
      stream: true,
      max_output_tokens: MAX_TOKENS,
      reasoning: { effort: "low" },
    },
  };
}

async function open(
  a: Attempt,
  system: string,
  messages: ChatMessage[],
  signal: AbortSignal
): Promise<ReadableStream<Uint8Array>> {
  const { url, body } = request(a, system, messages);
  const connect = new AbortController();
  const timer = setTimeout(() => connect.abort(new Error("connect timeout")), CONNECT_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KIE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.any([signal, connect.signal]),
    });
    // Kie sometimes reports errors as HTTP 200 + JSON, so check the type too.
    const type = res.headers.get("content-type") ?? "";
    if (!res.ok || !res.body || !type.includes("text/event-stream")) {
      const detail = (await res.text().catch(() => "")).slice(0, 300);
      throw new Error(`${a.model} ${res.status}: ${detail}`);
    }
    return res.body;
  } finally {
    clearTimeout(timer);
  }
}

/** Pulls reply text out of one parsed SSE event. */
function textFrom(provider: Provider, evt: Record<string, unknown>): string | null {
  if (provider === "claude") {
    const delta = evt.delta as { type?: string; text?: string } | undefined;
    if (evt.type === "content_block_delta" && delta?.type === "text_delta") return delta.text ?? "";
  } else if (evt.type === "response.output_text.delta") {
    return String(evt.delta ?? "");
  }
  if (evt.type === "error" || evt.type === "response.failed") {
    console.error("[franck-ai] stream error:", JSON.stringify(evt).slice(0, 300));
  }
  return null;
}

/** Turns the provider's SSE into a stream of plain reply text. */
function toTextStream(provider: Provider, sse: ReadableStream<Uint8Array>) {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";
  return sse.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const data = line.slice(5).trim();
          if (!data || data === "[DONE]") continue;
          let evt: Record<string, unknown>;
          try {
            evt = JSON.parse(data);
          } catch {
            continue;
          }
          const text = textFrom(provider, evt);
          // House style: never an em or en dash.
          if (text) controller.enqueue(encoder.encode(text.replace(/\s*[—–]\s*/g, ", ")));
        }
      },
    })
  );
}

/** Opens a streaming reply from the first model in the chain that answers. */
export async function streamChat(opts: {
  system: string;
  messages: ChatMessage[];
  signal: AbortSignal;
}): Promise<{ stream: ReadableStream<Uint8Array>; model: string }> {
  let lastError: unknown;
  for (const attempt of chain()) {
    if (opts.signal.aborted) break;
    try {
      const sse = await open(attempt, opts.system, opts.messages, opts.signal);
      return { stream: toTextStream(attempt.provider, sse), model: attempt.model };
    } catch (e) {
      lastError = e;
      console.warn(`[franck-ai] ${attempt.model} failed, trying next:`, String(e).slice(0, 200));
    }
  }
  throw lastError ?? new Error("no model available");
}
