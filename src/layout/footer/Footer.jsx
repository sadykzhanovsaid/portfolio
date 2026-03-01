import React from "react"
import "./Footer.css"

import Gradient from "@/layout/footer/gradient/Gradient.jsx"

import LogoIcon from "@/assets/images/layout/footer/logo.svg?react"
import {Link} from "react-router-dom";

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
                                    <Link to="/"><LogoIcon/></Link>
                                </div>

                                <p className="footer__title">Thanks for stopping by ッ</p>
                            </div>

                            <p className="footer__copyright">© 2026 Said Sadykzhanov. All Rights Reserved.</p>
                        </div>

                        <div className="footer__lists">
                            <ul className="footer__list">
                                <li className="footer__link">Links</li>
                                <li className="footer__link"><Link to="/">About</Link></li>
                                <li className="footer__link"><Link to="/">Work</Link></li>
                                <li className="footer__link"><Link to="/">Tech Stack</Link></li>
                                <li className="footer__link"><Link to="/contact">Contact</Link></li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__link">Elsewhere</li>
                                <li className="footer__link"><Link to="/">Email</Link></li>
                                <li className="footer__link"><Link to="/">LinkedIn</Link></li>
                                <li className="footer__link"><Link to="/">GitHub</Link></li>
                                <li className="footer__link"><Link to="/">Twitter</Link></li>
                                <li className="footer__link"><Link to="/">Discord</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer