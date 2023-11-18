import React from "react";
import WorkCard from "./work-card";
import Image from "next/image";

export const WorkSection = () => {
    const workSections: string[] = [
        "Build your parallel profile",
        "Get matched and discover roles",
        "Message direct with hiring teams",
        "Track your jobs & status",
        "Learn & level up"
    ];
    return (
        <section className="container mx-auto mt-10">
            <h4 className="font-bold text-4xl mb-5 text-center">
                How Parallel works
            </h4>
            <div className="flex">
                <div className="w-1/2 hidden md:flex md:flex-col md:gap-6">
                    {workSections.map((message, index) => (
                        <WorkCard key={index} sno={index + 1} message={message}/>
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
