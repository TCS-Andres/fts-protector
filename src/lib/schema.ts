// schema.org structured data (JSON-LD) so search engines understand who
// FrancktheSolution is, where it operates, and what each service page offers.
import { SITE_URL, links } from "@/lib/links";
import type { ServicePage } from "@/lib/service-pages";

export const ORG_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "FrancktheSolution",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/images/franck_instructor_portrait.jpg`,
  email: "info@franckthesolution.com",
  description:
    "Executive protection, bodyguard, secure transportation, asset protection, investigations, bail bonds, fugitive apprehension, and defensive tactics training led by Franck Pala. Based in Miami, Florida, available worldwide.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Miami" },
    { "@type": "State", name: "Florida" },
    { "@type": "Country", name: "United States" },
    "Worldwide",
  ],
  founder: {
    "@type": "Person",
    name: "Franck Pala",
    jobTitle: "Executive Protection Specialist and Defensive Tactics Instructor",
  },
  sameAs: [links.instagram, links.tiktok],
};

export function servicePageSchema(page: ServicePage) {
  const url = `${SITE_URL}/services/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.name,
        serviceType: page.name,
        description: page.metaDescription,
        url,
        image: `${SITE_URL}${page.heroImage}`,
        provider: { "@id": ORG_ID },
        areaServed: page.slug === "fugitive-apprehension" || page.slug === "bail-bonds"
          ? [{ "@type": "State", name: "Florida" }]
          : [
              { "@type": "City", name: "Miami" },
              { "@type": "State", name: "Florida" },
              "Worldwide",
            ],
        audience: { "@type": "Audience", audienceType: page.audience.join(", ") },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: page.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/** Renders a JSON-LD script tag. */
export function jsonLdProps(data: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
