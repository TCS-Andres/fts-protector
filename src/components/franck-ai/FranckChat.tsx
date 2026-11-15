"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Fragment,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/links";

type Role = "user" | "assistant";
type Msg = { role: Role; content: string; lead?: string };

const STORAGE_KEY = "franck-ai-chat-v1";
const TEASER_KEY = "franck-ai-teaser-seen";
const AVATAR = "/images/franck-ai/avatar.jpg";
const LEAD_TAG = /\[\[LEAD:([^\]]{1,60})\]\]/;

const GREETING: Msg = {
  role: "assistant",
  content:
    "Franck here. Tell me what's going on. Are you looking to protect yourself, your family, hire a team, or get trained?",
};

const STARTERS = [
  "I need protection",
  "I want to train with you",
  "What should I carry every day?",
  "How do I become an EP agent?",
];

/* ------------------------------------------------------------------ */
/* Tiny markdown renderer: [links](/path), **bold**, and "- " bullets. */
/* ------------------------------------------------------------------ */

function renderInline(text: string, keyBase: string, onNavigate: () => void) {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyBase}-${i++}`;
    if (m[1] && m[2]) {
      const href = m[2];
      const cls =
        "text-accent-blue-light underline underline-offset-2 hover:text-white transition-colors";
      if (href.startsWith("/")) {
        out.push(
          <Link key={key} href={href} className={cls} onClick={onNavigate}>
            {m[1]}
          </Link>
        );
      } else if (/^(https?:|mailto:)/.test(href)) {
        out.push(
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
            {m[1]}
          </a>
        );
      } else {
        out.push(m[1]);
      }
    } else if (m[3]) {
      out.push(
        <strong key={key} className="font-semibold text-white">
          {m[3]}
        </strong>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function MessageText({ text, onNavigate }: { text: string; onNavigate: () => void }) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  const flush = (k: string) => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={k} className="list-disc pl-5 space-y-1">
        {bullets.map((b, j) => (
          <li key={j}>{renderInline(b, `${k}-${j}`, onNavigate)}</li>
        ))}
      </ul>
    );
    bullets = [];
  };
  lines.forEach((line, idx) => {
    const t = line.trim();
    const bullet = t.match(/^[-*•]\s+(.*)$/);
    if (bullet) {
      bullets.push(bullet[1]);
      return;
    }
    flush(`ul-${idx}`);
    if (t) blocks.push(<p key={`p-${idx}`}>{renderInline(t, `p-${idx}`, onNavigate)}</p>);
  });
  flush("ul-end");
  return <div className="space-y-2">{blocks}</div>;
}

/* ------------------------------------------------------------------ */
/* Inline lead form (posts to the same Web3Forms inbox as the site).   */
/* ------------------------------------------------------------------ */

function LeadForm({ service, transcript }: { service: string; transcript: Msg[] }) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("botcheck")) {
      setStatus("done");
      return;
    }
    setStatus("sending");
    const convo = transcript
      .slice(-12)
      .map((m) => `${m.role === "user" ? "Visitor" : "Franck AI"}: ${m.content}`)
      .join("\n\n");
    data.set("access_key", WEB3FORMS_ACCESS_KEY);
    data.set("subject", `Franck AI chat lead - ${service}`);
    data.set("from_name", "FranckTheSolution Website (AI chat)");
    data.set("service", service);
    data.set("page", window.location.pathname);
    data.set("chat_transcript", convo);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      setStatus(json.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mt-2 rounded-lg border border-accent-blue/40 bg-accent-blue/10 px-3 py-3 text-sm text-text-secondary">
        <span className="text-accent-blue-light font-semibold">Got it.</span> My team has your
        details and will reach out personally. Everything stays confidential.
      </div>
    );
  }

  const input =
    "w-full rounded-md border border-white/15 bg-bg-primary/70 px-3 py-2 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-blue-light";

  return (
    <form
      onSubmit={submit}
      className="mt-2 space-y-2 rounded-lg border border-white/10 bg-bg-steel-card/80 p-3"
    >
      <p className="text-[11px] uppercase tracking-[2px] font-bold text-accent-blue-light">
        {service} · Have my team reach out
      </p>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <label htmlFor={`${uid}-n`} className="sr-only">Name</label>
      <input id={`${uid}-n`} name="name" required placeholder="Name" className={input} />
      <label htmlFor={`${uid}-e`} className="sr-only">Email</label>
      <input id={`${uid}-e`} name="email" type="email" required placeholder="Email" className={input} />
      <label htmlFor={`${uid}-p`} className="sr-only">Phone (optional)</label>
      <input id={`${uid}-p`} name="phone" type="tel" placeholder="Phone (optional)" className={input} />
      <label htmlFor={`${uid}-m`} className="sr-only">Anything else</label>
      <textarea
        id={`${uid}-m`}
        name="message"
        rows={2}
        placeholder="Dates, location, anything we should know (optional)"
        className={`${input} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-accent-red hover:bg-accent-red-dark disabled:opacity-60 px-3 py-2 text-xs font-bold uppercase tracking-[2px] text-white transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send to Franck's Team"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400">
          That didn&apos;t go through. Email{" "}
          <a href="mailto:info@franckthesolution.com" className="underline">
            info@franckthesolution.com
          </a>
          .
        </p>
      )}
      <p className="text-[10px] text-text-muted">Strictly confidential. Never shared.</p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* The widget                                                          */
/* ------------------------------------------------------------------ */

export default function FranckChat() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const loaded = useRef(false);

  // Restore the conversation for this browser tab.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Msg[];
        if (Array.isArray(saved) && saved.length) setMessages(saved);
      }
    } catch {}
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (!loaded.current || busy) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch {}
  }, [messages, busy]);

  // One gentle nudge per session, after the visitor has been reading a while.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 25000);
    return () => clearTimeout(t);
  }, []);

  const dismissTeaser = useCallback(() => {
    setTeaser(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (open) {
      dismissTeaser();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, dismissTeaser]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock page scroll behind the full-screen panel on phones.
  useEffect(() => {
    if (!open || window.innerWidth >= 640) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim().slice(0, 1500);
      if (!content || busy) return;
      setInput("");
      const history: Msg[] = [...messages, { role: "user", content }];
      setMessages([...history, { role: "assistant", content: "" }]);
      setBusy(true);

      const controller = new AbortController();
      abortRef.current = controller;
      let reply = "";
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: pathname,
            messages: history
              .filter((m) => m !== GREETING)
              .map(({ role, content }) => ({ role, content })),
          }),
          signal: controller.signal,
        });
        if (!res.ok || !res.body) {
          const err = await res.json().catch(() => null);
          throw new Error(err?.error || "request failed");
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          reply += decoder.decode(value, { stream: true });
          const visible = reply.replace(/\[\[[^\]]*$/, "").replace(LEAD_TAG, "").trim();
          setMessages([...history, { role: "assistant", content: visible }]);
        }
        const lead = reply.match(LEAD_TAG)?.[1]?.trim();
        const clean = reply.replace(LEAD_TAG, "").trim();
        setMessages([
          ...history,
          {
            role: "assistant",
            content: clean || "Say that again for me?",
            ...(lead ? { lead } : {}),
          },
        ]);
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
        const msg = (e as Error).message;
        setMessages([
          ...history,
          {
            role: "assistant",
            content:
              msg && msg !== "request failed"
                ? msg
                : "Lost the signal for a second. Try again, or email my team at info@franckthesolution.com.",
          },
        ]);
      } finally {
        setBusy(false);
        abortRef.current = null;
      }
    },
    [busy, messages, pathname]
  );

  const reset = () => {
    abortRef.current?.abort();
    setBusy(false);
    setMessages([GREETING]);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const closeOnMobile = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) setOpen(false);
  };

  const showStarters = messages.length === 1 && !busy;
  // Only the most recent lead form is shown, so repeated offers don't stack up.
  const lastLeadIndex = messages.reduce((acc, m, i) => (m.lead ? i : acc), -1);

  return (
    <>
      {/* Launcher */}
      {!open && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex items-end gap-3">
          {teaser && (
            <div className="relative hidden sm:block max-w-[220px] rounded-xl rounded-br-sm border border-white/10 bg-bg-steel-card px-4 py-3 text-sm text-white shadow-2xl">
              <button
                onClick={dismissTeaser}
                aria-label="Dismiss"
                className="absolute -top-2 -left-2 h-5 w-5 rounded-full bg-bg-card border border-white/15 text-[11px] leading-none text-text-secondary hover:text-white"
              >
                ×
              </button>
              <button onClick={() => setOpen(true)} className="text-left">
                Questions about protection or training? Ask me directly.
              </button>
            </div>
          )}
          <button
            onClick={() => setOpen(true)}
            aria-label="Chat with Franck"
            className="group relative flex items-center gap-3 rounded-full border border-white/15 bg-bg-primary/95 p-1 sm:pr-5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur hover:border-accent-red/70 transition-colors"
          >
            <span className="relative block h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full ring-2 ring-accent-red">
              <Image src={AVATAR} alt="Franck Pala" fill sizes="56px" className="object-cover" />
            </span>
            <span className="absolute left-10 top-1 sm:left-12 h-3 w-3 rounded-full bg-green-500 ring-2 ring-bg-primary" />
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span className="font-heading text-sm font-bold uppercase tracking-[2px] text-white">
                Talk to Franck
              </span>
              <span className="text-[11px] text-text-secondary">Ask me anything</span>
            </span>
          </button>
        </div>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Franck"
          className="fixed z-[60] inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(640px,calc(100vh-48px))] sm:w-[400px] flex flex-col overflow-hidden bg-bg-primary sm:rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-bg-steel px-4 py-3">
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-accent-red">
              <Image src={AVATAR} alt="" fill sizes="40px" className="object-cover" />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="font-heading text-base font-bold uppercase tracking-[2px] text-white">
                Franck Pala
              </p>
              <p className="text-[11px] text-text-secondary truncate">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5 align-middle" />
                AI version of Franck
              </p>
            </div>
            <button
              onClick={reset}
              className="rounded-md px-2 py-1 text-[11px] uppercase tracking-[1.5px] text-text-secondary hover:text-white hover:bg-white/5"
              aria-label="Start a new conversation"
              title="New conversation"
            >
              New
            </button>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-1 text-2xl leading-none text-text-secondary hover:text-white hover:bg-white/5"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-3"
            aria-live="polite"
          >
            {messages.map((m, i) => (
              <Fragment key={i}>
                {m.role === "assistant" ? (
                  <div className="flex items-end gap-2">
                    <span className="relative block h-7 w-7 shrink-0 overflow-hidden rounded-full">
                      <Image src={AVATAR} alt="" fill sizes="28px" className="object-cover" />
                    </span>
                    <div className="max-w-[85%]">
                      <div className="rounded-2xl rounded-bl-sm border border-white/10 bg-bg-card px-3.5 py-2.5 text-sm leading-relaxed text-text-secondary">
                        {m.content ? (
                          <MessageText text={m.content} onNavigate={closeOnMobile} />
                        ) : (
                          <span className="inline-flex gap-1 py-1" aria-label="Franck is typing">
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-secondary [animation-delay:-0.3s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-secondary [animation-delay:-0.15s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-secondary" />
                          </span>
                        )}
                      </div>
                      {m.lead && i === lastLeadIndex && (
                        <LeadForm service={m.lead} transcript={messages.slice(0, i + 1)} />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-accent-red px-3.5 py-2.5 text-sm leading-relaxed text-white">
                      {m.content}
                    </div>
                  </div>
                )}
              </Fragment>
            ))}

            {showStarters && (
              <div className="flex flex-wrap gap-2 pl-9">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-accent-blue/50 bg-accent-blue/10 px-3 py-1.5 text-xs text-accent-blue-light hover:bg-accent-blue/20 hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-white/10 bg-bg-steel px-3 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]"
          >
            <div className="flex items-end gap-2">
              <label htmlFor="franck-ai-input" className="sr-only">
                Message Franck
              </label>
              <textarea
                id="franck-ai-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                maxLength={1500}
                placeholder="Type your message..."
                className="max-h-32 min-h-[44px] flex-1 resize-none rounded-xl border border-white/15 bg-bg-primary px-3.5 py-2.5 text-base sm:text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-blue-light"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="h-11 w-11 shrink-0 rounded-xl bg-accent-red text-white hover:bg-accent-red-dark disabled:opacity-40 transition-colors flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M3.4 20.4 21 12 3.4 3.6l-.01 6.53L15 12 3.39 13.87z" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-text-muted">
              AI can make mistakes. In an emergency, call 911.
            </p>
          </form>
        </div>
      )}
    </>
  );
}
