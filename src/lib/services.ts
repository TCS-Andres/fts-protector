// Every service Franck's team can be hired for. One list drives the homepage
// services grid, the Hire Us page grid, the /services hub, and the booking
// form options. Each tile links to its SEO page (src/lib/service-pages.ts),
// so the wording stays identical everywhere. Keep it in step with
// src/lib/franck-ai/knowledge.ts.
import { routes } from "@/lib/links";
import { servicePath } from "@/lib/service-pages";

export type ServiceIcon =
  | "shield"
  | "bodyguard"
  | "car"
  | "vault"
  | "search"
  | "gavel"
  | "target";

export type Service = {
  /** Display name, also the booking-form option. */
  name: string;
  /** One plain-English line under the name. */
  blurb: string;
  icon: ServiceIcon;
  /** Where the tile goes. */
  href: string;
};

/** Link straight to the Hire Us form with this service already selected. */
export const hireUsFor = (service: string) =>
  `${routes.hireUs}?service=${encodeURIComponent(service)}#book`;

export const services: Service[] = [
  {
    name: "Executive Protection",
    blurb: "Close protection for executives, families, and VIPs.",
    icon: "shield",
    href: servicePath("executive-protection"),
  },
  {
    name: "Bodyguard",
    blurb: "A trained professional at your side, wherever you go.",
    icon: "bodyguard",
    href: servicePath("bodyguard-services"),
  },
  {
    name: "Armed & Unarmed Transportation",
    blurb: "Secure drivers and vehicles, armed or unarmed.",
    icon: "car",
    href: servicePath("armed-unarmed-transportation"),
  },
  {
    name: "Asset Protection",
    blurb: "Protecting property, valuables, and business assets.",
    icon: "vault",
    href: servicePath("asset-protection"),
  },
  {
    name: "Investigations",
    blurb: "Surveillance, background checks, and locating people.",
    icon: "search",
    href: routes.investigations,
  },
  {
    name: "Bail Bonds",
    blurb: "Help getting someone released, handled fast and discreetly.",
    icon: "gavel",
    href: servicePath("bail-bonds"),
  },
  {
    name: "Fugitive Apprehension",
    blurb: "Locating and recovering wanted individuals. Active Florida agent.",
    icon: "target",
    href: servicePath("fugitive-apprehension"),
  },
];

/** Options for the Hire Us booking form. */
export const hireUsFormOptions = [
  "Executive Protection",
  "Bodyguard",
  "Armed & Unarmed Transportation",
  "Asset Protection",
  "Female Executive Protection Specialist",
  "Investigative Services",
  "Bail Bonds",
  "Fugitive Apprehension",
  "Not sure yet",
];
