import React from "react";

const VibeSection = () => {
    const buttons = [
        "Autonomous",
        "Bold",
        "Collaborative",
        "Curious",
        "Design Driven",
        "Driven",
        "Empowering",
        "Entrepreneurial",
        "Fast Paced",
        "Focused",
        "Forward thinking",
        "Fun",
        "Inclusive",
        "Innovative",
        "Purposeful",
    ]
    return (
        <section className="container mx-auto px-5 flex flex-col justify-center  items-center">
            <h2 className="font-bold text-2xl">Browse jobs by vibe</h2>
            <div
                className="mt-5 flex flex-wrap flex-1 gap-10 justify-center items-center text-xl lg:text-3xl lg:text-4xl"
            >
                {buttons.map((buttonText, index) => <button className="btn" key={index}>{buttonText}</button>)}
            </div>
        </section>
    );
};

export default VibeSection;
