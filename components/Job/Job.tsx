import React from "react";
import JobCard from "./JobCard";

const Job = () => {
  return (
    <section className="container mx-auto overflow-hidden  px-5">
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl text-center">Trending jobs</h2>
        <p>View All→</p>
      </div>
      <div className="md:flex gap-5 mt-4">
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />{" "}
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />{" "}
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />{" "}
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />{" "}
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />{" "}
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />{" "}
        <JobCard
          icon="/job.png"
          title="Growth/CRO Marketer"
          subtitle="Goodkarma Amsterdam"
          employee="Active Employees"
          button="Apply Direct"
        />
      </div>
    </section>
  );
};

export default Job;
