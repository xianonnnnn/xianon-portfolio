import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export const HomeSection = () => {
    const [hideOnScroll, setHideOnScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHideOnScroll(window.scrollY > 50); // fade out after 50px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center md:items-start justify-center px-4"
            >
            <div className="container max-w-7xl mx-auto text-center md:text-left z-10">
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in">
                        Hello, I'm
                    </p>

                    <h1 className="text-7xl md:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1 mx-auto md:mx-0 max-w-max">
                        <span>
                        <span className="group inline-flex">
                            <span className="relative transition-all duration-500 ease-in-out w-[1ch] group-hover:w-[3.5ch]">
                            <span className="text-glow text-foreground absolute left-0 top-0 transition-opacity duration-300 group-hover:opacity-0">
                                x
                            </span>
                            <span className="text-primary flex items-center text-glow text-foreground absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                krist
                            </span>
                            </span>
                            <span className="text-primary flex items-center text-glow text-foreground">
                            ian
                            </span>
                        </span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-2">
                        I'm a Computer Science student passionate about data analytics, with a growing skill set in full-stack development.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>

                        <a
                            href="/src/assets/Resume.pdf"
                            className="cosmic-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
                    hideOnScroll ? "opacity-0" : "opacity-100"
                }`}
                >
                <div className="flex flex-col items-center animate-bounce">
                    <span>Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </div>
        </section>
    )
}