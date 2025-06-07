import { useState } from "react"
import { cn } from '@/lib/utils'


const skills = [
    // Frontend
    {name: "HTML/CSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "TypeScript", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},
    {name: "Next.js", category: "frontend"},

    // Backend
    {name: "PostgreSQL", category: "backend"},

    // Tools
    {name: "Git/Github", category: "tools"},
    {name: "Figma", category: "tools"},
    {name: "Microsoft Excel", category: "tools"},
    {name: "Google SpreadSheets", category: "tools"},
    {name: "VS Code", category: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
        <section id="tech" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
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

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>)
}