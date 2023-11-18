import React from "react";

export type WorkCardPropsDetails = {
  sno: number;
  message: string;
};
const WorkCard = (props: WorkCardPropsDetails) => {
  return (
    <section className="flex gap-5 px-5 xl:ml-60">
      <span className="border-2 border-black px-4 py-2  rounded-full bg-yellow-400">
        {props.sno}
      </span>
      <p>{props.message}</p>
    </section>
  );
};

export default WorkCard;
