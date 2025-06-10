import { ArrowRight, ExternalLink, Github, Figma } from "lucide-react"
import { useScrollFade } from "../lib/useScrollFade"
import { useState } from "react"

{/*const projects = [
    {
        id: 1,
        title: "WikAIn",
        description: "An AI-powered Filipino grammar analysis tool that helps users improve their Tagalog writing. It is our main project for the course Software Engineering 1, built with Python backend for NLP processing and modern web technologies for an intuitive user interface. Features real-time grammar checking and suggestions for Filipino text.",
        image: "/projects/",
        tags: ["HTML", "CSS", "Python", "JavaScript", "NLP"],
        demoUrl: "https://wikain-filipino.vercel.app/",
        githubUrl: "https://github.com/xianonnnnn/WIKAIN-Filipino-Grammar-Tool",

    },
    {
        id: 2,
        title: "Reddit Redesign",
        description: "Lorem ipsum kinempersz and everything else.",
        image: "/projects/",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 3,
        title: "Venti Airlines",
        description: "Lorem ipsum kinempersz and everything else.",
        image: "/projects/",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 4,
        title: "MedGrocer",
        description: "Lorem ipsum kinempersz and everything else.",
        image: "/projects/",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",

    }
]*/}

export const ProjectSection = () => {
    const { elementRef, isVisible, isFadingOut, hasAnimated } = useScrollFade(0.1, 0.8);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section
                ref={elementRef}
                id="projects" 
                className={`py-24 px-4 relative transition-all duration-800 ${
                    isVisible 
                        ? 'animate-scroll-fade-in' 
                        : isFadingOut 
                            ? 'animate-scroll-fade-out' 
                            : 'opacity-0 translate-y-8'
                }`}
            >
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-glow"> 
                        My <span className="text-primary"> Projects</span> 
                    </h2>

                    <p className="md:text-lg text-center text-muted-foreground mt-8 mb-12 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each project was carefully
                        crafted with attention to dtail, performance, and user experience.
                    </p>

                    {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {projects.map((project, key) => (
                            <div 
                                key={key} 
                                className="group bg-card/90 rounded-xl overflow-hidden shadow-lg card-hover w-full max-w-md p-6 flex flex-col items-center justify-center mx-auto"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">                           
                                    <h3 className="text-2xl font-semibold mb-2"> {project.title}</h3>
                                    <p className="text-muted-foreground textb-base mb-5 mt-3 text-justify">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                        {project.tags.map((tag) => (
                                            <span className="px-3 py-1 text-s font-medium border rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div className="flex space-x-3">
                                            <a 
                                                href={project.demoUrl} 
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration 300"
                                            > 
                                                <ExternalLink size={30}/></a>
                                            <a
                                                href={project.githubUrl} 
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration 300"
                                            >
                                                <Github size={30}/>
                                            </a>
                                        </div>
                                    </div>                               
                                </div>
                            </div>
                        ))}
                    </div>*/}

                    {/*Bento-Grid*/}
                    <div class="bento-grid">
                        <div class="col-left">
                            <div class="inner-box" onClick={() => handleImageClick("/projects/WikAIn.png")}>
                                <img src="/projects/WikAIn.png" alt="WikAIn Project" class="project" loading="lazy" decoding="async"/>
                            </div>
                        </div>
                        <div class="col-right">
                            <div class="box">
                                <div class="inner-box" onClick={() => handleImageClick("/projects/VentiAirlines.png")}>
                                    <img src="/projects/VentiAirlines.png" alt="Venti Airlines Project" class="project" loading="lazy" decoding="async"/>
                                </div>
                                <div class="inner-box" onClick={() => handleImageClick("/projects/Reddit.png")}>
                                    <img src="/projects/Reddit.png" alt="Reddit Project" class="project" loading="lazy" decoding="async"/>
                                </div>
                            </div>
                            <div class="inner-box" onClick={() => handleImageClick("/projects/MedGrocer.png")}>
                                    <img src="/projects/MedGrocer.png" alt="MedGrocer Project" class="project" loading="lazy" decoding="async"/>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal - Outside the section for full screen coverage */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className={`relative ${selectedImage === "/projects/WikAIn.png" ? "max-w-4xl" : "max-w-6xl"} max-h-[90vh]`}>
                        <img 
                            src={selectedImage} 
                            alt="Project preview" 
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        {/* Buttons for WikAIn project */}
                        {selectedImage === "/projects/WikAIn.png" && (
                            <div className="flex gap-3 mt-4 justify-center">
                                <a 
                                    href="https://wikain-filipino.vercel.app/" 
                                    target="_blank"
                                    className="px-4 py-2 bg-secondary text-primary-foreground rounded-lg hover:text-primary transition-colors duration-300 flex items-center gap-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={16} />
                                    Link
                                </a>
                                <a 
                                    href="https://github.com/xianonnnnn/WIKAIN-Filipino-Grammar-Tool" 
                                    target="_blank"
                                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:text-primary transition-colors duration-300 flex items-center gap-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={16} />
                                    GitHub Repo
                                </a>
                            </div>
                        )}
                        {/* Buttons for other projects */}
                        {selectedImage !== "/projects/WikAIn.png" && (
                            <div className="flex justify-center mt-4 gap-3">
                                {selectedImage === "/projects/VentiAirlines.png" && (
                                    <>
                                        <a 
                                            href="#" 
                                            target="_blank"
                                            className="px-4 py-2 bg-secondary text-primary-foreground rounded-lg hover:text-primary transition-colors duration-300 flex items-center gap-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Figma size={16} />
                                            Preview
                                        </a>
                                    </>
                                )}
                                {selectedImage === "/projects/Reddit.png" && (
                                    <>
                                        <a 
                                            href="#" 
                                            target="_blank"
                                            className="px-4 py-2 bg-secondary text-primary-foreground rounded-lg hover:text-primary transition-colors duration-300 flex items-center gap-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Figma size={16} />
                                            Preview
                                        </a>
                                    </>
                                )}
                                {selectedImage === "/projects/MedGrocer.png" && (
                                    <>
                                        <a 
                                            href="#" 
                                            target="_blank"
                                            className="px-4 py-2 bg-secondary text-primary-foreground rounded-lg hover:text-primary transition-colors duration-300 flex items-center gap-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Figma size={16} />
                                            Preview
                                        </a>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}