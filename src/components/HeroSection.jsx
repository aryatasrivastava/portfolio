import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6"> 
                <h1 className="text-4xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello, I am </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1 ">Aryata</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Srivastava</span>
                </h1>
                <p className="text-lg md-text-xl animate-fade-in-delay-3 ">
                  A passionate learner exploring design, development and everything that brings web to life.
                  Exploring the <span className="text-primary font-bold">full-stack</span> jounery from UI design to backend logic, driven by curiosity and creativity.
                  Growing everyday in the world of web development
                </p>
                <div className="opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
    </section>
}