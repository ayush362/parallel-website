import React from "react";

export type FaqCardPropType = {
    question: string;
};

const FaqCard = (props: FaqCardPropType) => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
    return (
        <div
            className="container mx-auto w-full border-2 border-black rounded-2xl  text-center lg:text-2xl"
        >
            <button
                className="flex justify-between items-center w-full px-4 py-2 xl:px-5 py-3 hover:bg-gray-100 rounded-2xl"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span>{props.question}</span>
                <PlusIcon className={`w-6 h-6 ${isExpanded ? "rotate-45" : ""} transition-all`}/>
            </button>
            {isExpanded &&
                <div className="border-t border-gray-300 p-3 text-xl text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda eligendi iure labore
                    molestiae praesentium quia repudiandae saepe veniam vero?
                </div>
            }
        </div>
    );
};

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
    )
}

export default FaqCard;
