import React from "react"
import "./Projects.css"

import Hero from "@/shared/hero/Hero.jsx"

function Projects() {
    return (
        <main className="projects">
            <Hero
                urlImage="/star.png"
                altImage="icon"
                title="Projects"
                subtitle="Bringing ideas to life, one project at a time."
            />
        </main>
    );
}

export default Projects