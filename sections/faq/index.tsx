import React from "react";
import FaqCard, { FaqCardPropType } from "./faq-card";

export const FaqSection = () => {
  const faqCards: FaqCardPropType[] = [
    { question: "Why use  parallel over other job boards?" },
    { question: "What types of jobs are on Parallel?" },
    { question: "What does apply direct or get referred mean?" },
    { question: "Is Parallel always free?" },
    { question: "What is my Parallel profile?" },
    { question: "Will more companies and jobs be added?" },
  ];
  return (
    <section className="px-4">
      <h3 className="text-center mb-3 font-bold text-4xl">FAQs?</h3>
      <div className="flex flex-col gap-5">
        {faqCards.map((question, index) => (
          <FaqCard key={index} {...question} />
        ))}
      </div>
    </section>
  );
};
