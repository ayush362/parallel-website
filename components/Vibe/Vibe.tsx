import React from "react";
import Button from "../Button";
const Vibe = () => {
  return (
    <section className="container mx-auto px-5 flex flex-col justify-center  items-center">
      <h2 className="font-bold text-2xl">Browse jobs by vibe</h2>
      <div className="mt-5  flex flex-wrap flex-1 gap-10 justify-center items-center text-xl md:text-3xl lg:text-4xl">
        <Button title="Autonomous" rounded="rounded-2xl" />
        <Button title="Bold" rounded="rounded-2xl" />
        <Button title="Colaborative" rounded="rounded-2xl" />
        <Button title="Curious" rounded="rounded-2xl" />
        <Button title="Design Driven" rounded="rounded-2xl" />
        <Button title="Driven" rounded="rounded-2xl" />
        <Button title="Empowering" rounded="rounded-2xl" />
        <Button title="Entreprenuurial" rounded="rounded-2xl" />
        <Button title="Fast Paced" rounded="rounded-2xl" />
        <Button title="Focused" rounded="rounded-2xl" />
        <Button title="Forward thinking" rounded="rounded-2xl" />
        <Button title="Fun" rounded="rounded-2xl" />
        <Button title="inclusive" rounded="rounded-2xl" />
        <Button title="innovative" rounded="rounded-2xl" />
        <Button title="purposeful" rounded="rounded-2xl" />
      </div>
    </section>
  );
};

export default Vibe;
