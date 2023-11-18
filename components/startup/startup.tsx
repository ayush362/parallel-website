import React from "react";
import StartupCard from "./StartupCard";

export const Startup = () => {
    return (
        <section className="container mx-auto mt-10 px-10">
            <h1 className="font-bold text-4xl mb-5">Top startups</h1>
            <div
                className="sm:flex gap-10 flex flex-col sm:flex-row justify-center items-center sm:justify-normal sm:items-start">
                <StartupCard
                    background="/st1.png"
                    logo="/sl1.png"
                    title="Webflow"
                    location="Manufacturing.San Francisco,CA"
                    position="0 open positions"
                    employees="Active employees"
                    button="Browse jobs"
                />
                <StartupCard
                    background="/st2.png"
                    logo="/sl2.png"
                    title="Patreon"
                    location="Manufacturing.San Francisco,CA"
                    position="2 open positions"
                    employees="Active employees"
                    button="Browse jobs"
                />
                <StartupCard
                    background="/st3.png"
                    logo="/sl3.png"
                    title="Faire"
                    location="Manufacturing.San Francisco,CA"
                    position="0 open positions"
                    employees="Active employees"
                    button="Browse jobs"
                />
                <StartupCard
                    background="/st4.png"
                    logo="/sl4.png"
                    title="Breef"
                    location="Manufacturing.San Francisco,CA"
                    position="6 open positions"
                    employees="Active employees"
                    button="Browse jobs"
                />
            </div>
        </section>
    );
};