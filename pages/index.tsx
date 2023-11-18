import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import { CollectionSection } from "@/sections/collection";
import { WorkSection } from "@/sections/work";
import { FaqSection } from "@/sections/faq";
import Contact from "@/sections/contact";
import Footer from "@/components/footer";
import { StartupSection } from "@/sections/startup";
import { DetailSection } from "@/sections/detail";
import { JobSection } from "@/sections/job";
import VibeSection from "@/sections/vibe";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <DetailSection />
      <JobSection />
      <StartupSection />
      <VibeSection />
      <CollectionSection />
      <WorkSection />
      <FaqSection />
      <Contact />
      <Footer />
    </main>
  );
}
