import React from "react";
import StartupCard from "@/sections/startup/startup-card";

export const StartupSection = () => {
    return (
        <section className="container mx-auto mt-10 px-10">
            <h1 className="font-bold text-4xl mb-5">Top startups</h1>
            <div
                className="sm:flex gap-5 flex flex-col sm:flex-row justify-center items-center sm:justify-normal sm:items-start">
                <StartupCard
                    backgroundUrl="/st1.png"
                    logoUrl="/sl1.png"
                    title="Webflow"
                    location="Manufacturing.San Francisco,CA"
                    position="0 open positions"
                    employees="Active employees"
                />
                <StartupCard
                    backgroundUrl="/st2.png"
                    logoUrl="/sl2.png"
                    title="Patreon"
                    location="Manufacturing.San Francisco,CA"
                    position="2 open positions"
                    employees="Active employees"
                />
                <StartupCard
                    backgroundUrl="/st3.png"
                    logoUrl="/sl3.png"
                    title="Faire"
                    location="Manufacturing.San Francisco,CA"
                    position="0 open positions"
                    employees="Active employees"
                />
                <StartupCard
                    backgroundUrl="/st4.png"
                    logoUrl="/sl4.png"
                    title="Breef"
                    location="Manufacturing.San Francisco,CA"
                    position="6 open positions"
                    employees="Active employees"
                />
            </div>
        </section>
    );
};