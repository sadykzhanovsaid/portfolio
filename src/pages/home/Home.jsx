import React from "react"
import "./Home.css"

import Hero from "../../components/hero/Hero.jsx"
import Cards from "../projects/cards/Cards.jsx"

function Home() {
    return (
        <main className="home">
            <Hero
                type="heading"
                image="name.webp"
                title="Said Sadykzhanov"
                description="I’m a UI/UX designer focused on user-centered experiences."
            />
            <Cards/>
        </main>
    );
}

export default Home