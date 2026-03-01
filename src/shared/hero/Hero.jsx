import React from "react"
import "./Hero.css"

function Hero({title, subtitle}) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    <p className="hero__title">{title}</p>
                    <p className="hero__subtitle">{subtitle}</p>
                </div>
            </div>

            <div className="hero__line"></div>
        </section>
    );
}

export default Hero