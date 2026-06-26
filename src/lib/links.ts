// Centralized external + key route links so every page stays consistent.
export const links = {
  // Commerce / conversion
  workshopStripe: "https://buy.stripe.com/9B65kF3sl0W96yQ1TS57W04",
  selfDefender: "https://www.theselfdefendertool.com/",
  skool:
    "https://www.skool.com/defensivetactics/about?ref=5872d5e010f741d2a991a3878f95b264",

  // Brand / contact
  eprotection: "https://eprotectionvip.com",
  instagram: "https://instagram.com/FranckTheSolution",
  tiktok: "https://www.tiktok.com/@franckthesolution",
  emailFranck: "mailto:franck@eprotectionvip.com",
  emailTactops: "mailto:TACTOPSUSA@gmail.com",
} as const;

// Internal routes
export const routes = {
  home: "/",
  workshops: "/workshops",
  training: "/training",
  hireUs: "/hire-us",
  selfDefender: "/self-defender",
  shop: "/shop",
  vlog: "/vlog",
  about: "/about",
} as const;
