import HeroSection from "@/sections/hero";
import {CollectionSection} from "@/sections/collection";
import {WorkSection} from "@/sections/work";
import {FaqSection} from "@/sections/faq";
import ContactSection from "@/sections/contact";
import {StartupSection} from "@/sections/startup";
import {DetailSection} from "@/sections/detail";
import {JobSection} from "@/sections/job";
import VibeSection from "@/sections/vibe";
import {Layout} from "@/components/layout";

export default function Home() {
    return (
        <Layout>
            <HeroSection/>
            <DetailSection/>
            <JobSection/>
            <StartupSection/>
            <VibeSection/>
            <CollectionSection/>
            <WorkSection/>
            <FaqSection/>
            <ContactSection/>
        </Layout>
    );
}

