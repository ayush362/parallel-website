import React from "react";

type properties = {
    children: React.ReactNode;
    className: string;
    color?: string;
};

const Button = (props: properties) => {
    return (
        <button
            className={``}
        >
            {props.children}
        </button>
    );
};

export default Button;
