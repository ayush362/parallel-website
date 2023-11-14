import React from "react";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <section className="container mx-auto mt-10 flex justify-center items-center flex-col gap-5 sm:flex-row w-full flex-wrap">
      <CollectionCard
        background="/cl2.jpeg"
        title="Wellness"
        companies={3}
        jobs={0}
      />
      <CollectionCard
        background="/cl3.jpeg"
        title="Web 3"
        companies={2}
        jobs={0}
      />
      <CollectionCard
        background="/cl1.jpeg"
        title="Women led"
        companies={5}
        jobs={0}
      />
      <CollectionCard
        background="/cl4.jpeg"
        title="Music Tech"
        companies={1}
        jobs={1}
      />
      <CollectionCard
        background="/cl5.jpeg"
        title="Marketplaces"
        companies={2}
        jobs={12}
      />
      <CollectionCard
        background="/cl6.jpeg"
        title="Giving Back"
        companies={1}
        jobs={1}
      />
    </section>
  );
};

export default Collection;
