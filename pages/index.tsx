import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Detail from "@/components/Detail/Detail";
import Job from "@/components/Job/Job";
import {Startup} from "@/components/startup/startup";
import Vibe from "@/components/vibe";
import Collection from "@/components/Collection/Collection";
import Work from "@/components/work";
import Faq from "@/components/Faq/Faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Navbar/>
            <Hero/>
            <Detail/>
            <Job/>
            <Startup/>
            <Vibe/>
            <Collection/>
            <Work/>
            <Faq/>
            <Contact/>
            <Footer/>
        </main>
    );
}
