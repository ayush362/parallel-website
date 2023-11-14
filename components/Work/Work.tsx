import React from "react";
import WorkCard from "./WorkCard";
import Image from "next/image";
const Work = () => {
  return (
    <section className="container mx-auto mt-10">
      <h4 className="font-bold text-4xl mb-5 text-center">How Parallel works</h4>
      <div className="flex">
        <div className="w-1/2 hidden md:flex md:flex-col md:gap-6">
          <WorkCard sno={1} message="Build your parallel profile" />
          <WorkCard sno={2} message="Get matched and discover roles" />
          <WorkCard sno={3} message="Message direct with hiring teams" />
          <WorkCard sno={4} message="Track your jobs & status" />
          <WorkCard sno={5} message="Learn & level up" />
        </div>
        <div className="">
          <div>
            <Image
              src="/works.png"
              alt="works"
              height={800}
              width={1000}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
