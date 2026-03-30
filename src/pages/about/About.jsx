import React from "react"
import "./About.css"

import Hero from "@/shared/hero/Hero.jsx"

function About() {
    return (
        <main className="about">
            <Hero
                urlImage="/about.png"
                altImage="icon"
                title="About"
                subtitle="I build intuitive and meaningful user experiences on the frontend."
            />
        </main>
    );
}

export default About