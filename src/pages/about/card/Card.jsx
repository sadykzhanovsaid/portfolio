import React, {useState} from "react"
import "./Card.css"

import Redirect from "@/shared/redirect/Redirect.jsx"

function Card({intro, toggleActive, removeActive}) {
    const [hover, setHover] = useState(false)

    return (
        <div
            className={`intro-card ${intro.isActive && hover ? "hover" : "none"}`}
            onClick={() => removeActive(intro.id)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <p className="intro-card__title">{intro.title}</p>
            {/*<p className={`intro-card__${intro.isActive ? "description" : "subtitle"}`}>{intro.isActive ? intro.description : intro.subtitle}</p>*/}
            {intro.isActive ?
                <p className="intro-card__description">{intro.isActive ? intro.description : intro.subtitle}</p> :
                <p className="intro-card__subtitle">{intro.isActive ? intro.description : intro.subtitle}</p>}
            {/*<p className="intro-card__subtitle">{intro.isActive ? intro.description : intro.subtitle}</p>*/}
            {/*<p className="intro-card__description">{intro.isActive ? intro.description : intro.subtitle}</p>*/}
            <Redirect intro={intro} toggleActive={toggleActive}/>
        </div>
    );
}

export default Card