import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HomeSection } from '../components/HomeSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/TechSection';
import { ProjectSection } from '../components/ProjectSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        if (window.location.hash) {
            history.replaceState(null, "", window.location.pathname);
            window.scrollTo({ top: 0, behavior: "auto" });
        }
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HomeSection />
                {/*<AboutSection />*/}
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}