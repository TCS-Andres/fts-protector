import { routes } from "@/lib/links";

const types = [
  {
    num: "01",
    title: "Online Training",
    body: "Live training sessions with Franck via Zoom - real-time coaching and personalized programming, from anywhere in the world.",
    image: "/images/10_corporate_hr_training.png",
    href: routes.trainingOnline,
    cta: "Train Online",
  },
  {
    num: "02",
    title: "One-on-One Private Training",
    body: "A personalized curriculum taught directly by Franck - CFM, CCDS, and real-world scenarios built around you.",
    image: "/images/16_professional_headshot_studio.png",
    href: routes.trainingPrivate,
    cta: "Go Private",
  },
  {
    num: "03",
    title: "Group Training",
    body: "Families, companies, schools, and teams - hands-on sessions scaled to any group, any experience level.",
    image: "/images/08_seminar_stage_speaking.png",
    href: routes.trainingGroup,
    cta: "Train Your Group",
  },
  {
    num: "04",
    title: "EPS Training",
    body: "The professional Executive Protection Specialist track - advance work, protective details, and defensive tactics.",
    image: "/images/02_suv_motorcade_arrival.png",
    href: routes.trainingEps,
    cta: "Go Pro",
  },
];

export default function TrainingTypesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative noise-bg" style={{ background: "linear-gradient(180deg, #0A0E14 0%, #0C1118 100%)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
          <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            How to Train With Franck
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
            Four Ways In
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            Online, one-on-one, with your group, or on the professional track -
            there&apos;s a path for every protector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {types.map((t) => (
            <a
              key={t.num}
              href={t.href}
              className="animate-on-scroll group relative flex flex-col rounded-xl overflow-hidden border border-accent-blue/20 bg-bg-steel-card hover:border-accent-blue-light/60 hover:shadow-[0_0_34px_rgba(46,114,184,0.25)] transition-all duration-300"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={t.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_25%] opacity-70 transition-all duration-[1000ms] group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-steel-card via-bg-steel-card/30 to-transparent" />
                <span className="absolute top-3 left-4 font-heading text-4xl font-bold text-white/25 group-hover:text-accent-blue-light/60 transition-colors">
                  {t.num}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg lg:text-xl font-bold uppercase mb-2.5 text-white leading-tight">
                  {t.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 font-body flex-1">
                  {t.body}
                </p>
                <span className="text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body group-hover:text-white transition-colors">
                  {t.cta} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
