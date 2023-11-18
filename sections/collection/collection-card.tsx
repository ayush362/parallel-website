import React from "react";

export type CollectionCardPropsTypes = {
    background: string;
    title: string;
    companies: number;
    jobs: number;
};
const CollectionCard = (props: CollectionCardPropsTypes) => {
    return (
        <section
            className="border-2 border-black rounded-2xl w-full h-full">
            <img
                src={props.background}
                alt={props.title}
                className="w-full aspect-video object-cover object-top rounded-t-2xl"
            />
            <div className="flex justify-between items-center px-5 py-3">
                <div>
                    <h4 className="font-bold text-xl">{props.title}</h4>
                    <div className="flex  gap-4">
                        <p>{props.companies} Companies</p>
                        <p>{props.jobs} Jobs</p>
                    </div>
                </div>
                <div>
                    <button className="border-2 border-black rounded-full h-12 w-12 text-2xl flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg>

                    </button>
                </div>
            </div>
        </section>
    );
};

export default CollectionCard;
