// Every service Franck's team can be hired for. One list drives the homepage
// services grid, the Hire Us page grid, and the Hire Us booking form options,
// so the wording stays identical everywhere. Keep it in step with
// src/lib/franck-ai/knowledge.ts.
import { routes } from "@/lib/links";

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
    href: hireUsFor("Executive Protection"),
  },
  {
    name: "Bodyguard",
    blurb: "A trained professional at your side, wherever you go.",
    icon: "bodyguard",
    href: hireUsFor("Bodyguard"),
  },
  {
    name: "Armed & Unarmed Transportation",
    blurb: "Secure drivers and vehicles, armed or unarmed.",
    icon: "car",
    href: hireUsFor("Armed & Unarmed Transportation"),
  },
  {
    name: "Asset Protection",
    blurb: "Protecting property, valuables, and business assets.",
    icon: "vault",
    href: hireUsFor("Asset Protection"),
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
    href: hireUsFor("Bail Bonds"),
  },
  {
    name: "Fugitive Apprehension",
    blurb: "Locating and recovering wanted individuals. Active Florida agent.",
    icon: "target",
    href: hireUsFor("Fugitive Apprehension"),
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
