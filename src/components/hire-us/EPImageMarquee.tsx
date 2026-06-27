const scenes = [
  { src: "/images/01_vip_escort_red_carpet.png", label: "Red Carpet Escort", alt: "VIP escort on the red carpet" },
  { src: "/images/02_suv_motorcade_arrival.png", label: "Motorcade Arrival", alt: "SUV motorcade arriving at venue" },
  { src: "/images/03_hotel_lobby_advance.png", label: "Hotel Lobby Advance", alt: "Hotel lobby security advance" },
  { src: "/images/04_nightclub_vip_section.png", label: "Nightclub Section", alt: "VIP section protection at a nightclub" },
  { src: "/images/05_private_jet_security.jpg", label: "Private Jet Security", alt: "Private jet tarmac security" },
  { src: "/images/06_boardroom_protection.jpg", label: "Boardroom Detail", alt: "Boardroom executive protection detail" },
  { src: "/images/17_walking_downtown_miami.png", label: "Foot Movement", alt: "Foot movement downtown" },
  { src: "/images/19_emergency_extraction.png", label: "Emergency Extraction", alt: "Emergency extraction" },
];

export default function EPImageMarquee() {
  // Duplicate the array so the CSS marquee loop is seamless.
  const loop = [...scenes, ...scenes];

  return (
    <section className="bg-bg-primary py-14 sm:py-20 lg:py-24 relative overflow-hidden noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mb-8 sm:mb-12 text-center">
        <p className="text-accent-blue-light text-sm uppercase tracking-[4px] font-bold mb-4 font-body animate-on-scroll">
          In the Field
        </p>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white animate-on-scroll">
          A Day on Detail
        </h2>
      </div>

      <div
        className="ep-marquee relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="ep-marquee-track flex gap-4 sm:gap-6">
          {loop.map((scene, i) => (
            <figure
              key={`${scene.src}-${i}`}
              className="ep-marquee-item shrink-0 w-[260px] sm:w-[320px] lg:w-[380px] rounded-lg overflow-hidden bg-bg-card relative group"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={scene.src}
                  alt={scene.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 py-4 pt-12">
                <p className="text-accent-blue-light text-[10px] uppercase tracking-[3px] font-bold font-body">
                  Scene
                </p>
                <p className="text-white text-sm sm:text-base font-bold font-body mt-1">
                  {scene.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <p className="relative z-10 text-center text-text-muted text-xs uppercase tracking-[3px] mt-8 sm:mt-12 font-body">
        Composite imagery, every detail tailored to the principal
      </p>
    </section>
  );
}
