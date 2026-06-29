import React from "react"
import "./About.css"

import Hero from "../../components/hero/Hero.jsx"
import Quiz from "./quiz/Quiz.jsx"
import Gallery from "./gallery/Gallery.jsx"

function About() {
    return (
        <main className="about">
            <Hero
                type="heading"
                image="about.png"
                title="About"
                description="Crafting meaningful experiences through design."
            />
            <Quiz/>
            <Gallery/>
        </main>
    );
}

export default About