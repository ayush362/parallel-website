import React from "react";
import Card from "./DetailCard";

const Detail = () => {
  return (
    <section className="container mx-auto px-5 w-full  lg:flex  gap-5  lg:justify-around">
      <Card
        title="Samantha Smith"
        subtitle="parallel Verified"
        icon="/Hero.png"
        list1="Ways of working"
        list2="My Portfolio"
        list3="Careeer goals"
        heading="Build your detailed profile"
      >
        Share our aspirations,work-history,& personality. Answer promts to
        show-case your unique self.
      </Card>
      <Card
        title="Congratulations"
        subtitle="you have matched"
        icon="/Hero.png"
        list1="Photo of the lady"
        list2="lorem ipsum losi osli"
        list3="Hello there"
        heading="Get matched to top opportunities"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt
        quisquam, voluptatibus ducimus optio illum.
      </Card>
      <Card
        title="Samantha Smith"
        subtitle="parallel Verified"
        icon="/Hero.png"
        list1="Ways of working"
        list2="My Portfolio"
        list3="Careeer goals"
        heading="message direct with the hiring team"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi
        architecto quos expedita.
      </Card>
    </section>
  );
};

export default Detail;
