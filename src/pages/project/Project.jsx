import React from "react"
import "./Project.css"

import Hero from "../../components/hero/Hero.jsx"
import Overview from "./overview/Overview.jsx"
import Context from "./context/Context.jsx"
import Connect from "../../components/connect/Connect.jsx"

import {projects} from "../../../projects.jsx"
import {useParams} from "react-router-dom";

function Project() {
    const { title } = useParams()
    const project = projects.find((project) => {
        return project.title.toLowerCase() === title.toLowerCase()
    })

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
                title={project.title}
                context={project.context}
                projectImages={project.projectImages}
                typeInterior={project.typeInterior}
            />
            <Connect/>
        </main>
    );
}

export default Project