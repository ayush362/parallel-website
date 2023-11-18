import React from "react";

export type DetailCardPropsType = {
    iconUrl: string;
    title: string;
    subtitle: string;
    list: string[];
    heading: string;
    paraText: React.ReactNode;
    className?: string;
};

export const DetailCard = ({className, iconUrl, list, heading, title, subtitle, paraText}: DetailCardPropsType) => {
    return (
        <section className={`w-full flex flex-col ${className}`}>
            <div className="px-8 pt-8 bg-teal-200 rounded-3xl">
                <div className="bg-white rounded-t-3xl h-full p-8 px-8 flex flex-col gap-4">
                    <div className="flex gap-3">
                        <img
                            src={iconUrl}
                            alt="lady"
                            className="rounded-full border-4 border-yellow-500 w-12 h-12"
                        />
                        <div className="flex flex-col">
                            <span>{title}</span>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="w-5 h-5 fill-yellow-400"/>
                                <span className="text-xs">{subtitle}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            {list.map((item, index) => (
                                <li key={index} className="bg-gray-100 w-full flex justify-center py-4">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
                <h2 className="font-bold text-center text-3xl">{heading}</h2>
                <p className="text-center">{paraText}</p>
            </div>
        </section>
    );
};

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    )
}