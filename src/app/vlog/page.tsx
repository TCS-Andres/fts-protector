import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedDivider from "@/components/RedDivider";
import ScrollAnimator from "@/components/ScrollAnimator";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Vlog | FrancktheSolution",
  description:
    "Follow Franck Pala from the field — breakdowns, training clips, and behind-the-scenes from a working executive protection specialist. On Instagram and TikTok.",
  alternates: { canonical: "/vlog" },
};

// Placeholder tiles until the live Instagram/TikTok feed is wired in.
// To embed real posts later: drop Instagram/TikTok blockquote embed codes
// (with their embed.js scripts) in place of these tiles.
const reels = [
  { image: "/images/01_vip_escort_red_carpet.png", caption: "On detail — red carpet movement" },
  { image: "/images/03_hotel_lobby_advance.png", caption: "Advance work: reading a room" },
  { image: "/images/17_walking_downtown_miami.png", caption: "Situational awareness on foot" },
  { image: "/images/08_seminar_stage_speaking.png", caption: "Workshop breakdown" },
  { image: "/images/19_emergency_extraction.png", caption: "Improvised weapons drill" },
  { image: "/images/02_suv_motorcade_arrival.png", caption: "Secure transport principles" },
];

export default function VlogPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden noise-bg">
          <div className="absolute inset-0 bg-bg-primary">
            <img
              src="/images/17_walking_downtown_miami.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-16 sm:pt-44 lg:pt-32 w-full">
            <div className="max-w-3xl">
              <p className="hero-animate hero-animate-1 text-accent-gold text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-5 font-body">
                The Vlog
              </p>
              <h1 className="hero-animate hero-animate-2 font-heading text-[44px] sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
                From the
                <br />
                <span className="text-accent-red">Field.</span>
              </h1>
              <p className="hero-animate hero-animate-2 text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                Breakdowns, training clips, and behind-the-scenes from a
                working protector. Follow along on Instagram and TikTok.
              </p>
              <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-red-dark hover:scale-[1.03] transition-all duration-300 min-h-[52px]"
                >
                  Follow on Instagram
                </a>
                <a
                  href={links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:border-accent-gold hover:text-accent-gold transition-all duration-300 min-h-[52px]"
                >
                  Follow on TikTok
                </a>
              </div>
            </div>
          </div>
        </section>

        <RedDivider />

        {/* Feed */}
        <section className="bg-bg-primary py-16 sm:py-20 lg:py-28 relative noise-bg">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
                Latest Clips
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                Watch &amp; Learn
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 stagger-children">
              {reels.map((r, i) => (
                <a
                  key={i}
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-on-scroll group relative aspect-[9/16] rounded-lg overflow-hidden bg-bg-card border border-white/5 hover:border-accent-red/50 transition-all duration-300"
                >
                  <img
                    src={r.image}
                    alt={r.caption}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[800ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  {/* Play glyph */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-black/50 backdrop-blur border border-white/40 flex items-center justify-center text-white text-xl group-hover:bg-accent-red group-hover:border-accent-red transition-all duration-300">
                      ▶
                    </span>
                  </div>
                  <p className="absolute bottom-0 inset-x-0 p-4 text-white text-xs sm:text-sm font-body font-semibold leading-tight">
                    {r.caption}
                  </p>
                </a>
              ))}
            </div>

            <p className="text-center text-text-muted text-sm mt-12 font-body animate-on-scroll">
              This feed updates as new content drops.{" "}
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gold hover:text-white transition-colors"
              >
                Follow @FranckTheSolution
              </a>{" "}
              so you never miss one.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
