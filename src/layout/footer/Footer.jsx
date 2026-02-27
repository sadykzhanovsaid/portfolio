import React from "react"
import "./Footer.css"

import Gradient from "@/layout/footer/gradient/Gradient.jsx"

import LogoIcon from "@/assets/images/layout/footer/logo.svg?react"

function Footer() {
    return (
        <div className="footer__wrapper">
            <Gradient/>

            <footer className="footer">
                <div className="container">
                    <div className="footer__box">
                        <div className="footer__about">
                            <div className="footer__brand">
                                <div className="footer__logo">
                                    <LogoIcon/>
                                </div>

                                <p className="footer__title">Thanks for stopping by ッ</p>
                            </div>

                            <p className="footer__copyright">© 2026 Said Sadykzhanov. All Rights Reserved.</p>
                        </div>

                        <div className="footer__lists">
                            <ul className="footer__list">
                                <li className="footer__link">Links</li>
                                <li className="footer__link">About</li>
                                <li className="footer__link">Work</li>
                                <li className="footer__link">Tech Stack</li>
                                <li className="footer__link">Contact</li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__link">Elsewhere</li>
                                <li className="footer__link">Email</li>
                                <li className="footer__link">LinkedIn</li>
                                <li className="footer__link">GitHub</li>
                                <li className="footer__link">Twitter</li>
                                <li className="footer__link">Discord</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer