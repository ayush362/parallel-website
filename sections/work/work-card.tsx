import React, { useState } from "react";

export type WorkCardPropsDetails = {
  sno: number;
  message: string;
};
const WorkCard = (props: WorkCardPropsDetails) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <section className="flex gap-5 px-5 xl:ml-60">
      <button
        onClick={() => setSelected(!isSelected)}
        className="border-2 border-black px-4 py-2  rounded-full bg-yellow-400"
      >
        {props.sno}
      </button>
      <p>{props.message}</p>
    </section>
  );
};

export default WorkCard;
