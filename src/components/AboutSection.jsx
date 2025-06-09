import { Code, User, Briefcase } from "lucide-react"
import { useScrollFade } from "../lib/useScrollFade"

export const AboutSection =() => {
    const { elementRef, isVisible, isFadingOut, hasAnimated } = useScrollFade(0.1, 0.8);

    return (
        <section 
            ref={elementRef}
            id="about" 
            className={`py-24 px-4 relative transition-all duration-800 ${
                isVisible 
                    ? 'animate-scroll-fade-in' 
                    : isFadingOut 
                        ? 'animate-scroll-fade-out' 
                        : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-glow text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Data Analyst & Full-Stack Developer
                        </h3>

                        <p className="text-muted-foreground text-lg"> 
                            My full name is actually
                            <span className="font-semibold text-primary"> Kristian Gerald Gabot</span> 
                            , but I prefer to be called 
                            <span className="font-semibold text-primary"> Xian</span>
                            . Growing up as a curious child, I used to wonder what my mom does with her computer. 
                            Back then I thought computers are only used for playing games, but I was astonished 
                            to see my mom deals with data. That's where my interest with technology starts
                            
                        </p>

                        <p className="text-muted-foreground"> 
                            A computer science student blah blah blah.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground"> Creating reponsive websites and web applications with modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground"> Creating reponsive websites and web applications with modern frameworks.</p>
                            </div>
                                </div>
                            </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground"> Creating reponsive websites and web applications with modern frameworks.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}