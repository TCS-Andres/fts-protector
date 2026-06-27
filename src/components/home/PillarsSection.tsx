import { routes } from "@/lib/links";

type Pillar = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  imagePos: string;
  cta: string;
  href: string;
  external?: boolean;
};

const pillars: Pillar[] = [
  {
    kicker: "Protect",
    title: "Executive Protection & Investigations",
    body: "Close protection, secure transport, and licensed investigations for high-profile and high-net-worth clients. Franck's team treats your safety as their mission.",
    image: "/images/19_emergency_extraction.png",
    imagePos: "object-[center_18%]",
    cta: "Hire Us",
    href: routes.hireUs,
  },
  {
    kicker: "Train",
    title: "Workshops & Online Courses",
    body: "The 2-hour Everyone Is A Protector workshop, the 7-day Protectors Camp, and online training you can take anywhere. Real skills, scaled to any level.",
    image: "/images/08_seminar_stage_speaking.png",
    imagePos: "object-[center_15%]",
    cta: "Start Training",
    href: routes.training,
  },
  {
    kicker: "Equip",
    title: "TheSelfDefender & Shop",
    body: "TheSelfDefender, the upcoming Circular Footwork Mechanics book, and video courses — the same tools and knowledge Franck builds his work on.",
    image: "/images/17_walking_downtown_miami.png",
    imagePos: "object-[center_15%]",
    cta: "Visit the Shop",
    href: routes.shop,
  },
  {
    kicker: "Follow",
    title: "The Vlog",
    body: "Behind-the-scenes from the field, breakdowns, and training clips. Follow the work and the mindset that keeps people safe.",
    image: "/images/01_vip_escort_red_carpet.png",
    imagePos: "object-[center_22%]",
    cta: "Watch the Vlog",
    href: routes.vlog,
  },
];

export default function PillarsSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 relative"
      style={{ background: "linear-gradient(180deg, #EEF1F5 0%, #FFFFFF 100%)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
          <p className="text-accent-blue-dark text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            Everything Franck Offers
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-[#0A0E14]">
            One Standard. Four Ways In.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 stagger-children">
          {pillars.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.external ? "_blank" : undefined}
              rel={p.external ? "noopener noreferrer" : undefined}
              className="animate-on-scroll group block bg-white rounded-lg overflow-hidden border border-black/5 shadow-[0_2px_12px_rgba(10,14,20,0.06)] hover:border-accent-blue/40 hover:translate-y-[-4px] hover:shadow-[0_14px_40px_rgba(10,14,20,0.15)] transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className={`w-full h-full object-cover ${p.imagePos} transition-all duration-[1000ms] group-hover:scale-105`}
                />
                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[3px] font-bold font-body bg-accent-blue text-white shadow-md">
                  {p.kicker}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-xl lg:text-2xl font-bold uppercase mb-3 text-[#0A0E14]">
                  {p.title}
                </h3>
                <p className="text-[#4A5568] text-sm lg:text-base leading-relaxed mb-5 font-body">
                  {p.body}
                </p>
                <span className="text-sm uppercase tracking-[2px] font-bold font-body text-accent-blue-dark group-hover:text-accent-blue transition-colors">
                  {p.cta} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
