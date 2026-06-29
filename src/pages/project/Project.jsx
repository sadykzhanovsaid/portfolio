import React from "react"
import "./Project.css"

import Hero from "../../components/hero/Hero.jsx"
import Other from "./other/Other.jsx"

function Project() {
    return (
        <main className="project">
            <Hero/>
            <Other/>
        </main>
    );
}

export default Project