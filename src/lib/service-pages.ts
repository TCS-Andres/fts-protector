// Content for the individual service pages at /services/[slug].
// Investigations has its own full page at /investigations and is not here.
// Facts used here (20+ years, licensed and insured, tactical medic trained,
// agents hand-picked by Franck, active Florida fugitive apprehension agent,
// Miami base, worldwide deployment) match the rest of the site and
// src/lib/franck-ai/knowledge.ts. Keep them in step.

export type ServicePage = {
  slug: string;
  /** Display name; also the option preselected in the request form. */
  name: string;
  /** <title>, kept under ~60 characters. */
  seoTitle: string;
  /** Meta description, kept under ~160 characters. */
  metaDescription: string;
  keywords: string[];
  /** Small label above the H1. */
  eyebrow: string;
  /** H1, white part then red part. */
  h1: string;
  h1Accent: string;
  /** One-line subhead under the H1. */
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  /** CSS object-position for the hero photo. */
  heroImagePos: string;
  intro: string;
  chips: string[];
  /** Overview section: H2 (white + red) and body paragraphs. */
  overviewTitle: string;
  overviewAccent: string;
  overview: string[];
  /** "What's included" cards. */
  included: { title: string; body: string }[];
  /** Who the service is for. */
  audience: string[];
  /** Three-step process. */
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Slugs (or "investigations") shown as related services. */
  related: string[];
};

const protectionProcess = [
  {
    title: "Inquire",
    body: "Tell us the dates, the locations, and what concerns you. Everything you share is held in strict confidence from the first message.",
  },
  {
    title: "Vet & Scope",
    body: "We assess the threat picture and the logistics, then build the plan: team size, vehicles, routes, and timing. You receive a clear, transparent proposal.",
  },
  {
    title: "Deploy",
    body: "Hand-picked professionals carry out the plan with confidence, efficiency, and discretion, and adjust in real time as your day changes.",
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "executive-protection",
    name: "Executive Protection",
    seoTitle: "Executive Protection Miami, FL | FrancktheSolution",
    metaDescription:
      "Executive protection in Miami and worldwide. Discreet close protection for executives, families, and VIPs, led by Franck Pala with 20+ years in the field.",
    keywords: [
      "executive protection Miami",
      "executive protection services",
      "close protection Miami",
      "executive protection agent",
      "VIP protection Florida",
      "corporate executive security",
    ],
    eyebrow: "Executive Protection · Miami, Florida",
    h1: "Executive",
    h1Accent: "Protection",
    tagline: "Close protection that moves with your day.",
    heroImage: "/images/05_private_jet_security.jpg",
    heroImageAlt: "Franck Pala providing executive protection beside a private jet",
    heroImagePos: "object-[center_30%]",
    intro:
      "Discreet, professional close protection for executives, founders, families, and high-profile clients. Based in Miami and deployed worldwide, Franck Pala's team plans every movement in advance so your schedule runs smoothly and safely.",
    chips: ["Licensed & Insured", "Tactical Medic Trained", "20+ Years in the Field", "Available Worldwide"],
    overviewTitle: "Protection Built Around",
    overviewAccent: "Your Schedule",
    overview: [
      "Executive protection is more than a person standing next to you. It is planning, advance work, and calm decision-making that keeps problems from ever reaching you. Our agents study your itinerary, walk your venues and routes before you arrive, and stay one step ahead while you focus on your business.",
      "Every agent on a detail is personally selected by Franck Pala, tactical-medic trained, and held to the same standard he has applied for more than 20 years in executive protection. Whether you need a single agent for a meeting in Miami or a full team for international travel, the service is scaled to your risk profile and delivered with confidence, efficiency, and discretion.",
    ],
    included: [
      { title: "Close Protection Agents", body: "One agent or a full team, embedded into your day from arrival to departure and unobtrusive until the moment you need them." },
      { title: "Advance Work & Site Surveys", body: "Venues, hotels, restaurants, residences, and routes are walked and threat-assessed before you get there." },
      { title: "Secure Transportation", body: "Trained protective drivers with armed or unarmed options, route planning, and counter-surveillance." },
      { title: "Travel & Event Coverage", body: "Domestic and international travel, galas, premieres, fight nights, and private events, coordinated with venue security." },
      { title: "Residential & Family Security", body: "Standing details for the home, spouse and child protection, and short-term coverage during heightened threat windows." },
      { title: "Medical Readiness", body: "Agents are tactical-medic trained, so emergency care starts in seconds, not minutes." },
    ],
    audience: ["Executives & C-suite", "Founders & investors", "Pro athletes", "Entertainers & artists", "High-net-worth families", "Visiting dignitaries"],
    process: protectionProcess,
    faqs: [
      { q: "What does an executive protection agent do?", a: "An executive protection agent keeps a client safe by planning ahead: assessing threats, advancing venues and routes, managing movements, and responding immediately if something goes wrong. Most of the work is prevention, done quietly so the client can focus on their day." },
      { q: "Do you provide executive protection outside Miami?", a: "Yes. We are based in Miami, Florida and deploy across the U.S. and internationally. Tell us where you are traveling and we will scope the detail around your itinerary." },
      { q: "Are your agents armed?", a: "Armed and unarmed agents are both available. The right choice depends on your risk profile, the locations involved, and local law, and we recommend it during scoping." },
      { q: "How much does executive protection cost?", a: "Every engagement is priced after scoping, based on the number of agents, hours, vehicles, and travel. You receive a transparent quote before anything is booked." },
      { q: "Can I request a female protection specialist?", a: "Yes. We provide certified female executive protection specialists for women, families, and events where a woman on the detail is the better fit." },
    ],
    related: ["bodyguard-services", "armed-unarmed-transportation", "asset-protection"],
  },
  {
    slug: "bodyguard-services",
    name: "Bodyguard",
    seoTitle: "Bodyguard Services Miami, FL | Hire a Bodyguard",
    metaDescription:
      "Hire a professional bodyguard in Miami or anywhere you travel. Personal protection for individuals, families, and events from Franck Pala's hand-picked team.",
    keywords: [
      "bodyguard Miami",
      "hire a bodyguard",
      "bodyguard services",
      "personal bodyguard Florida",
      "personal protection Miami",
      "event bodyguard",
    ],
    eyebrow: "Bodyguard Services · Miami, Florida",
    h1: "Professional",
    h1Accent: "Bodyguards",
    tagline: "A trained professional at your side, wherever you go.",
    heroImage: "/images/04_nightclub_vip_section.png",
    heroImageAlt: "Franck Pala working as a bodyguard at a VIP nightlife venue",
    heroImagePos: "object-[center_20%]",
    intro:
      "When you need someone physically at your side, you need a professional who reads a room, de-escalates first, and acts decisively when it counts. Our bodyguards cover individuals, families, and events in Miami and anywhere you travel.",
    chips: ["Licensed & Insured", "Hand-Picked by Franck", "Armed or Unarmed", "Strictly Confidential"],
    overviewTitle: "Personal Protection,",
    overviewAccent: "Done Right",
    overview: [
      "A good bodyguard is calm, observant, and almost invisible until needed. Our bodyguards are selected and trained by Franck Pala, a former professional boxer and close-combat expert with 20+ years in protection, so they know how to control space, manage crowds, and keep a situation from escalating.",
      "We provide bodyguards for a single night out, a public appearance, a court date, a high-stress personal situation, or ongoing daily protection. Coverage can be armed or unarmed, and every assignment is planned around where you are going and who you need to be protected from.",
    ],
    included: [
      { title: "Personal Bodyguard", body: "A dedicated professional who stays with you through your day, your meetings, and your evenings." },
      { title: "Event & Nightlife Security", body: "VIP sections, private parties, concerts, and nightlife, with crowd control and secure entry and exit." },
      { title: "Public Appearances", body: "Signings, interviews, red carpets, and speaking events, with planned arrival and departure routes." },
      { title: "Short-Term Threat Coverage", body: "Immediate protection during harassment, threats, disputes, or other high-risk situations." },
      { title: "Family & Child Protection", body: "Protection for spouses and children at school, activities, errands, and travel." },
      { title: "Armed or Unarmed", body: "We match the level of protection to the risk and to local law, and explain the recommendation clearly." },
    ],
    audience: ["Individuals under threat", "Celebrities & influencers", "Athletes", "Business owners", "Families", "Event hosts"],
    process: protectionProcess,
    faqs: [
      { q: "How do I hire a bodyguard in Miami?", a: "Send a request through the form on this page with your dates, locations, and concerns. We respond personally, scope the assignment, and confirm a plan and quote before anything is booked." },
      { q: "What is the difference between a bodyguard and executive protection?", a: "A bodyguard focuses on personal, hands-on protection at your side. Executive protection adds the planning layer around it: advance work, routes, transportation, and coordination across a full itinerary. We provide both and recommend the right fit." },
      { q: "Can I hire a bodyguard for one night or one event?", a: "Yes. We cover single events, nights out, and appearances, as well as ongoing daily protection." },
      { q: "Do your bodyguards carry firearms?", a: "Armed and unarmed bodyguards are both available. We recommend the right option during scoping based on the risk, the venue, and local law." },
      { q: "Do you provide bodyguards outside Florida?", a: "Yes. We are based in Miami and travel across the U.S. and internationally with our clients." },
    ],
    related: ["executive-protection", "armed-unarmed-transportation", "fugitive-apprehension"],
  },
  {
    slug: "armed-unarmed-transportation",
    name: "Armed & Unarmed Transportation",
    seoTitle: "Armed & Unarmed Secure Transportation | Miami, FL",
    metaDescription:
      "Secure executive transportation in Miami and worldwide. Armed or unarmed protective drivers, planned routes, and counter-surveillance by Franck Pala's team.",
    keywords: [
      "armed transportation Miami",
      "secure transportation Miami",
      "armed driver",
      "executive transportation security",
      "protective driver",
      "armed chauffeur Florida",
    ],
    eyebrow: "Secure Transportation · Miami, Florida",
    h1: "Armed & Unarmed",
    h1Accent: "Transportation",
    tagline: "Get where you are going, safely and on time.",
    heroImage: "/images/02_suv_motorcade_arrival.png",
    heroImageAlt: "Franck Pala opening an SUV door for a client at a private airfield",
    heroImagePos: "object-[center_25%]",
    intro:
      "The most vulnerable moments are often in transit: arrivals, departures, and time on the road. Our protective drivers move you with planned routes, trained driving, and armed or unarmed protection.",
    chips: ["Armed or Unarmed", "Trained Protective Drivers", "Route Planning", "Airport & Jet Transfers"],
    overviewTitle: "Secure Movement,",
    overviewAccent: "Start to Finish",
    overview: [
      "Secure transportation is planned before the car ever moves. We map primary and backup routes, time arrivals to limit exposure, and watch for anyone paying too much attention. Your driver is a trained protection professional, not just a chauffeur.",
      "Choose armed or unarmed coverage based on your risk profile and destination. We handle airport and private jet transfers, daily executive driving, multi-vehicle movements for events, and transportation for families, all with confidence, efficiency, and discretion.",
    ],
    included: [
      { title: "Protective Drivers", body: "Drivers trained in defensive driving and protection, who stay with the vehicle and the client." },
      { title: "Armed or Unarmed Options", body: "Coverage matched to the risk, the route, and local law, explained clearly during scoping." },
      { title: "Route Planning", body: "Primary and alternate routes, safe stops, and timing planned in advance." },
      { title: "Airport & Private Jet Transfers", body: "Meet-and-greet on arrival, secure luggage handling, and direct transfers to your destination." },
      { title: "Multi-Vehicle Movements", body: "Coordinated vehicles for events, groups, and high-profile arrivals." },
      { title: "Counter-Surveillance", body: "Drivers watch for following vehicles and unusual attention, and adjust the route if needed." },
    ],
    audience: ["Executives", "Traveling VIPs", "Families", "Event organizers", "Corporate groups", "Visiting dignitaries"],
    process: protectionProcess,
    faqs: [
      { q: "What is secure transportation?", a: "Secure transportation is driving by a trained protection professional, with planned routes, controlled arrivals and departures, and the ability to respond to threats. It reduces exposure during the moments people are most vulnerable." },
      { q: "Can I book an armed driver?", a: "Yes. Armed and unarmed protective drivers are both available. We recommend the right option based on your risk profile, route, and local law." },
      { q: "Do you handle airport and private jet pickups?", a: "Yes. We coordinate meet-and-greet, luggage, and direct secure transfers from commercial airports and private terminals." },
      { q: "Do you provide transportation outside Miami?", a: "Yes. We are based in Miami, Florida and support clients across the U.S. and internationally." },
      { q: "Can transportation be combined with a bodyguard or protection detail?", a: "Yes. Most clients pair secure transportation with an executive protection agent or bodyguard so coverage continues once they step out of the vehicle." },
    ],
    related: ["executive-protection", "bodyguard-services", "asset-protection"],
  },
  {
    slug: "asset-protection",
    name: "Asset Protection",
    seoTitle: "Asset Protection Services Miami, FL | FrancktheSolution",
    metaDescription:
      "Physical asset protection in Miami and beyond. Security for property, valuables, high-value transports, and business assets, led by Franck Pala.",
    keywords: [
      "asset protection security",
      "asset protection Miami",
      "valuables escort",
      "high value asset security",
      "property security Florida",
      "business asset protection",
    ],
    eyebrow: "Asset Protection · Miami, Florida",
    h1: "Asset",
    h1Accent: "Protection",
    tagline: "Your property, valuables, and business, protected.",
    heroImage: "/images/06_boardroom_protection.jpg",
    heroImageAlt: "Franck Pala protecting a corporate boardroom meeting",
    heroImagePos: "object-[center_25%]",
    intro:
      "Some of what needs protecting is not a person. We secure property, valuables, high-value transports, and business assets with the same planning and discipline we bring to protecting people.",
    chips: ["Licensed & Insured", "High-Value Escorts", "Property Security", "Strictly Confidential"],
    overviewTitle: "Security for What",
    overviewAccent: "Matters Most",
    overview: [
      "Asset protection starts with understanding what is at risk and how it could be lost: theft, damage, tampering, or exposure. We assess the vulnerabilities, then put people and procedures in place to close them, whether the asset is a residence, a collection, a shipment, or a business location.",
      "Our team provides on-site security, escorts for high-value items in transit, protection for homes and estates while owners are away, and discreet security for business assets and sensitive operations. Every assignment is handled with confidence, efficiency, and discretion.",
    ],
    included: [
      { title: "High-Value Escorts", body: "Protection for jewelry, art, cash, documents, and other valuables in transit." },
      { title: "Residential & Estate Security", body: "Coverage for homes and estates, including while owners are traveling." },
      { title: "Business Asset Security", body: "On-site protection for offices, inventory, equipment, and sensitive operations." },
      { title: "Event & Exhibit Security", body: "Security for valuables on display at private events, showings, and exhibits." },
      { title: "Vulnerability Assessments", body: "A clear review of where your assets are exposed and how to fix it." },
      { title: "Discreet Coverage", body: "Low-profile protection that does not draw attention to what is being protected." },
    ],
    audience: ["Property owners", "Collectors", "Jewelers & dealers", "Businesses", "Estates", "Event organizers"],
    process: protectionProcess,
    faqs: [
      { q: "What does physical asset protection include?", a: "It covers the people and procedures that keep property and valuables safe: on-site security, escorts for high-value items in transit, residential and estate coverage, and assessments of where assets are exposed." },
      { q: "Can you escort valuables or cash?", a: "Yes. We provide protective escorts for high-value items. Tell us what is being moved, from where, and when, and we will plan the movement." },
      { q: "Do you protect homes while the owners are away?", a: "Yes. We provide residential and estate security, including coverage while owners travel." },
      { q: "Is this financial or legal asset protection?", a: "No. Our asset protection is physical security for property and valuables. For locating assets in a legal matter, see our investigative services." },
    ],
    related: ["executive-protection", "armed-unarmed-transportation", "investigations"],
  },
  {
    slug: "bail-bonds",
    name: "Bail Bonds",
    seoTitle: "Bail Bonds Miami, FL | Fast, Discreet Help | FTS",
    metaDescription:
      "Need to bail someone out in Florida? Get fast, discreet help with bail bonds from Franck Pala's team in Miami. Clear answers and confidential handling.",
    keywords: [
      "bail bonds Miami",
      "bail bonds Florida",
      "bail bondsman Miami",
      "get someone out of jail Miami",
      "bail bond help",
      "Miami-Dade bail",
    ],
    eyebrow: "Bail Bonds · Miami, Florida",
    h1: "Bail",
    h1Accent: "Bonds",
    tagline: "Help getting someone released, handled fast and discreetly.",
    heroImage: "/images/17_walking_downtown_miami.png",
    heroImageAlt: "Franck Pala walking in downtown Miami",
    heroImagePos: "object-[center_20%]",
    intro:
      "When someone you care about is arrested, you need clear answers and a team that moves quickly. We help families and defendants through the bail process with professionalism and complete confidentiality.",
    chips: ["Based in Miami", "Fast Response", "Clear Answers", "Strictly Confidential"],
    overviewTitle: "Clear Help When",
    overviewAccent: "It Matters Most",
    overview: [
      "An arrest is stressful and confusing. A bail bond lets the person be released while their case moves forward, in exchange for a promise that they will appear in court. We explain how it works in plain language, what it will cost, and what is expected of everyone involved, before anything is signed.",
      "Our team handles each case with the same confidence, efficiency, and discretion we bring to protection work. We keep you informed at every step, from the first call to the person's release, and we never discuss your situation with anyone who does not need to know.",
    ],
    included: [
      { title: "Fast Response", body: "We start working on your case as soon as you reach out." },
      { title: "Plain-Language Guidance", body: "We explain the bond, the fees, and your responsibilities clearly, with no pressure." },
      { title: "Paperwork Handled", body: "We prepare and process the bond paperwork so you can focus on your family." },
      { title: "Release Coordination", body: "We stay in contact with you through the release process and tell you what to expect." },
      { title: "Court Date Reminders", body: "We help the defendant keep track of court dates so the bond stays in good standing." },
      { title: "Complete Confidentiality", body: "Your situation stays private, shared only with those who need to know." },
    ],
    audience: ["Families of the arrested", "Defendants", "Friends & loved ones", "Attorneys", "Employers"],
    process: [
      { title: "Contact Us", body: "Send the person's full name, date of birth, and where they are being held, along with any charge or booking details you have." },
      { title: "Review & Paperwork", body: "We confirm the bail amount, explain the cost and terms in plain language, and complete the paperwork with you." },
      { title: "Release", body: "We post the bond and stay in touch with you through the release, then help keep track of court dates." },
    ],
    faqs: [
      { q: "How does a bail bond work?", a: "A bail bond is a guarantee to the court that the defendant will attend every court date. You pay a fee to the bail agent, who posts the full bail amount so the person can be released while the case continues." },
      { q: "How much does a bail bond cost in Florida?", a: "Bail bond fees in Florida are regulated by the state and depend on the bail amount set by the court. We tell you the exact cost before anything is signed." },
      { q: "What information do you need to get started?", a: "The person's full name, date of birth, the facility where they are being held, and any booking number or charge information you have." },
      { q: "How long does release take?", a: "It depends on the jail's processing time. We move quickly on our side and keep you updated so you know what to expect." },
      { q: "What happens if the defendant misses court?", a: "Missing court can put the bond at risk. Contact us right away. We help defendants stay on track with their court dates to avoid problems." },
    ],
    related: ["fugitive-apprehension", "investigations", "bodyguard-services"],
  },
  {
    slug: "fugitive-apprehension",
    name: "Fugitive Apprehension",
    seoTitle: "Fugitive Apprehension Agent Florida | FrancktheSolution",
    metaDescription:
      "Fugitive apprehension and skip tracing in Florida, led by Franck Pala, an active fugitive apprehension agent with 20+ years in protection and field work.",
    keywords: [
      "fugitive apprehension Florida",
      "fugitive recovery agent",
      "bail enforcement Miami",
      "skip tracing Florida",
      "bail jumper recovery",
      "fugitive apprehension agent Miami",
    ],
    eyebrow: "Fugitive Apprehension · Florida",
    h1: "Fugitive",
    h1Accent: "Apprehension",
    tagline: "Locating and recovering wanted individuals, lawfully.",
    heroImage: "/images/19_emergency_extraction.png",
    heroImageAlt: "Franck Pala with his badge escorting a person through a crowd",
    heroImagePos: "object-[center_18%]",
    intro:
      "Franck Pala is an active fugitive apprehension agent in Florida. His team locates and recovers defendants who have failed to appear, working within the law and with the tracking, field, and close-combat experience of 20+ years in protection work.",
    chips: ["Active Florida Agent", "Skip Tracing", "Lawful & Documented", "20+ Years in the Field"],
    overviewTitle: "Find Them.",
    overviewAccent: "Bring Them In.",
    overview: [
      "When a defendant skips court, the clock starts. Fugitive apprehension combines investigation and field work: skip tracing to find where the person is, surveillance to confirm it, and a planned, controlled recovery that keeps everyone as safe as possible.",
      "Franck brings the same discipline to fugitive work that he brings to executive protection: careful planning, calm execution, and strict compliance with Florida law. Every recovery is documented, and we coordinate with law enforcement where required.",
    ],
    included: [
      { title: "Skip Tracing", body: "Records research, source work, and field inquiries to locate the subject." },
      { title: "Surveillance", body: "Discreet confirmation of the subject's location and routine before any move is made." },
      { title: "Planned Recovery", body: "Controlled apprehension planned to limit risk to the public, the team, and the subject." },
      { title: "Lawful & Documented", body: "Work carried out within Florida law, with every step documented." },
      { title: "Law Enforcement Coordination", body: "We coordinate with law enforcement and the courts where required." },
      { title: "Clear Reporting", body: "You receive a clear account of the search, the recovery, and the surrender." },
    ],
    audience: ["Bail bond agencies", "Sureties", "Attorneys", "Families seeking a safe surrender"],
    process: [
      { title: "Case Intake", body: "Share the bond, the defendant's details, and the court information. Everything is held in confidence." },
      { title: "Locate", body: "Skip tracing, research, and surveillance to find and confirm the subject's location." },
      { title: "Recover", body: "A planned, lawful apprehension and surrender, documented from start to finish." },
    ],
    faqs: [
      { q: "What does a fugitive apprehension agent do?", a: "A fugitive apprehension agent locates and recovers defendants who failed to appear in court after being released on bail, and returns them to custody within the law." },
      { q: "Who do you work for?", a: "Mainly bail bond agencies and sureties. We also help families who want to arrange a safe, voluntary surrender before the situation escalates." },
      { q: "Do you operate in Florida only?", a: "Franck is an active fugitive apprehension agent in Florida, and recoveries are carried out under Florida law. Contact us about cases that involve other states." },
      { q: "Is fugitive apprehension legal in Florida?", a: "Yes, when carried out by properly licensed professionals within Florida law. We follow those rules on every case and coordinate with law enforcement where required." },
    ],
    related: ["bail-bonds", "investigations", "bodyguard-services"],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export const servicePath = (slug: string) => `/services/${slug}`;
