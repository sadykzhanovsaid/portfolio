import React from "react"
import "./Header.css"
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <ul className="header__list">
                        <li className="header__link"><NavLink to="/">Home</NavLink></li>
                        <li className="header__link"><NavLink to="/about">About</NavLink></li>
                        <li className="header__link"><NavLink to="/projects">Projects</NavLink></li>
                        <li className="header__link"><NavLink to="/connect">Connect</NavLink></li>
                        <span></span>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header