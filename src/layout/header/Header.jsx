import React, {useState} from "react"
import "./Header.css"
import {Link} from "react-router-dom"

import Gradient from "@/layout/header/gradient/Gradient.jsx"

import LogoIcon from "@/assets/images/layout/header/logo.svg?react"
import TelegramIcon from "@/assets/images/layout/header/telegram.svg?react"
import LinkedInIcon from "@/assets/images/layout/header/linkedin.svg?react"
import GithubIcon from "@/assets/images/layout/header/github.svg?react"
import ThemeIcon from "@/assets/images/layout/header/theme.svg?react"

function Header({theme, setTheme}) {
    return (
        <>
            <Gradient/>

            <header className="header">
                <div className="container">
                    <div className="header__box">
                        <div className="header__content">
                            <div className="header__logo">
                                <Link to="/"><LogoIcon/></Link>
                            </div>

                            <ul className="header__list">
                                <li className="header__item"><Link to="/about">About</Link></li>
                                <li className="header__item"><Link to="/bookshelf">Bookshelf</Link></li>
                                <li className="header__item"><Link to="/tech-stack">Tech Stack</Link></li>
                                <li className="header__item"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="header__links">
                            <div className="header__link">
                                <a target="_blank"
                                   href="https://www.linkedin.com/in/said-sadykzhanov-b99235399/"><LinkedInIcon/></a>
                            </div>
                            <div className="header__link">
                                <a target="_blank" href="https://t.me/sadykzhanovsaid"><TelegramIcon/></a>
                            </div>
                            <div className="header__link">
                                <a target="_blank" href="https://github.com/sadykzhanovsaid"><GithubIcon/></a>
                            </div>
                            <div className="header__separator"></div>
                            <div className={theme ? "header__theme active" : "header__theme"}
                                 onClick={() => setTheme(!theme)}>
                                <ThemeIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header