import { useState } from "react"
import { cn } from '@/lib/utils'

// Map of skill names to their SVG file paths
const techIcons = {
    "HTML": "/techs/html5.svg",
    "CSS": "/techs/css3.svg",
    "JavaScript": "/techs/js.svg",
    "React": "/techs/react.svg",
    "TypeScript": "/techs/typescript.svg",
    "Tailwind CSS": "/techs/tailwindcss.svg",
    "Next.js": "/techs/nextjs2.svg",
    "PostgreSQL": "/techs/postgresql.svg",
    "Python": "/techs/python.svg",
    "Git/Github": "/techs/github (1).svg",
    "Figma": "/techs/figma.svg",
    "Microsoft Excel": "/techs/excel.svg",
    "SpreadSheets": "/techs/sheets.svg",
    "VS Code": "/techs/vscode.svg",
}

const skills = [
    // Frontend
    {name: "HTML", category: "frontend"},
    {name: "CSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "TypeScript", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},
    {name: "Next.js", category: "frontend"},

    // Backend
    {name: "PostgreSQL", category: "backend"},
    {name: "Python", category: "backend"},

    // Tools
    {name: "Git/Github", category: "tools"},
    {name: "Figma", category: "tools"},
    {name: "Microsoft Excel", category: "tools"},
    {name: "SpreadSheets", category: "tools"},
    {name: "VS Code", category: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
        <section id="tech" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-glow">
                    <span className="text-primary text-glow"> Tech</span> Stacks
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn("text-base md:text-lg px-5 py-1 font-semibold rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-background" 
                                : "bg-secondary/70 text-foreground hover:text-primary bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-7 justify-center">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card/90 p-6 rounded-lg shadow-xs card-hover aspect-square flex flex-col items-center justify-center gap-4"
                        >
                            {techIcons[skill.name] ? (
                                <>
                                    <div className="flex-1 flex items-center justify-center">
                                        <img 
                                            src={techIcons[skill.name]} 
                                            alt={skill.name}
                                            className="w-25 h-25 object-contain"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-center text-muted-foreground">
                                        {skill.name}
                                    </span>
                                </>
                            ) : (
                                <div className="w-25 h-25 flex items-center justify-center text-muted-foreground">
                                    {skill.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

        </section>)
}