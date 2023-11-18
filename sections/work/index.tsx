import React from "react";
import { WorkCardPropsDetails } from "./work-card";
import WorkCard from "./work-card";
import Image from "next/image";

export const WorkSection = () => {
  const workSections: WorkCardPropsDetails[] = [
    { sno: 1, message: "Build your parallel profile" },
    { sno: 2, message: "Get matched and discover roles" },
    { sno: 3, message: "Message direct with hiring teams" },
    { sno: 4, message: "Track your jobs & status" },
    { sno: 5, message: "Learn & level up" },
  ];
  return (
    <section className="container mx-auto mt-10">
      <h4 className="font-bold text-4xl mb-5 text-center">
        How Parallel works
      </h4>
      <div className="flex">
        <div className="w-1/2 hidden md:flex md:flex-col md:gap-6">
          {workSections.map((workSections, index) => (
            <WorkCard key={index} {...workSections} />
          ))}
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
