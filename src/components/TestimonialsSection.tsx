"use client";

const testimonialVideos = [
  { src: "/videos/testimonial_1.mp4" },
  { src: "/videos/testimonial_2.mp4" },
  { src: "/videos/testimonial_3.mp4" },
  { src: "/videos/testimonial_4.mp4" },
  { src: "/videos/testimonial_5.mp4" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-bg-primary py-20 lg:py-28 relative noise-bg overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/02_suv_motorcade_arrival.png')] bg-cover bg-top opacity-10" />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
            What People Are Saying
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children">
          {testimonialVideos.map((video, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-bg-card rounded-lg border-t-2 border-accent-red overflow-hidden hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] object-cover bg-black"
                src={`${video.src}#t=0.1`}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-12 font-body animate-on-scroll">
          As featured in training with UFC fighters, law enforcement agencies,
          and international security professionals.
        </p>
      </div>
    </section>
  );
}
