import React from "react"
import "./Links.css"

import ArrowIcon from "@/assets/links/arrow.svg?react"

function Links() {
    return (
        <div className="links">
            <div className="container">
                <div className="links__box">
                    <p className="links__title">Let’s Connect</p>
                    <div className="links__list">
                        <a target="_blank" href="mailto:saidsadykzhanov1@gmail.com">
                            <button className="links__link">
                                Email Me
                                <ArrowIcon/>
                            </button>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/said-sadykzhanov-b99235399/">
                            <button className="links__link">
                                Connect on LinkedIn
                                <ArrowIcon/>
                            </button>
                        </a>
                        <a href="tel:+996708882668">
                            <button className="links__link">
                                Send a Message
                                <ArrowIcon/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Links