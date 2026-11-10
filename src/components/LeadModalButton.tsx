"use client";

import { useRef, useState, type ReactNode } from "react";
import ContactForm, { type ContactFormProps } from "@/components/ContactForm";

type Props = {
  /** Text on the button that opens the popup. */
  label: ReactNode;
  className?: string;
  /** Small kicker above the popup title. */
  eyebrow?: string;
  title: string;
  /** Lead paragraph under the title. */
  intro?: ReactNode;
  /** Optional status line (e.g. "Currently booked") shown above the title. */
  status?: ReactNode;
  form: ContactFormProps;
};

/**
 * A button that opens a lead-capture popup with the site's contact form.
 * Built on the native <dialog>, so focus, Escape-to-close and the backdrop
 * come from the browser. Clicking the backdrop also closes it.
 */
export default function LeadModalButton({
  label,
  className,
  eyebrow,
  title,
  intro,
  status,
  form,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  // The form only mounts while open, so every open starts with a fresh form.
  const [open, setOpen] = useState(false);

  function show() {
    setOpen(true);
    ref.current?.showModal();
  }

  function close() {
    ref.current?.close();
  }

  return (
    <>
      <button type="button" onClick={show} className={className}>
        {label}
      </button>

      <dialog
        ref={ref}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label={title}
        className="lead-modal text-left fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-accent-blue/30 bg-[#0C1118] p-0 text-white shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center rounded-full text-text-secondary text-2xl leading-none hover:text-white hover:bg-white/10 transition-colors"
          >
            &times;
          </button>

          {status && <div className="mb-4 pr-10">{status}</div>}
          {eyebrow && (
            <p className="text-accent-blue-light text-[11px] uppercase tracking-[3px] font-bold font-body mb-2 pr-10">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white leading-tight mb-3 pr-10">
            {title}
          </h2>
          {intro && (
            <div className="text-text-secondary text-sm sm:text-base leading-relaxed font-body mb-6">
              {intro}
            </div>
          )}

          {open && <ContactForm {...form} />}
        </div>
      </dialog>
    </>
  );
}
