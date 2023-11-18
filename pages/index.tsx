import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import Collection from "@/components/Collection/Collection";
import Work from "@/components/work";
import Faq from "@/components/Faq/Faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import {StartupSection} from "@/sections/startup";
import {DetailSection} from "@/sections/detail";
import {JobSection} from "@/sections/job";
import VibeSection from "@/sections/vibe";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Navbar/>
            <Hero/>
            <DetailSection/>
            <JobSection/>
            <StartupSection/>
            <VibeSection/>
            <Collection/>
            <Work/>
            <Faq/>
            <Contact/>
            <Footer/>
        </main>
    );
}
