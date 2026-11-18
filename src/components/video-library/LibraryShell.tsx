import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routes } from "@/lib/links";

// Page frame for the buyer-only pages: same nav, footer and steel gradient as
// the shop's product pages.
export default function LibraryShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden noise-bg min-h-[80vh]"
          style={{ background: "linear-gradient(180deg, #06090D 0%, #0C1118 100%)" }}
        >
          <div className="absolute -top-32 left-1/3 w-[560px] h-[320px] bg-accent-blue/15 blur-[130px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16 sm:pt-44 lg:pt-40 lg:pb-24 w-full">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function SignedInBar({ email }: { email: string | null }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-body text-text-muted">
      {email ? (
        <span>
          Signed in as <span className="text-text-secondary">{email}</span>
        </span>
      ) : null}
      <a
        href={routes.accountLogout}
        className="text-accent-blue-light uppercase tracking-[2px] font-bold hover:text-white transition-colors"
      >
        Sign Out
      </a>
    </div>
  );
}

export function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl rounded-2xl border border-accent-blue/30 bg-bg-steel-card/60 p-6 sm:p-9 shadow-[0_0_50px_rgba(46,114,184,0.08)]">
      {children}
    </div>
  );
}

export const primaryButton =
  "inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.02] transition-all duration-300 min-h-[52px]";

export const secondaryButton =
  "inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 border border-white/20 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-blue-light hover:text-accent-blue-light transition-all duration-300 min-h-[52px]";
