import React from "react";

export type StartupCardPropsType = {
  backgroundUrl: string;
  logoUrl: string;
  title: string;
  location: string;
  position: string;
  employees?: string;
  buttonText?: string;
};
const StartupCard = ({
  backgroundUrl,
  title,
  buttonText = "Browse Jobs",
  logoUrl,
  position,
  location,
  employees = "Active Employess",
}: StartupCardPropsType) => {
  return (
    <div className="w-full border border-black rounded-2xl mb-10">
      <div className="relative">
        <img src={backgroundUrl} alt={title} className="w-full relative" />
        <img
          src={logoUrl}
          alt={title}
          className="absolute bottom-0 left-0 translate-x-5 translate-y-5 w-10 h-10 rounded-full"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 mt-5">
        <h3 className="font-bold">{title}</h3>
        <p>{location}</p>
        <p className="underline">{position} →</p>
        <p>{employees}</p>
        <button className="btn rounded-3xl">{buttonText}</button>
      </div>
    </div>
  );
};

export default StartupCard;
