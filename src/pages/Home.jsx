import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HomeSection } from '../components/HomeSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/TechSection';

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
            </main>

            {/* Footer */}
        </div>
    );
}