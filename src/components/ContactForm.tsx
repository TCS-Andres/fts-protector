"use client";

import { useId, useState } from "react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/links";

export type ContactFormProps = {
  /** Fixed subject line for the email Franck receives. */
  subject?: string;
  /** When provided, shows a "What do you need?" dropdown and appends the choice to the subject. */
  serviceOptions?: string[];
  /** Label above the dropdown. */
  serviceLabel?: string;
  /** Pre-selected dropdown option. */
  defaultService?: string;
  /** Placeholder option text in the dropdown. */
  servicePlaceholder?: string;
  /** Placeholder / prompt for the message field. */
  messagePlaceholder?: string;
  /** Lead-capture forms can make the message optional to lower friction. */
  messageRequired?: boolean;
  /** Submit button label. */
  submitLabel?: string;
  /** Heading and body shown after a successful submit. */
  successTitle?: string;
  successMessage?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  subject = "New inquiry from franckthesolution.com",
  serviceOptions,
  messagePlaceholder = "Tell Franck what you need, your timeline, and the best way to reach you.",
  submitLabel = "Send Message",
  serviceLabel = "What do you need?",
  defaultService = "",
  servicePlaceholder = "Select a service",
  messageRequired = true,
  successTitle = "Message Sent",
  successMessage = "Thanks - your message is on its way to Franck's team. Expect a reply shortly.",
}: ContactFormProps) {
  // Unique ids so two forms (e.g. a page form and a popup form) never collide.
  const uid = useId();
  const fid = (name: string) => `cf-${name}-${uid}`;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if a bot filled the hidden field, silently "succeed".
    if (data.get("botcheck")) {
      setStatus("success");
      form.reset();
      return;
    }

    // Compose a useful subject line.
    const service = data.get("service");
    data.set("subject", service ? `${subject} - ${service}` : subject);
    data.set("access_key", WEB3FORMS_ACCESS_KEY);
    data.set("from_name", "FranckTheSolution Website");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "We couldn't send your message. Please try again, or email info@franckthesolution.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent-blue/40 bg-accent-blue/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue/20 text-accent-blue-light text-2xl">
          ✓
        </div>
        <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
          {successTitle}
        </h3>
        <p className="text-text-secondary font-body">
          {successMessage} For anything urgent, email{" "}
          <a
            href="mailto:info@franckthesolution.com"
            className="text-accent-blue-light hover:text-white transition-colors"
          >
            info@franckthesolution.com
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-white/15 bg-bg-steel-card/70 px-4 py-3 text-white placeholder:text-text-muted font-body text-sm focus:outline-none focus:border-accent-blue-light focus:ring-1 focus:ring-accent-blue-light transition-colors";
  const labelClass =
    "block text-accent-blue-light text-xs uppercase tracking-[2px] font-bold mb-2 font-body";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={fid("name")} className={labelClass}>
            Name
          </label>
          <input
            id={fid("name")}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={fid("email")} className={labelClass}>
            Email
          </label>
          <input
            id={fid("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={fid("phone")} className={labelClass}>
            Phone <span className="text-text-muted normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id={fid("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(000) 000-0000"
            className={inputClass}
          />
        </div>
        {serviceOptions && serviceOptions.length > 0 && (
          <div>
            <label htmlFor={fid("service")} className={labelClass}>
              {serviceLabel}
            </label>
            <select
              id={fid("service")}
              name="service"
              className={inputClass}
              defaultValue={defaultService}
            >
              <option value="" disabled>
                {servicePlaceholder}
              </option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div>
        <label htmlFor={fid("message")} className={labelClass}>
          Message
          {!messageRequired && (
            <>
              {" "}
              <span className="text-text-muted normal-case tracking-normal">(optional)</span>
            </>
          )}
        </label>
        <textarea
          id={fid("message")}
          name="message"
          required={messageRequired}
          rows={5}
          placeholder={messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-accent-red text-sm font-body" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.02] transition-all duration-300 min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>

      <p className="text-text-muted text-xs font-body">
        Your details go straight to Franck&apos;s team and are never shared.
      </p>
    </form>
  );
}
