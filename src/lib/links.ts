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

// Web3Forms public access key (safe for client-side use).
// Submissions are routed to the recipient configured in the Web3Forms dashboard.
export const WEB3FORMS_ACCESS_KEY = "928919bd-0630-41dd-8405-06a306002ada";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Internal routes
export const routes = {
  home: "/",
  workshops: "/workshops",
  training: "/training",
  trainingOnline: "/training/online",
  trainingPrivate: "/training/private",
  trainingGroup: "/training/group",
  trainingEps: "/training/eps",
  hireUs: "/hire-us",
  investigations: "/investigations",
  selfDefender: "/self-defender",
  shop: "/shop",
  ftsFork: "/shop/fts-fork",
  // Shopify product page for the CFM manual
  cfmBook: "/shop/products/cfm-circular-footwork-mechanics-manual-by-franck-pala",
  vlog: "/vlog",
  about: "/about",
  contact: "/contact",
} as const;
