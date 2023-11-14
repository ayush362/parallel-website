import React from "react";
import Image from "next/image";
import Button from "./Button";
const Navbar = () => {
  return (
    <section className="flex container justify-between items-center mx-auto my-5 px-4">
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={120} height={50} />
        <div className="md:flex  hidden">
          <ul className="flex gap-4 font-bold">
            <li>Jobs</li>
            <li>Startups</li>
            <li>Collection</li>
            <li>Learn</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5">
        <Button title="Sign up" rounded="rounded-2xl" />
        <Image
          src="/menu.svg"
          alt="menu"
          width={20}
          height={20}
          className="md:hidden"
        />
      </div>
    </section>
  );
};

export default Navbar;
