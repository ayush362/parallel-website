import React from "react";
import Button from "./button";

const Contact = () => {
    return (
        <section className="bg-grad py-5 mt-5 px-5">
            <div className="scroll-animation">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="aman"
                    className="rounded-full"
                />
            </div>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h3 className="font-bold text-5xl text- mt-10 ">
                    Where Your life & work align.
                </h3>
                <p className="text-xl mt-5 text-center">
                    Join thousands of job seekers in using Parallel <br/> to find their
                    life’s work.
                </p>
                <div className="flex flex-col gap-5 mt-10  sm:min-w-[400px]">
                    <Button
                        title="Start for free"
                        className="rounded-2xl"
                        color="bg-yellow-400"
                    />
                    <Button className="rounded-2xl">Join as a company</Button>
                </div>
            </div>
            <img
                src="https://media.licdn.com/dms/image/D5603AQFmHhtXiUlzFA/profile-displayphoto-shrink_200_200/0/1673840446696?e=1705536000&v=beta&t=QkB7CN97MuaLztn_MiqDcMe2fOBcLw0h5L3FSFWPS80"
                alt="jit bhai" className="scroll-animation rounded-full"
            />
        </section>
    );
};

export default Contact;
