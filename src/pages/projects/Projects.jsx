import React from "react"
import "./Projects.css"

import Hero from "../../components/hero/Hero.jsx"
import Cards from "./cards/Cards.jsx"

function Projects() {
    return (
        <main className="projects">
            <Hero
                type="heading"
                image="projects.webp"
                title="Projects"
                description="Bringing ideas to life, one project at a time."
            />
            <Cards/>
        </main>
    );
}

export default Projects