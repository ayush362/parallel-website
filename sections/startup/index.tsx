import React from "react";
import StartupCard, {
  StartupCardPropsType,
} from "@/sections/startup/startup-card";

export const StartupSection = () => {
  const startupCard: StartupCardPropsType[] = [
    {
      backgroundUrl: "/st1.png",
      logoUrl: "/sl1.png",
      title: "Webflow",
      location: "Manufacturing.San Francisco,CA",
      position: "0 open positions",
    },
    {
      backgroundUrl: "/st2.png",
      logoUrl: "/sl2.png",
      title: "Patreon",
      location: "Manufacturing.San Francisco,CA",
      position: "2 open positions",
    },
    {
      backgroundUrl: "/st3.png",
      logoUrl: "/sl3.png",
      title: "Faire",
      location: "Manufacturing.San Francisco,CA",
      position: "8 open positions",
    },
    {
      backgroundUrl: "/st4.png",
      logoUrl: "/sl4.png",
      title: "Breef",
      location: "Manufacturing.San Francisco,CA",
      position: "6 open positions",
    },
  ];
  return (
    <section className="container mx-auto overflow-hidden px-10">
      <h1 className="font-bold text-4xl mb-5">Top startups</h1>
      <div className="flex gap-5 overflow-x-scroll pb-5">
        {startupCard.map((startupCard, index) => (
          <StartupCard key={index} {...startupCard} />
        ))}
      </div>
    </section>
  );
};
