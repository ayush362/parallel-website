import React, {useState} from "react";

export type JobCardPropsType = {
    iconUrl: string;
    title: string;
    companyName: string;
    location: string;
    buttonText?: string;
};

export const JobCard = ({iconUrl, title, companyName, location, buttonText = "Apply Direct"}: JobCardPropsType) => {
    return (
        <div
            className="w-full my-3 px-5 py-4 border-2 border-black rounded-2xl flex flex-col gap-5"
        >
            <div className="flex justify-between mt-2">
                <img src={iconUrl} alt="logo" className="h-10 w-10"/>
                <HeartButton/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">{title}</p>
                <div className="flex items-center gap-2 text-sm">
                    <p>{companyName}</p>
                    <div className="w-1 h-1 rounded-full bg-black"></div>
                    <p>{location}</p>
                </div>
            </div>
            <p>Active Employees</p>
            <button className="btn !rounded-lg">{buttonText}</button>
        </div>
    );
};

const HeartButton = () => {
    const [isSelected, setSelected] = useState(false)
    return (
        <button
            className="h-7 w-7 rounded-full hover:bg-yellow-300 flex justify-center items-center transition-colors"
            onClick={() => setSelected(!isSelected)}
        >
            <HeartIcon className={`h-5 w-5 ${isSelected ? "fill-black" : "fill-white"}`}/>
        </button>
    )
}

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
        </svg>

    )
}