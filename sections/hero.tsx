import React from "react";

const HeroSection = () => {
    const tags = [
        "Autonomous",
        "Bold",
        "Colaborative",
        "Curious",
        "Design Driven",
    ]
    return (
        <section className="flex flex-col justify-center items-center bg-black relative">
            <img className="absolute w-full h-full object-cover brightness-75" src="/woman.png" alt="lady"/>
            <div className="relative pt-48 pb-0 lg:py-32 container mx-auto w-full flex flex-col lg:p-5 gap-5">
                <h3 className="font-bold text-5xl lg:text-4xl text-white lg:text-6xl lg:w-1/2 text-center lg:text-left pb-8 lg:pb-0">
                    Find your life's work
                </h3>
                <FormSection tags={tags}/>
            </div>
        </section>
    );
};

const FormSection = ({tags}: { tags: string[] }) => {
    return (
        <div className="flex flex-col gap-5 items-center lg:items-start lg:text-white font-bold w-full lg:w-1/2 bg-white lg:bg-transparent pt-8 pb-8 px-5 lg:px-0">
            <p className="text-xl lg:text-2xl text-center lg:text-left w-2/3 lg:w-full">
                Instantly match with top startups to find the work that was made for
                you.
            </p>
            <form className="flex flex-col lg:flex-row w-full gap-5">
                <div className="bg-white border rounded-xl flex justify-between items-center">
                    <input
                        placeholder="something@email.com"
                        type="text"
                        id="fname"
                        name="fname"
                        className="w-full py-3 px-6"
                    />
                    <button className="border border-gray-300 w-7 h-7 text-black flex justify-center items-center rounded mr-3" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <button className="btn btn-yellow">
                    Search →
                </button>
            </form>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <button
                        className="bg-transparent border border-black lg:border-white text-black lg:text-white rounded-full text-xs px-2 py-1">{tag}</button>
                ))}
            </div>
        </div>
    )
}

export default HeroSection;
