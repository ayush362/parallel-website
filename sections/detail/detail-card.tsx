import React from "react";
import Image from "next/image";

export type DetailCardPropsType = {
    iconUrl: string;
    title: string;
    subtitle: string;
    list: string[];
    heading: string;
    paraText: React.ReactNode;
};

export const DetailCard = (props: DetailCardPropsType) => {
    return (
        <section className="my-5 min-w-[450px] w-full flex flex-col">
            <div className={`px-8 pt-8 bg-cyan-200 rounded-3xl h-full `}>
                <div className="bg-white rounded-3xl h-full">
                    <div className="flex gap-5 mx-5 py-5">
                        <Image
                            src={props.iconUrl}
                            alt="lady"
                            width={50}
                            height={50}
                            className="rounded-[50%] border-4 border-yellow-500"
                        />
                        {props.title}
                    </div>
                    <div className="ml-14">{props.subtitle}</div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            {props.list.map((item, index) => (
                                <li key={index} className="bg-gray-100 w-full flex justify-center py-4">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
                <h2 className="font-bold  text-center">{props.heading}</h2>
                <p>{props.paraText}</p>
            </div>
        </section>
    );
};