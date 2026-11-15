import { buildSystemPrompt } from "@/lib/franck-ai/prompt";
import { streamChat, type ChatMessage } from "@/lib/franck-ai/kie";

// Streams Franck AI replies back to the chat widget as plain text.
export const maxDuration = 60;

const MAX_TURNS = 16; // only the most recent turns are sent to the model
const MAX_CHARS_PER_MESSAGE = 1500;
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 30 };

// Best-effort per-IP limiter. Instances are reused under Fluid Compute, so
// this stops casual abuse; it is not a hard global quota.
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

function json(error: string, status: number) {
  return Response.json({ error }, { status });
}

export async function POST(req: Request) {
  if (!process.env.KIE_API_KEY) {
    return json("Chat is offline right now. Email info@franckthesolution.com.", 503);
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return json(
      "That's a lot of questions in a short time. Give it a few minutes, or email my team at info@franckthesolution.com.",
      429
    );
  }

  let body: { messages?: unknown; page?: unknown };
  try {
    body = await req.json();
  } catch {
    return json("Bad request.", 400);
  }

  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages: ChatMessage[] = raw
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        ((m as ChatMessage).role === "user" || (m as ChatMessage).role === "assistant") &&
        typeof (m as ChatMessage).content === "string" &&
        (m as ChatMessage).content.trim().length > 0
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS_PER_MESSAGE) }))
    .slice(-MAX_TURNS);

  // The conversation sent to the model must start and end with the visitor.
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return json("Bad request.", 400);
  }

  const page = typeof body.page === "string" ? body.page : "/";
  const system = buildSystemPrompt(page);

  try {
    const { stream, model } = await streamChat({ system, messages, signal: req.signal });
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Accel-Buffering": "no",
        "X-Franck-AI-Model": model,
      },
    });
  } catch (e) {
    console.error("[franck-ai] model call failed:", e);
    return json(
      "Lost the signal for a second. Try again, or email my team at info@franckthesolution.com.",
      502
    );
  }
}
