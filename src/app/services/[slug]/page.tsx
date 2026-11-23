import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import RedDivider from "@/components/RedDivider";
import LocationLine from "@/components/LocationLine";
import ContactForm from "@/components/ContactForm";
import { routes } from "@/lib/links";
import { hireUsFormOptions, services } from "@/lib/services";
import { getServicePage, servicePages } from "@/lib/service-pages";
import { jsonLdProps, servicePageSchema } from "@/lib/schema";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  const path = `/services/${page.slug}`;
  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: page.seoTitle,
      description: page.metaDescription,
      siteName: "FrancktheSolution",
      images: [{ url: page.heroImage, alt: page.heroImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
      images: [page.heroImage],
    },
  };
}

const whyUs = [
  { label: "20+ Years in the Field", body: "Led by Franck Pala: executive protection, close combat, and active fugitive apprehension work." },
  { label: "Hand-Picked Professionals", body: "Every person on an assignment is personally selected and held to Franck's standard." },
  { label: "Confidence, Efficiency, Discretion", body: "Planned carefully, carried out quietly, and adjusted in real time." },
  { label: "Based in Miami", body: "Serving South Florida every day and traveling with clients across the U.S. and worldwide." },
];

const btnPrimary =
  "inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded ring-1 ring-accent-red/40 hover:bg-accent-red-dark hover:shadow-[0_0_24px_rgba(196,30,30,0.55)] hover:scale-[1.03] transition-all duration-300 text-center min-h-[52px]";
const btnSecondary =
  "inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-white/5 hover:border-white/50 transition-all duration-300 text-center min-h-[52px]";

export default async function ServicePageRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const related = page.related
    .map((r) => services.find((s) => s.href.endsWith(`/${r}`)))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      <script {...jsonLdProps(servicePageSchema(page))} />
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary overflow-hidden">
            {/* Photo fills the screen on phones and sits on the right half on
                desktop, so the subject never ends up behind the headline. */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] overflow-hidden">
              <img
                src={page.heroImage}
                alt=""
                className={`ep-ken-burns absolute inset-0 w-full h-full object-cover ${page.heroImagePos} opacity-55 lg:opacity-80`}
              />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-bg-primary to-transparent" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25 lg:from-bg-primary lg:via-bg-primary/70 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-36 w-full">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="hero-animate hero-animate-1 mb-5">
                <ol className="flex flex-wrap items-center gap-2 text-text-muted text-[11px] sm:text-xs uppercase tracking-[2px] font-body">
                  <li><a href={routes.home} className="hover:text-white transition-colors">Home</a></li>
                  <li aria-hidden="true">/</li>
                  <li><a href={routes.services} className="hover:text-white transition-colors">Services</a></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-accent-blue-light" aria-current="page">{page.name}</li>
                </ol>
              </nav>

              <p className="hero-animate hero-animate-1 text-accent-blue-light text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                {page.eyebrow}
              </p>

              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] mb-4 text-white">
                {page.h1} <span className="text-accent-red">{page.h1Accent}</span>
              </h1>

              <p className="hero-animate hero-animate-2 text-white/95 text-base sm:text-lg lg:text-xl uppercase tracking-[2px] font-bold mb-5 font-body">
                {page.tagline}
              </p>

              <LocationLine
                highlight={page.slug === "bail-bonds" || page.slug === "fugitive-apprehension" ? "" : "Available worldwide"}
                className="hero-animate hero-animate-2 mb-6"
              />

              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 font-body">
                {page.intro}
              </p>

              <div className="hero-animate hero-animate-2 flex flex-wrap items-center gap-2 mb-10">
                {page.chips.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-3 py-1.5 bg-white/5 border border-accent-blue/40 rounded-full text-accent-blue-light text-[11px] uppercase tracking-[2px] font-bold font-body"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#request" className={btnPrimary}>
                  {page.name === "Bodyguard"
                    ? "Request a Bodyguard"
                    : page.name.length > 22
                      ? "Request a Quote"
                      : `Request ${page.name}`}
                </a>
                <a href="#included" className={btnSecondary}>
                  What&apos;s Included
                </a>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* OVERVIEW */}
        <section className="bg-bg-primary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
            <div className="animate-on-scroll">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6 leading-tight">
                {page.overviewTitle} <span className="text-accent-red">{page.overviewAccent}</span>
              </h2>
              {page.overview.map((p, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed mb-5 font-body">
                  {p}
                </p>
              ))}
            </div>
            <div className="animate-on-scroll rounded-2xl border border-white/10 bg-bg-card/60 p-6 sm:p-8">
              <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold mb-5 font-body">
                Why Franck&apos;s Team
              </p>
              <ul className="space-y-5">
                {whyUs.map((w) => (
                  <li key={w.label} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-accent-red shadow-[0_0_10px_rgba(196,30,30,0.7)]" />
                    <span>
                      <span className="block text-white font-bold font-body">{w.label}</span>
                      <span className="block text-text-secondary text-sm leading-relaxed font-body">{w.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section id="included" className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg scroll-mt-[112px]">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                {page.name}
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                What&apos;s <span className="text-accent-red">Included</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger-children">
              {page.included.map((item, i) => (
                <article
                  key={item.title}
                  className="animate-on-scroll relative rounded-xl border border-white/10 bg-bg-card/70 p-6 sm:p-7 overflow-hidden"
                >
                  <span className="absolute left-0 top-0 h-[3px] w-10 bg-accent-red" />
                  <p className="text-text-muted text-[11px] uppercase tracking-[3px] font-bold font-body mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-bg-primary py-14 sm:py-20 relative noise-bg">
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center animate-on-scroll">
            <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
              Who We Serve
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-8">
              Who It&apos;s <span className="text-accent-red">For</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {page.audience.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-white text-sm uppercase tracking-[2px] font-bold font-body"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* PROCESS */}
        <section className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                The Process
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                How It <span className="text-accent-red">Works</span>
              </h2>
            </div>
            <ol className="grid md:grid-cols-3 gap-6 stagger-children">
              {page.process.map((step, i) => (
                <li
                  key={step.title}
                  className="animate-on-scroll rounded-xl bg-bg-card border-t-2 border-accent-red p-6 sm:p-7"
                >
                  <p className="font-heading text-5xl text-accent-red font-bold leading-none mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-base leading-relaxed font-body">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bg-primary py-14 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Questions
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                {page.name} <span className="text-accent-red">FAQ</span>
              </h2>
            </div>
            <div className="space-y-3 animate-on-scroll">
              {page.faqs.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-xl border border-white/10 bg-bg-card/60 open:border-accent-red/40"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 text-white font-bold font-body text-base sm:text-lg [&::-webkit-details-marker]:hidden">
                    <h3>{f.q}</h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-accent-red text-2xl leading-none transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 sm:px-6 pb-5 text-text-secondary leading-relaxed font-body">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <RedDivider />

        {/* REQUEST FORM */}
        <section id="request" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden scroll-mt-[112px]">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src={page.heroImage}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${page.heroImagePos} opacity-20`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/95" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center animate-on-scroll">
              <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Hire Us
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-6">
                Request <span className="text-accent-red">{page.name}</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 font-body">
                Tell us what you need. Franck&apos;s team replies personally,
                and everything you share is held in strict confidence.
              </p>
            </div>
            <div className="animate-on-scroll rounded-2xl border border-accent-blue/25 bg-bg-steel-card/50 backdrop-blur p-6 sm:p-8 lg:p-10 text-left">
              <ContactForm
                subject={`${page.name} inquiry`}
                serviceOptions={hireUsFormOptions}
                defaultService={page.name}
                messagePlaceholder="Dates, locations, and what you need. Held in strict confidence."
                submitLabel="Send Request"
              />
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-bg-secondary py-14 sm:py-16 relative noise-bg">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white text-center mb-8">
              Related <span className="text-accent-red">Services</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  className="group rounded-xl border border-white/10 bg-bg-card/70 p-5 hover:border-accent-red/60 transition-colors"
                >
                  <span className="block font-heading text-lg font-bold uppercase text-white mb-1">
                    {r.name}
                  </span>
                  <span className="block text-text-secondary text-sm font-body mb-3">{r.blurb}</span>
                  <span className="text-accent-red text-xs font-bold uppercase tracking-[2px] font-body">
                    Learn More <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="text-center mt-8">
              <a
                href={routes.services}
                className="text-white text-sm font-bold uppercase tracking-[2px] font-body border-b-2 border-accent-red pb-1 hover:text-accent-red transition-colors"
              >
                See All Services &rarr;
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
