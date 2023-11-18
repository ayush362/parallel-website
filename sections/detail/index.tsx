import React from "react";
import {DetailCard, DetailCardPropsType} from "@/sections/detail/detail-card";

export const DetailSection = () => {
    const detailCards: DetailCardPropsType[] = [
        {

            title: "Samantha Smith",
            subtitle: "parallel Verified",
            iconUrl: "/Hero.png",
            list: [
                "Ways of working",
                "My Portfolio",
                "Career goals"
            ],
            heading: "Build your detailed profile",
            paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt quisquam, voluptatibus ducimus optio illum."
        },
        {
            title: "Congratulations",
            subtitle: "you have matched",
            iconUrl: "/Hero.png",
            list: [
                "Photo of the lady",
                "lorem ipsum losi osli",
                "Hello there"
            ],
            heading: "Get matched to top opportunities",
            paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt quisquam, voluptatibus ducimus optio illum."
        },
        {
            title: "Samantha Smith",
            subtitle: "parallel Verified",
            iconUrl: "/Hero.png",
            list: [
                "Ways of working",
                "My Portfolio",
                "Career goals"
            ],
            heading: "Message direct with the hiring team",
            paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt quisquam, voluptatibus ducimus optio illum."
        }
    ]
    return (
        <section className="container mx-auto my-10 px-5 w-full flex flex-col lg:flex-row gap-5 lg:justify-around">
            {detailCards.map((card, index) => (
                <DetailCard key={index} {...card} className="my-5" />
            ))}
        </section>
    );
};