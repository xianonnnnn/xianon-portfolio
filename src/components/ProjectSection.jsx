import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum kinempersz and everything else. Lorem ipsum kineddsgsggsgmpersz and everything else. Lorem ipsum kinempersz and everything else.",
        image: "/projects/",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum kinempersz and everything else.",
        image: "/projects/",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum kinempersz and everything else.",
        image: "/projects/",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",

    }
]

export const ProjectSection = () => {
    return (
        <section
            id="projects" className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-8xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-glow"> 
                    Featured <span className="text-primary"> Projects</span> 
                </h2>

                <p className="md:text-lg text-center text-muted-foreground mt-8 mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to dtail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card/90 rounded-xl overflow-hidden shadow-lg card-hover w-full max-w-md p-6"
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
                                <p className="text-muted-foreground textb-base mb-3 mt-3 text-justify">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
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
                </div>
                {/*
                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button bg-primary text-background w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/xianonnnnn"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>

                </div>*/}
            </div>
        </section>
    )
}