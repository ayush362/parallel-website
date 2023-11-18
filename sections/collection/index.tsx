import React from "react";
import CollectionCard, {CollectionCardPropsTypes} from "./collection-card";

export const CollectionSection = () => {
    const collectionCard: CollectionCardPropsTypes[] = [
        {background: "/cl2.jpeg", title: "Wellness", companies: 3, jobs: 0},
        {
            background: "/cl3.jpeg",
            title: "Web 3",
            companies: 2,
            jobs: 0,
        },
        {background: "/cl1.jpeg", title: "Women led", companies: 5, jobs: 0},
        {background: "/cl4.jpeg", title: "Music Tech", companies: 1, jobs: 1},
        {background: "/cl5.jpeg", title: "Marketplaces", companies: 2, jobs: 12},
        {background: "/cl6.jpeg", title: "Giving Back", companies: 1, jobs: 1},
    ];
    return (
        <section className="container mx-auto mt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collectionCard.map((collectionCard, index) => (
                    <CollectionCard key={index} {...collectionCard} />
                ))}
            </div>
        </section>
    );
};
