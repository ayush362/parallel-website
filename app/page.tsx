import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Detail from "@/components/Detail/Detail";
import Job from "@/components/Job/Job";
import Startups from "@/components/Startups/Startups";
import Vibe from "@/components/Vibe/Vibe";
import Collection from "@/components/Collection/Collection";
import Work from "@/components/Work/Work";
import Faq from "@/components/Faq/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Detail />
      <Job />
      <Startups />
      <Vibe />
      <Collection />
      <Work />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
