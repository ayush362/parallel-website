import React from "react";

type detail = {
    question: string;
};

const FaqCard = (props: detail) => {
    return (
        <section
            className="container flex justify-between mx-auto w-full border-2 border-black rounded-2xl py-2 px-2 text-center max-w-[1400px] lg:text-2xl xl:py-4 xl:px-4 xl:text-3xl">
            {props.question}
            <p>+</p>
        </section>
    );
};

export default FaqCard;
