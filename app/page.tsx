import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <div className="bg-gray-50 mb-5">
                <NavBar />
                <Hero />
            </div>

            <Features />
            <Stats />
            <Footer />
        </main>
    );
}
