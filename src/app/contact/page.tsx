import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import ContactForm from "@/components/ContactForm";

const CONTACT_EMAIL = "info@franckthesolution.com";

export const metadata: Metadata = {
  title: "Contact | FrancktheSolution",
  description:
    "Get in touch with Franck Pala and the FrancktheSolution team - executive protection, investigations, training, and product inquiries.",
  alternates: { canonical: "/contact" },
};

const services = [
  "Executive Protection",
  "Investigative Services",
  "Private Training",
  "Group Training",
  "EPS Training",
  "Online Training",
  "Workshop",
  "The FranckTheSolution Fork",
  "TheSelfDefender",
  "Media / Other",
];

export default function ContactPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden noise-bg" style={{ background: "linear-gradient(180deg, #06090D 0%, #0C1118 100%)" }}>
          <div className="absolute -top-32 left-1/3 w-[560px] h-[320px] bg-accent-blue/15 blur-[130px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-10 sm:pt-44 lg:pt-40 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                Get In Touch
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                Let&apos;s Talk.
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl font-body">
                Protection, investigations, training, or the tools - tell us what
                you need and Franck&apos;s team will get back to you. Every
                message is handled in strict confidence.
              </p>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Form + details */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
              {/* Form */}
              <div className="animate-on-scroll rounded-2xl border border-accent-blue/20 bg-bg-steel-card/40 p-6 sm:p-8 lg:p-10">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-6">
                  Send a Message
                </h2>
                <ContactForm
                  subject="New inquiry from franckthesolution.com"
                  serviceOptions={services}
                  submitLabel="Send Message"
                />
              </div>

              {/* Details */}
              <div className="animate-on-scroll">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group flex items-center gap-4 rounded-xl border border-accent-blue/25 bg-bg-steel-card/60 px-5 py-4 hover:border-accent-blue-light hover:bg-accent-blue/10 transition-all"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light">
                      ✉
                    </span>
                    <span>
                      <span className="block text-text-muted text-xs uppercase tracking-[2px] font-body">
                        Email
                      </span>
                      <span className="block text-white text-sm font-body break-all group-hover:text-accent-blue-light transition-colors">
                        {CONTACT_EMAIL}
                      </span>
                    </span>
                  </a>

                  <a
                    href="https://instagram.com/FranckTheSolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-accent-blue/25 bg-bg-steel-card/60 px-5 py-4 hover:border-accent-blue-light hover:bg-accent-blue/10 transition-all"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center text-accent-blue-light">
                      @
                    </span>
                    <span>
                      <span className="block text-text-muted text-xs uppercase tracking-[2px] font-body">
                        Instagram
                      </span>
                      <span className="block text-white text-sm font-body group-hover:text-accent-blue-light transition-colors">
                        @FranckTheSolution
                      </span>
                    </span>
                  </a>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed font-body mt-8">
                  For executive protection and investigations, the more detail
                  you can share about your situation, location, and timeline,
                  the faster we can help. All inquiries are confidential.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
