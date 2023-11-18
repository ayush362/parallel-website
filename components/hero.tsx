import React from "react";
import Image from "next/image";
import Button from "./button";

const Hero = () => {
    return (
        <section className="container mx-auto flex flex-col justify-center items-center md:mb-[-200px]">
            <div className="">
                <Image src="/woman.png" alt="lady" width={1500} height={800}/>
            </div>
            <div>
                <h3 className="font-bold relative bottom-20 text-4xl  text-white lg:bottom-80  lg:right-20 lg:w-2/3  lg:text-6xl">
                    Find your life's work
                </h3>
                <div className="flex flex-col items-center md:relative md:bottom-96 md:text-white font-bold ">
                    <p className="text-center w-2/3 text-2xl">
                        Instantly match with top startups to find the work that was made for
                        you.
                    </p>
                    <form>
                        <input
                            placeholder="something@email.com"
                            type="text"
                            id="fname"
                            name="fname"
                            className="border-2 border-black my-5 py-6 mr-3 rounded-2xl px-8"
                        />
                        {/* <Button title="sign up" rounded="rounded-2xl" color="bg-yellow-400" /> */}
                    </form>
                    <Button className="rounded-2xl">
                        Search →
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
