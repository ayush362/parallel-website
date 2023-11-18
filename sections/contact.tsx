import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-grad py-24 mt-5 px-5 container mx-auto flex flex-col justify-center items-center">
      <div className="scroll-animation"></div>
      <div className="">
        <h3 className="font-bold text-5xl text- mt-10 ">
          Where Your life & work align.
        </h3>
        <p className="text-xl mt-5 text-center">
          Join thousands of job seekers in using Parallel <br /> to find their
          life’s work.
        </p>
        <div className="flex flex-col gap-5 mt-10  sm:min-w-[400px]">
          <button className="btn btn-yellow">Start for free</button>
          <button className="btn">Join as a company</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
