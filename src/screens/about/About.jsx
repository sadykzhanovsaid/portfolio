import React from "react"
import "./About.css"
import {Link} from "react-router-dom"

import Hero from "@/shared/hero/Hero.jsx"
import Button from "@/shared/button/Button.jsx"

import SignatureIcon from "@/assets/images/screens/about/signature.svg?react"
import PortraitIcon from "@/assets/images/screens/about/portrait.svg?react"
import FlagIMage from "@/assets/images/screens/about/flag.png"

function About() {
    return (
        <main className="about">
            <Hero title="A little bit about me" subtitle="Who I am and what I do."/>

            <section className="introduction">
                <div className="container">
                    <div className="introduction__box">
                        <div className="introduction__text">
                            <div className="introduction__contents">
                                <div className="introduction__content">
                                    <p className="introduction__type">Who I am</p>
                                    <p className="introduction__title">Hi, I’m <span>Said</span>, a Frontend Web
                                        Developer based in
                                        Bishkek, Kyrgyzstan
                                        <img src={FlagIMage} alt="flag"/>
                                    </p>
                                </div>
                                <div className="introduction__content">
                                    <p className="introduction__type">What I Do</p>
                                    <p className="introduction__title">I focus on building modern and responsive
                                        websites using technologies like React.js and Sass. I enjoy creating clean,
                                        user-friendly interfaces and turning ideas into functional and visually
                                        appealing web experiences. Although I don’t have commercial experience yet, I’ve
                                        been actively developing my skills through personal projects where I design and
                                        build websites from scratch. These projects allow me to experiment with
                                        different layouts, components, and UI patterns while improving my development
                                        workflow.</p>
                                </div>
                                <div className="introduction__content">
                                    <p className="introduction__type">What I Did</p>
                                    <p className="introduction__title">Before delving into the realm of front end
                                        engineering, I spent five years as a graphic designer. This background has
                                        equipped me with a keen eye for aesthetics and a deep understanding of
                                        user-centered design principles. It enables me to seamlessly blend functionality
                                        and visual appeal in every project I undertake.</p>
                                </div>
                                <p className="introduction__link">Feel free to reach out via <Link to="/contact"
                                                                                                   onClick={() => window.scrollTo({
                                                                                                       top: 0,
                                                                                                       behavior: "smooth"
                                                                                                   })}>e-mail</Link>, or
                                    follow me on <a
                                        href="https://t.me/sadykzhanovsaid">Telegram</a>. Want to see where I’ve worked?
                                    Check out my <a
                                        href="#">Resume</a>, or Connect with me on <a
                                        href="https://www.linkedin.com/in/said-sadykzhanov-b99235399/">LinkedIn</a>.</p>
                            </div>

                            <div className="introduction__more">
                                <p>Let’s build something great.</p>
                                <div className="introduction__signature">
                                    <SignatureIcon/>
                                </div>
                            </div>

                            <Link className="introduction__touch content-wrapper" to="/contact"
                                  onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                                <Button type="button" className="introduction__touch content" title="Get in touch"/>
                            </Link>
                        </div>
                        <div className="introduction__other">
                            <div className="introduction__image">
                                <PortraitIcon/>
                            </div>

                            <Link className="introduction__touch other-wrapper" to="/contact"
                                  onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                                <Button type="button" className="introduction__touch other" title="Get in touch"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About