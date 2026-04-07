"use client";

import { useState } from "react";

const faqs = [
  {
    question: "$300 is a lot for a class.",
    answer:
      "This isn't a class — it's 3 hours of hands-on personal protection training with a professional who has guarded executives, trained law enforcement, and served in Special Forces. Most people spend $300 on a weekend without thinking about it. This is $300 for skills that could protect you and your family for the rest of your life.",
  },
  {
    question: "I'm not athletic / I'm out of shape.",
    answer:
      "This workshop is designed for regular people. Not fighters. Not athletes. Everything is scaled to your fitness level. Franck has trained people from age 16 to 65 — everyone leaves with real skills.",
  },
  {
    question: "Can't I just learn from YouTube?",
    answer:
      "Most self-defense videos online teach techniques that will get you hurt. They look cool on camera but don't work in real life. This workshop teaches tested, biomechanically sound techniques from someone who has used them in actual protection work. You can't learn muscle memory from a screen.",
  },
  {
    question: "What should I wear?",
    answer:
      "Athletic clothes and closed-toe shoes. Water will be provided. No equipment needed.",
  },
  {
    question: "Can I bring a friend?",
    answer:
      "Absolutely. Couples and groups are encouraged. Group rates available for teams of 15+.",
  },
  {
    question: "Our brokerage already has a safety policy.",
    answer:
      "That's great — and most safety policies are solid on paper. But when was the last time your agents physically practiced what to do when they're alone in an empty house and the client blocks the doorway? This workshop turns policy into muscle memory.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left gap-4"
      >
        <span className="text-white text-base lg:text-lg font-body font-medium">
          {question}
        </span>
        <span
          className={`text-accent-red text-2xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`faq-answer ${open ? "open" : ""}`}
        style={{ maxHeight: open ? "300px" : "0" }}
      >
        <p className="text-text-secondary text-base leading-relaxed pb-6 font-body">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-bg-secondary py-20 lg:py-28 relative noise-bg">
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="animate-on-scroll">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
