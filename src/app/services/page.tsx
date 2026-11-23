import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import RedDivider from "@/components/RedDivider";
import LocationLine from "@/components/LocationLine";
import ServicesGrid from "@/components/ServicesGrid";
import ContactForm from "@/components/ContactForm";
import { SITE_URL, routes } from "@/lib/links";
import { hireUsFormOptions, services } from "@/lib/services";
import { ORG_ID, jsonLdProps } from "@/lib/schema";

const PAGE_TITLE = "Protection & Security Services in Miami, FL | FTS";
const PAGE_DESCRIPTION =
  "Executive protection, bodyguards, armed and unarmed transportation, asset protection, investigations, bail bonds, and fugitive apprehension. Based in Miami.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: routes.services },
  openGraph: {
    type: "website",
    url: routes.services,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/images/05_private_jet_security.jpg", alt: "Franck Pala providing executive protection" }],
  },
  twitter: { card: "summary_large_image", title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "FrancktheSolution services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.blurb,
      url: `${SITE_URL}${s.href}`,
      provider: { "@id": ORG_ID },
    },
  })),
};

export default function ServicesHubPage() {
  return (
    <>
      <script {...jsonLdProps(listSchema)} />
      <ScrollAnimator />
      <Navbar />
      <main>
        <section className="relative overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary overflow-hidden">
            <img
              src="/images/05_private_jet_security.jpg"
              alt=""
              className="ep-ken-burns absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-14 sm:pt-44 sm:pb-20">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Services · Franck Pala
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] mb-5 text-white">
                Protection &amp; Security <span className="text-accent-red">Services</span>
              </h1>
              <LocationLine className="hero-animate hero-animate-2 mb-6" />
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed font-body">
                From executive protection and bodyguards to secure
                transportation, asset protection, investigations, bail bonds,
                and fugitive apprehension, every assignment is planned and
                carried out with confidence, efficiency, and discretion.
              </p>
            </div>
          </div>
        </section>

        <ServicesGrid
          id="all-services"
          eyebrow="Choose a Service"
          title="Every"
          titleAccent="Service"
          intro="Pick a service to see what's included, how it works, and common questions."
          ctaLabel="Request a Consultation"
          ctaHref="#request"
        />

        <RedDivider />

        <section id="request" className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]">
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center animate-on-scroll">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
                Not Sure What <span className="text-accent-red">You Need?</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 font-body">
                Tell us your situation and Franck&apos;s team will recommend
                the right service. Strictly confidential.
              </p>
            </div>
            <div className="animate-on-scroll rounded-2xl border border-accent-blue/25 bg-bg-steel-card/50 backdrop-blur p-6 sm:p-8 lg:p-10 text-left">
              <ContactForm
                subject="Services inquiry"
                serviceOptions={hireUsFormOptions}
                messagePlaceholder="Dates, locations, and what you need. Held in strict confidence."
                submitLabel="Send Request"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
