import React from "react"
import "./About.css"

import Hero from "@/shared/hero/Hero.jsx"
import Overview from "@/pages/about/overview/Overview.jsx"

function About() {
    return (
        <main className="about">
            <Hero
                urlImage="/about.png"
                altImage="icon"
                title="About"
                subtitle="I build intuitive and meaningful user experiences on the frontend."
            />

            <Overview/>
        </main>
    );
}

export default About