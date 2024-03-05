import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <NavBar />
            <Hero />
            <Features />
            <Integrations />
            <Stats />
            <CTA />
            <Testimonial />
            <Footer />
        </main>
    );
}
