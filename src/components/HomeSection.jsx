import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"
import { useScrollFade } from "../lib/useScrollFade"

export const HomeSection = () => {
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const { elementRef, isVisible, isFadingOut, hasAnimated } = useScrollFade(0.1, 0.8);

    useEffect(() => {
        const handleScroll = () => {
            setHideOnScroll(window.scrollY > 50); // fade out after 50px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <section
            ref={elementRef}
            id="home"
            className={`relative min-h-screen flex flex-col items-center md:items-start justify-center px-4 transition-all duration-800 ${
                isVisible 
                    ? 'animate-scroll-fade-in' 
                    : isFadingOut 
                        ? 'animate-scroll-fade-out' 
                        : 'opacity-0 translate-y-8'
            }`}
            >
            <div className="container max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in">
                            Hello, I'm
                        </p>

                        <h1 className="text-7xl md:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1 mx-auto lg:mx-0 max-w-max">
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

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-2">
                            I'm a Computer Science student passionate about data analytics, with a growing skill set in full-stack development.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-4">
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

                    {/* Right Column - Image */}
                    <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-3">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
                            <img
                                src="/src/assets/Picture.png"
                                alt="Kristian - Computer Science Student"
                                className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl"
                                onError={(e) => {
                                    // Fallback to a placeholder if image doesn't exist
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div 
                                className="hidden w-full h-full rounded-full border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5 items-center justify-center"
                                style={{display: 'none'}}
                            >
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-primary">K</span>
                                    </div>
                                    <p className="text-muted-foreground">Profile Image</p>
                                </div>
                            </div>
                        </div>
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