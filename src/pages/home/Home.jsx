import React from "react"
import "./Home.css"

import Hero from "@/shared/hero/Hero.jsx"

function Home() {
    return (
        <main className="home">
            <Hero
                urlImage="/portrait.png"
                altImage="Said Sadykzhanov portrait"
                title="Said Sadykzhanov"
                subtitle="I’m a Frontend Developer focused on crafting fast, accessible, and user-centered web experiences."
            />
        </main>
    );
}

export default Home