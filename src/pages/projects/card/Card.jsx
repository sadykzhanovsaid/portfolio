import React from "react"
import "./Card.css"
import {Link as NavLink} from "react-router-dom"

import Link from "../../../components/link/Link.jsx"

function Card({title, description, projectImage, typeAppearance}) {
    return (
        <NavLink to={`/projects/${title.toLowerCase()}`}>
            <div className={`card ${typeAppearance}`}>
                <Link/>

                <p className="card__title">{title} lorem</p>

                <p className="card__description">{description}</p>

                {/*<div className={`card__image ${typeAppearance}`}>*/}
                    <img className={`card__image ${typeAppearance}`} src={`/screens/${title.toLowerCase()}/${projectImage}.webp`} alt={title}/>
                {/*</div>*/}
            </div>
        </NavLink>
    );
}

export default Card