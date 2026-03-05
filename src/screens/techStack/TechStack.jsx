import React from "react"
import "./TechStack.css"
import {data} from "../../../data.jsx"

import Hero from "@/shared/hero/Hero.jsx"
import Card from "@/screens/techStack/card/Card.jsx"

function TechStack() {
    return (
        <main className="tech-stack">
            <Hero title="Tech Stack" subtitle="The dev tools, apps, devices, and games I use and play."/>

            <section className="tools">
                <div className="container">
                    <div className="tools__box">
                        <div className="devs">
                            <p className="tools__title">Devs</p>
                            <div className="tools__cards">
                                {data.devs.map(tool => {
                                    return <Card key={tool.title} tool={tool}/>
                                })}
                            </div>
                        </div>

                        <div className="apps">
                            <p className="tools__title">Apps</p>
                            <div className="tools__cards">
                                {data.apps.map(tool => {
                                    return <Card key={tool.title} tool={tool}/>
                                })}
                            </div>
                        </div>

                        <div className="games">
                            <p className="tools__title">Games</p>
                            <div className="tools__cards">
                                {data.games.map(tool => {
                                    return <Card key={tool.title} tool={tool}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default TechStack