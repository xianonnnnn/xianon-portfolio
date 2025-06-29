import {cn} from "@/lib/utils"
import { Menu, X } from "lucide-react";
import { useEffect, useState  } from "react";

const navItems = [
    
    {name: "Tech", href: "#tech"},
    {name: "Projects", href: "#projects"},
    /*{name: "Experience", href: "#experience"},*/
    /*{name: "About", href: "#about"},*/
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300 bg-background/10",
                isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-2xl font-bold text-primary flex items-center" href ="#home">
                    <img src="/Frame 3.svg" alt="logo" height="32" width="32" loading="lazy" decoding="async"/>
                    <span className="text-glow px-1 pb-1">
                        <span className="text-glow text-foreground"> x</span>ian<span className="text-glow text-foreground">on</span>
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-15">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 font-semibold hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}

                <button 
                    onClick = {()=> setIsMenuOpen((prev)=> !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                                >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
}