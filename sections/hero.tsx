import React from "react";

const HeroSection = () => {
  const tags = [
    "Autonomous",
    "Bold",
    "Colaborative",
    "Curious",
    "Design Driven",
  ];
  return (
    <section className="flex flex-col justify-center items-center bg-black relative">
      <img
        className="absolute w-full h-full object-cover brightness-75"
        src="/woman.png"
        alt="lady"
      />
      <div className="relative pt-48 pb-0 lg:py-32 container mx-auto w-full flex flex-col lg:p-5 gap-5">
        <h3 className="font-bold text-5xl text-white lg:text-6xl lg:w-1/2 text-center lg:text-left pb-8 lg:pb-0">
          Find your life's work
        </h3>
        <FormSection tags={tags} />
      </div>
    </section>
  );
};

const FormSection = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-col gap-5 items-center lg:items-start lg:text-white font-bold w-full lg:w-1/2 bg-white lg:bg-transparent pt-8 pb-8 px-5 lg:px-0">
      <p className="text-xl lg:text-2xl text-center lg:text-left w-2/3 lg:w-full">
        Instantly match with top startups to find the work that was made for
        you.
      </p>
      <form className="flex flex-col lg:flex-row w-full gap-5">
        <div className="bg-white px-6 py-3 border rounded-xl flex justify-between">
          <input
            placeholder="something@email.com"
            type="text"
            id="fname"
            name="fname"
            className="rounded-2xl"
          />
          <button className="border border-gray-500 w-7 h-7 text-black">
            S
          </button>
        </div>
        <button className="btn btn-yellow">Search →</button>
      </form>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button className="bg-transparent lg:text-white border border-black lg:border-white text-black rounded-full text-xs px-2 py-1">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
