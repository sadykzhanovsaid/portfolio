import React from "react"
import "./Connect.css"

import Arrow from "../../assets/connect/arrow.svg?react"

function Connect() {
    return (
        <section className="connectComponent">
            <div className="container">
                <div className="connect__box">
                    <p className="connect__title">Let’s Connect</p>
                    <div className="connect__links">
                        <a target="_blank" href="mailto:saidsadykzhanov1@gmail.com">
                            <button className="connect__link">
                                Email Me
                                <Arrow/>
                            </button>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/said-sadykzhanov-b99235399/">
                            <button className="connect__link">
                                Connect on LinkedIn
                                <Arrow/>
                            </button>
                        </a>
                        <a href="tel:+996708882668">
                            <button className="connect__link">
                                Send a Message
                                <Arrow/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Connect