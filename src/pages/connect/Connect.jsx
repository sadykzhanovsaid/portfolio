import React from "react"
import "./Connect.css"

import Hero from "../../components/hero/Hero.jsx"
import Links from "./links/Links.jsx"

function Connect() {
    return (
        <main className="connect">
            <Hero
                type="heading"
                image="connect.png"
                title="Let’s Connect"
                description="Find links to my social media and contact info to connect."
            />
            <Links/>
        </main>
    );
}

export default Connect