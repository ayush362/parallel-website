import React from "react";
import Image from "next/image";

export type JobCardPropsType = {
    iconUrl: string;
    title: string;
    subtitle: string;
    employee: string;
    buttonText?: string;
};

export const JobCard = ({iconUrl, title, subtitle, employee, buttonText = "Apply Direct"}: JobCardPropsType) => {
    return (
        <section
            className="border-2 w-full my-3  border-black rounded-2xl flex flex-col px-5 gap-4 py-2  min-w-[240px]">
            <div className="flex justify-around mt-2">
                <Image src={iconUrl} alt="logo" width={20} height={20}/>
                <span>♥</span>
            </div>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{employee}</p>
            <button className="btn">{buttonText}</button>
        </section>
    );
};