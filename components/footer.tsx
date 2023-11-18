import React from "react";

const Footer = () => {
  return (
    <section className="bg-black py-10">
      <div className="mx-auto pt-10 px-5 text-white container grid grid-cols-2 lg:grid-cols-4 ">
        <div className="mr-5 overflow-x-auto">
          <form>
            <label>Join for free career tips:</label> <br />
            <input
              placeholder="something@email.com"
              type="text"
              id="fname"
              name="fname"
              className="border-2 border-black my-5"
            />
            <button className="btn btn-yellow">Sign Up</button>
          </form>
        </div>
        <div className="mb-8 lg:mb-0">
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
