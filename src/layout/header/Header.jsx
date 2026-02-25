import React, {useState} from "react"
import "./Header.css"

import LogoIcon from "@/assets/images/layout/header/logo.svg?react"
import MoreIcon from "@/assets/images/layout/header/more.svg?react"
import LinkedInIcon from "@/assets/images/layout/header/linkedin.svg?react"
import XIcon from "@/assets/images/layout/header/x.svg?react"
import GithubIcon from "@/assets/images/layout/header/github.svg?react"
import ThemeIcon from "@/assets/images/layout/header/theme.svg?react"


function Header() {
    const [moreOpen, setMoreOpen] = useState(false)
    const [theme, setTheme] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <div className="header__content">
                        <div className="header__logo">
                            <LogoIcon/>
                        </div>

                        <ul className="header__list">
                            <li className="header__item">About</li>
                            <li className="header__item">Work</li>
                            <li className="header__item">Notebook</li>
                            <li className="header__item">Contact</li>
                            <li className="header__item" onClick={() => setMoreOpen(!moreOpen)}>
                                More
                                <MoreIcon
                                    className={moreOpen ? "header__more active" : "header__more"}
                                />
                            </li>
                        </ul>
                    </div>

                    <div className="header__links">
                        <div className="header__link">
                            <LinkedInIcon/>
                        </div>
                        <div className="header__link">
                            <XIcon/>
                        </div>
                        <div className="header__link">
                            <GithubIcon/>
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
    );
}

export default Header