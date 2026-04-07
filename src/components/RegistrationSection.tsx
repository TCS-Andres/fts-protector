"use client";

import { useState } from "react";

export default function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Build mailto link as temporary solution
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const type = data.get("type");

    const subject = encodeURIComponent(
      `Workshop Registration — ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${type}\n\nPlease confirm my spot in the next "Everyone Is a Protector" workshop.`
    );

    window.open(
      `mailto:franck@eprotectionvip.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section id="register" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-[url('/training-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <div className="animate-on-scroll">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
            Your Safety Is Not Negotiable
          </h2>
          <p className="text-text-secondary text-lg mb-12 font-body">
            One workshop. Three hours. Skills that last a lifetime. Secure your
            spot in the next training session before it fills up.
          </p>
        </div>

        {submitted ? (
          <div className="animate-on-scroll bg-bg-card/80 backdrop-blur p-10 rounded-lg border border-accent-red/20">
            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-4">
              Thank You
            </h3>
            <p className="text-text-secondary font-body">
              Your email client should open with a pre-filled registration
              message. If it didn&apos;t, email{" "}
              <a
                href="mailto:franck@eprotectionvip.com"
                className="text-accent-red hover:underline"
              >
                franck@eprotectionvip.com
              </a>{" "}
              directly to confirm your spot.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="animate-on-scroll bg-bg-card/60 backdrop-blur p-8 lg:p-10 rounded-lg border border-white/5 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-5 py-4 bg-bg-primary/80 border border-white/10 rounded text-white placeholder:text-text-muted focus:outline-none focus:border-accent-red/50 transition-colors font-body"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-5 py-4 bg-bg-primary/80 border border-white/10 rounded text-white placeholder:text-text-muted focus:outline-none focus:border-accent-red/50 transition-colors font-body"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-5 py-4 bg-bg-primary/80 border border-white/10 rounded text-white placeholder:text-text-muted focus:outline-none focus:border-accent-red/50 transition-colors font-body"
            />
            <select
              name="type"
              required
              defaultValue=""
              className="w-full px-5 py-4 bg-bg-primary/80 border border-white/10 rounded text-white focus:outline-none focus:border-accent-red/50 transition-colors font-body appearance-none"
            >
              <option value="" disabled className="text-text-muted">
                I am a...
              </option>
              <option value="Real Estate Professional">
                Real Estate Professional
              </option>
              <option value="Concerned Civilian">Concerned Civilian</option>
              <option value="Parent / Family">Parent / Family</option>
              <option value="HR / Corporate">HR / Corporate</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              className="w-full py-4 bg-accent-red text-white text-base font-bold uppercase tracking-[3px] rounded hover:bg-accent-red-dark hover:shadow-[0_0_20px_rgba(196,30,30,0.4)] hover:scale-[1.03] transition-all duration-300 min-h-[54px] cursor-pointer"
            >
              Secure Your Spot
            </button>

            <p className="text-text-muted text-sm font-body">
              $300 per person | Saturday mornings | South Florida
            </p>
            <p className="text-text-muted text-xs font-body">
              Group rates available for teams of 15+. Contact{" "}
              <a
                href="mailto:franck@eprotectionvip.com"
                className="text-accent-red hover:underline"
              >
                franck@eprotectionvip.com
              </a>{" "}
              for details.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
