import React from "react";
import Button from "./Button";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto pt-10 justify-between items-center flex-col gap-5 text-white sm:flex-row  container flex ">
        <div className="w-1/4">
          <form>
            <label>Join for free career tips:</label> <br />
            <input
              placeholder="something@email.com"
              type="text"
              id="fname"
              name="fname"
              className="border-2 border-black my-5 mr-3"
            />
            <Button title="sign up" rounded="rounded-2xl" color="text-white" />
          </form>
        </div>
        <div className="ml-5 sm:ml-0 ">
          <ul className="flex flex-col gap-5">
            <li className="font-bold">For Candidates</li>
            <li>Explore Jobs</li>
            <li>Discover Companies</li>
            <li>Browse Collections</li>
            <li>The Career Blog</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li className="font-bold">For Companies</li>
            <li>Parallel Hire</li>
            <li>Parallel Referrals</li>
            <li>The Hiring Blog</li>
            <li>Ai Job Builder</li>
          </ul>
        </div>
        <div className="mr-7 sm:mr-0">
          <ul className="flex flex-col gap-5">
            <li className="font-bold">Parallel</li>
            <li>About us</li>
            <li>Work with us</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
