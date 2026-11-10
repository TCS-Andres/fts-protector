import LeadModalButton from "@/components/LeadModalButton";

// The two calls to action for the female EPS service, reused on the home page,
// the female EPS page, and the EPS training page. Both open a popup with the
// site's Web3Forms contact form, so every click can end in a captured lead.

export const primaryBtn =
  "inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.03] transition-all duration-300 min-h-[52px] cursor-pointer";

export const secondaryBtn =
  "inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px] cursor-pointer";

export const IMMERSION_OPTION =
  "1-Month Full Immersion - EP Agent Operator ($8,999)";

const applyOptions = [
  IMMERSION_OPTION,
  "EPS Training - private blocks",
  "Not sure yet - help me choose",
];

function BookedStatus() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-red/15 border border-accent-red/40 text-[11px] uppercase tracking-[2px] font-bold font-body text-white">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-red" />
      </span>
      Currently Booked
    </span>
  );
}

export function HireFemaleEpsButton({
  label = "Hire a Female EPS",
  className = primaryBtn,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <LeadModalButton
      label={label}
      className={className}
      status={<BookedStatus />}
      eyebrow="Female Executive Protection"
      title="Emma Is Currently Booked Out"
      intro={
        <p>
          Unfortunately, she is currently booked out. Leave your information
          here and we&apos;ll get in contact with you to better coordinate.
        </p>
      }
      form={{
        subject: "Female EPS hire request (Emma booked out)",
        serviceLabel: "Type of coverage",
        servicePlaceholder: "Select one",
        serviceOptions: [
          "Single day or event",
          "Multi-day detail",
          "Travel coverage",
          "Ongoing / residential",
          "Not sure yet",
        ],
        messageRequired: false,
        messagePlaceholder:
          "Dates, city, and who we would be protecting. Everything you share is held in strict confidence.",
        submitLabel: "Request a Female EPS",
        successTitle: "You're on the List",
        successMessage:
          "Thanks - we have your details. Franck's team will reach out shortly to coordinate availability.",
      }}
    />
  );
}

export function ApplyEpsButton({
  label = "Apply to Become an EPS",
  className = secondaryBtn,
  defaultProgram,
}: {
  label?: string;
  className?: string;
  /** Pre-select a program in the dropdown. */
  defaultProgram?: string;
}) {
  return (
    <LeadModalButton
      label={label}
      className={className}
      eyebrow="Executive Protection Specialist"
      title="Apply to Become an EPS"
      intro={
        <p>
          Every applicant is screened. Tell us about your background and goals,
          and Franck&apos;s team will follow up with dates and next steps.
        </p>
      }
      form={{
        subject: "EPS application",
        serviceLabel: "Program",
        servicePlaceholder: "Select a program",
        serviceOptions: applyOptions,
        defaultService: defaultProgram ?? "",
        messagePlaceholder:
          "Your background (military, law enforcement, security, martial arts, or committed civilian), your goals, and when you'd like to start.",
        submitLabel: "Submit Application",
        successTitle: "Application Received",
        successMessage:
          "Thanks - Franck's team will review your application and reach out with next steps.",
      }}
    />
  );
}
