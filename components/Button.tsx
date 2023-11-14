import React from "react";

type properties = {
  title: string;
  rounded: string;
  color?: string;
};

const Button = (props: properties) => {
  return (
    <button
      className={`border-2 py-2 px-2 ${props.rounded} ${props.color} ${props.color && `hover:bg-white`} hover:bg-yellow-400 hover:translate-x-[-8px] hover:border-black hover:border-r-4 hover:border-b-4 transition-transform`}
    >
      {props.title}
    </button>
  );
};

export default Button;
