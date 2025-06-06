export const HomeSection = () => {
    return (
        <section 
            id="home" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
            
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in">
                        Hello, I'm</p>
                    <h1 className="text-7xl md:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
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
                                <span className="text-primary flex items-center text-glow text-foreground">ian</span>
                            </span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
                        I'm a Computer Science student passionate about data analytics, with a growing skill set in full-stack development.
                    </p>
                </div>

            </div>
        </section>
    )
}