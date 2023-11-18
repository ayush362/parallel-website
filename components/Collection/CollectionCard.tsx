import React from "react";
import Image from "next/image";

type detail = {
    background: string;
    title: string;
    companies: number;
    jobs: number;
};
const CollectionCard = (props: detail) => {
    return (
        <section
            className="border-2 border-black rounded-2xl min-w-[300px] max-w-[700px] hover:translate-x-[-6px] hover:border-r-4 hover:border-b-4">
            <Image
                src={props.background}
                alt={props.title}
                width={600}
                height={34}
                className="w-full max-w-[1080px] rounded-2xl"
            />
            <div className="flex justify-around mt-3">
                <div>
                    <h4 className="font-bold text-xl">{props.title}</h4>
                    <div className="flex  gap-4">
                        <p>{props.companies} Companies</p>
                        <p>{props.jobs} Jobs</p>
                    </div>
                </div>
                <div>
          <span className="border-2 border-black rounded-full py-1 px-2">
            +
          </span>
                </div>
            </div>
        </section>
    );
};

export default CollectionCard;
