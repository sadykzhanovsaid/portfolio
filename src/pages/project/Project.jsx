import React from "react"
import "./Project.css"

import Hero from "../../components/hero/Hero.jsx"
import Overview from "./overview/Overview.jsx"
import Context from "./context/Context.jsx"

import {projects} from "../../../projects.jsx"

function Project() {
    const project = projects[0]

    return (
        <main className="project">
            <Hero
                type="project"
                index={project.id}
                title={project.title}
                description={project.description}
                screens={project.screens}
            />
            <Overview
                stacksImage={project.stacksImage}
            />
            <Context
                context={project.context}
                projectImages={project.projectImages}
            />
        </main>
    );
}

export default Project