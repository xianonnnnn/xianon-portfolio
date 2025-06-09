import { Mail, Github, Linkedin, Check } from "lucide-react"
import { useState } from "react"
import { useScrollFade } from "../lib/useScrollFade"

export const ContactSection = () => {
    const [isCopied, setIsCopied] = useState(false);
    const { elementRef, isVisible, isFadingOut, hasAnimated } = useScrollFade(0.1, 0.8);
    const email = "kristiangabot@yahoo.com";

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); 
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <section
            ref={elementRef}
            id="contact"
            className={`py-24 px-4 relative bg-secondary/30 transition-all duration-800 ${
                isVisible 
                    ? 'animate-scroll-fade-in' 
                    : isFadingOut 
                        ? 'animate-scroll-fade-out' 
                        : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="container max-w-7xl mx-auto z-10 text-glow">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    {/* Left side - Get In Touch */}
                    <div className="space-y-6 flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get In <span className="text-primary"> Touch</span>
                        </h2>
                        <p className="md:text-lg text-muted-foreground mt-8 mb-7 max-w-2xl mx-auto md:mx-0">
                            Have a project in mind or want to collaborate? Feel free to reach out.
                            I'm always open to discussing new opportunities.
                        </p>
                        <button 
                            onClick={handleCopyEmail}
                            className="cosmic-button px-8 flex items-center gap-2 min-w-[280px] justify-center mx-auto md:mx-0"
                        >
                            {isCopied ? <Check size={20} /> : <Mail size={20} />}
                            <span className="whitespace-nowrap">{isCopied ? "Copied!" : email}</span>
                        </button>
                    </div>

                    {/* Right side - Connect with Me */}
                    <div className="space-y-6 flex-1 flex flex-col items-center md:items-end">
                        <p className="text-2xl font-semibold text-center md:text-right mt-12 md:mt-28">
                            <span className="text-primary">Connect </span> with Me
                        </p>
                        <div className="flex justify-center md:justify-end items-center mt-0">
                            <div className="flex space-x-7">
                                <a
                                    href="https://github.com/xianonnnnn"
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={35}/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/krstngbt/"
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Linkedin size={35}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}