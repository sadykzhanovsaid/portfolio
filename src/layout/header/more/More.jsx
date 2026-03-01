import React from "react"
import "./More.css"

import {Link} from "react-router-dom"

function More({moreOpen, setMoreOpen}) {
    return (
        <div className={moreOpen ? "more active" : "more"}>
            <ul className="more__list">
                <li className="more__item" onClick={() => setMoreOpen(!moreOpen)}>
                    <Link to="/">Bookshelf</Link>
                </li>
                <li className="more__item" onClick={() => setMoreOpen(!moreOpen)}>
                    <Link to="/">Tech Stack</Link>
                </li>
                <li className="more__item" onClick={() => setMoreOpen(!moreOpen)}>
                    <Link to="/">This UI Kit</Link>
                </li>
            </ul>
        </div>
    );
}

export default More