import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <section className="px-4">
      <h3 className="text-center mb-3 font-bold text-4xl">FAQs?</h3>
      <div className="flex flex-col gap-5">
        <FaqCard question="Why use  parallel over other job boards?" />
        <FaqCard question="What types of jobs are on Parallel?" />
        <FaqCard question="What does apply direct or get referred mean?" />
        <FaqCard question="Is Parallel always free?" />
        <FaqCard question="What is my Parallel profile?" />
        <FaqCard question="Will more companies and jobs be added?" />
      </div>
    </section>
  );
};

export default Faq;
