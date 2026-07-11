import React from "react"
import "./Cards.css"

import Card from "../card/Card.jsx"

import {projects} from "../../../../projects.jsx"

function Cards() {
    return (
        <section className="cards">
            <div className="container">
                <div className="cards__box">
                    {projects.map((project) => {
                        return <Card
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            projectImage={project.projectImage}
                            typeAppearance={project.typeAppearance}
                        />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Cards