import React from "react";

type properties = {
    children: React.ReactNode;
    className: string;
    color?: string;
};

const Button = (props: properties) => {
    return (
        <button
            className={`border-2 py-2 px-3 ${props.color} ${props.color ? "hover:bg-white" : "hover:bg-yellow-400"} border-r-4 border-b-4 hover:border-black hover:translate-x-[-8px] transition-all ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
