import React from "react";
import Button from "../button";

const Index = () => {
    return (
        <section className="container mx-auto px-5 flex flex-col justify-center  items-center">
            <h2 className="font-bold text-2xl">Browse jobs by vibe</h2>
            <div
                className="mt-5  flex flex-wrap flex-1 gap-10 justify-center items-center text-xl md:text-3xl lg:text-4xl">
                <Button title="Autonomous" className="rounded-2xl"/>
                <Button title="Bold" className="rounded-2xl"/>
                <Button title="Colaborative" className="rounded-2xl"/>
                <Button title="Curious" className="rounded-2xl"/>
                <Button title="Design Driven" className="rounded-2xl"/>
                <Button title="Driven" className="rounded-2xl"/>
                <Button title="Empowering" className="rounded-2xl"/>
                <Button title="Entreprenuurial" className="rounded-2xl"/>
                <Button title="Fast Paced" className="rounded-2xl"/>
                <Button title="Focused" className="rounded-2xl"/>
                <Button title="Forward thinking" className="rounded-2xl"/>
                <Button title="Fun" className="rounded-2xl"/>
                <Button title="inclusive" className="rounded-2xl"/>
                <Button title="innovative" className="rounded-2xl"/>
                <Button title="purposeful" className="rounded-2xl"/>
            </div>
        </section>
    );
};

export default Index;
