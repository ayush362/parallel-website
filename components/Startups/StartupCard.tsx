import React from "react";
import Image from "next/image";
import Button from "../Button";
type detail = {
  background: string;
  logo: string;
  title: string;
  location: string;
  position: string;
  employees: string;
  button: string;
};
const StartupCard = (props: detail) => {
  return (
    <section className="w-[240px] sm:w-full border-2  border-black rounded-2xl mb-10 hover:translate-x-[-8px] hover:border-r-4 hover:border-b-4">
      <div>
        <Image
          src={props.background}
          alt={props.title}
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <Image
        src={props.logo}
        alt={props.title}
        width={30}
        height={50}
        className="relative bottom-3 left-8"
      />
      <div className="mx-10 flex flex-col gap-3">
        <h3 className="font-bold">{props.title}</h3>
        <p>{props.location}</p>
        <p className="underline">{props.position} →</p>
        <p>{props.employees}</p>
        <Button title={props.button} rounded="rounded-3xl" />
      </div>
    </section>
  );
};

export default StartupCard;
