import React from "react";
import Image from "next/image";

type details = {
    icon: string;
    title: string;
    subtitle: string;
    list1: string;
    list2: string;
    list3: string;
    heading: string;
    children: string;
};

const Card = (props: details) => {
    return (
        <section className="my-5 min-w-[450px] w-full flex flex-col">
            <div className={`px-8 pt-8 bg-cyan-200 rounded-3xl h-full `}>
                <div className="bg-white rounded-3xl h-full">
                    <div className="flex gap-5 mx-5 py-5">
                        <Image
                            src={props.icon}
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
                            <li className="bg-gray-100 w-full flex justify-center py-4">
                                {props.list1}
                            </li>
                            <li className="bg-gray-100 w-full flex justify-center py-4">
                                {props.list2}
                            </li>
                            <li className="bg-gray-100 w-full flex justify-center py-4">
                                {props.list3}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
                <h2 className="font-bold  text-center">{props.heading}</h2>
                <p>{props.children}</p>
            </div>
        </section>
    );
};

export default Card;
