"use client";

import { useState } from "react";

const faqs = [
  {
    question: "When is the next workshop?",
    answer:
      "There is no workshop currently scheduled. New dates are announced right here on this page first - stay tuned for the next Everyone Is a Protector workshop.",
  },
  {
    question: "I'm not athletic / I'm out of shape.",
    answer:
      "This workshop is designed for regular people. Not fighters. Not athletes. Everything is scaled to your fitness level. Franck has trained people from age 16 to 65, everyone leaves with real skills.",
  },
  {
    question: "Can't I just learn from YouTube?",
    answer:
      "Most self-defense videos online teach techniques that will get you hurt. They look cool on camera but don't work in real life. This workshop teaches tested, biomechanically sound techniques from someone who has used them in actual protection work. You can't learn muscle memory from a screen.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come in comfortable, closed-toe sneakers, jeans, and a belt, that's the uniform for this workshop. Water will be provided. No equipment needed.",
  },
  {
    question: "Can I train with my partner, my family, or a friend?",
    answer:
      "Absolutely - the workshop is designed to be trained as a unit. The people closest to you should be in the room with you, so couples and families are encouraged to attend together. Group rates are also available for teams of 15+.",
  },
  {
    question: "I've never trained for anything like this before.",
    answer:
      "Good, most attendees haven't. This workshop assumes you have zero background. The whole point is that everyday people, regardless of age, gender, or fitness, can become genuinely capable protectors in a short amount of time. You'll leave knowing things you didn't know you didn't know.",
  },
  {
    question: "Why should I bring my spouse or my kids' parent?",
    answer:
      "Because protection is a team. The people closest to you should be on the same page about how you move through threats together, who reacts first, where to go, how to communicate. Couples and families train together so they don't end up working against each other when seconds matter. Group rates available for 15+.",
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
          className={`text-accent-blue-light text-2xl flex-shrink-0 transition-transform duration-300 ${
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
    <section id="faq" className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg">
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
