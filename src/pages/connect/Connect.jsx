import React from "react"
import "./Connect.css"

import Hero from "@/shared/hero/Hero.jsx"

function Connect() {
    return (
        <main className="connect">
            <Hero
                urlImage="/handshake.png"
                altImage="icon"
                title="Let’s Connect"
                subtitle="Find links to my social media and contact info to connect."
            />
        </main>
    );
}

export default Connect