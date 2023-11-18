import React from "react";
import Button from "../button";
import Image from "next/image";

type detail = {
    icon: string;
    title: string;
    subtitle: string;
    employee: string;
    button: string;
};

const JobCard = (props: detail) => {
    return (
        <section
            className="border-2 w-full my-3  border-black rounded-2xl flex flex-col px-5 gap-4 py-2  min-w-[240px]">
            <div className="flex justify-around mt-2">
                <Image src={props.icon} alt="logo" width={20} height={20}/>
                <span>♥</span>
            </div>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <p>{props.employee}</p>
            <Button title="Apply Direct" className="rounded-2xl"/>
        </section>
    );
};

export default JobCard;
