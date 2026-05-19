"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the price really $147?",
    answer:
      "Yes, but only until May 31. The early-bird rate is $147 per person, and after that the price returns to $197. This isn't a class, it's 2 hours of hands-on personal protection training with a professional who has guarded executives, trained law enforcement, and served in Special Forces. Most people spend more than this on a weekend without thinking about it. Lock in $147 before May 31.",
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
    question: "Can I bring my partner, my family, or a friend?",
    answer:
      "Yes, please do. This workshop is designed to be trained as a unit. Bringing your spouse, your kids (mature enough to participate), or anyone you would step in front of a threat for is exactly the point. Couples and families train together so they protect together. Group rates available for teams of 15+.",
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
