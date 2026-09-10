// TACTOPSUSA product disclaimer. Legal text - reproduced verbatim, do not
// paraphrase. Shown immediately before any purchase action so buyers see it
// before they buy.
export const DISCLAIMER_TEXT =
  "This product IS NOT a weapon nor should be used as weapon or to cause bodily harm or property damage in any way. It is the responsibility of the buyer, not the seller, to ascertain and obey, all applicable Local, State, Federal and International Laws in regard to the possession and use of this item. All equipment is sold subject to Public Law 90-351, Title II, U.S.D., Section 2511, and any Local, State or Federal ordinances. The purchaser of this item certifies that he/she is at least 18 years of age. This item CANNOT be sold to minors under the age of 18. TACTOPSUSA disclaims any and all liability related to improper, illegal, unintended use or modification of this item. The purchaser, user or owner assumes all risk of injury from any use. TACTOPSUSA will not be held liable for the misuse of this product. Check regulations in your state.";

const SHORT_TEXT =
  "This product IS NOT a weapon nor should be used as weapon or to cause bodily harm or property damage in any way. It is the responsibility of the buyer to obey all applicable Local, State, Federal and International Laws. Must be 18 or older. Check regulations in your state.";

type Props = {
  /** "full" prints the complete legal text, "compact" a condensed version. */
  variant?: "full" | "compact";
  className?: string;
};

export default function ProductDisclaimer({
  variant = "full",
  className = "",
}: Props) {
  const isFull = variant === "full";

  return (
    <aside
      aria-label="Product disclaimer"
      className={`rounded-xl border border-accent-gold/40 bg-accent-gold/[0.06] ${
        isFull ? "p-5 sm:p-6" : "p-4 sm:p-5"
      } ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          aria-hidden
          className="flex-shrink-0 w-7 h-7 rounded-md bg-accent-gold/20 border border-accent-gold/50 flex items-center justify-center text-accent-gold text-sm"
        >
          !
        </span>
        <p className="font-heading text-sm sm:text-base font-bold uppercase tracking-[2px] text-accent-gold leading-none">
          Disclaimer
        </p>
        <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full border border-accent-gold/50 bg-accent-gold/10 text-accent-gold text-[10px] uppercase tracking-[1.5px] font-bold font-body">
          18+
        </span>
      </div>
      <p
        className={`text-text-secondary leading-relaxed font-body ${
          isFull ? "text-xs sm:text-[13px]" : "text-xs"
        }`}
      >
        {isFull ? DISCLAIMER_TEXT : SHORT_TEXT}
      </p>
    </aside>
  );
}
