import React from "react";
import Image from "next/image";

type StartupCardPropsType = {
    backgroundUrl: string;
    logoUrl: string;
    title: string;
    location: string;
    position: string;
    employees: string;
    buttonText?: string;
};
const StartupCard = (
    {
        backgroundUrl,
        title,
        buttonText = "Browse Jobs",
        logoUrl,
        position,
        location,
        employees
    }: StartupCardPropsType) => {
    return (
        <section
            className="w-[240px] sm:w-full border-2  border-black rounded-2xl mb-10 hover:translate-x-[-8px] hover:border-r-4 hover:border-b-4">
            <div>
                <Image
                    src={backgroundUrl}
                    alt={title}
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>
            <Image
                src={logoUrl}
                alt={title}
                width={30}
                height={50}
                className="relative bottom-3 left-8"
            />
            <div className="mx-10 flex flex-col gap-3">
                <h3 className="font-bold">{title}</h3>
                <p>{location}</p>
                <p className="underline">{position} →</p>
                <p>{employees}</p>
                <button className="btn rounded-3xl">{buttonText}</button>
            </div>
        </section>
    );
};

export default StartupCard;
