import React from "react";
import {JobCard, JobCardPropsType} from "@/sections/job/job-card";

export const JobSection = () => {
    const jobCards: JobCardPropsType[] = [
        {
            iconUrl: "/job.png",
            title: "Growth/CRO Marketer",
            companyName: "Goodkarma",
            location: "Amsterdam",
        },
        {
            iconUrl: "/job.png",
            title: "Growth/CRO Marketer",
            companyName: "Goodkarma",
            location: "Amsterdam",
        },
        {
            iconUrl: "/job.png",
            title: "Growth/CRO Marketer",
            companyName: "Goodkarma",
            location: "Amsterdam",
        },
        {
            iconUrl: "/job.png",
            title: "Growth/CRO Marketer",
            companyName: "Goodkarma",
            location: "Amsterdam",
        },
        {
            iconUrl: "/job.png",
            title: "Growth/CRO Marketer",
            companyName: "Goodkarma",
            location: "Amsterdam",
        },
    ];
    return (
        <section className="container mx-auto overflow-hidden  px-5">
            <div className="flex justify-between">
                <h2 className="font-bold text-3xl text-center">Trending jobs</h2>
                <p>View All →</p>
            </div>
            <div className="flex gap-5 mt-4 overflow-x-auto pb-5">
                {jobCards.map((jobCard, index) => (
                    <JobCard key={index} {...jobCard} />
                ))}
            </div>
        </section>
    );
};
