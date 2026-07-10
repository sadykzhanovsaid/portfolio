import React from "react"
import "./Card.css"
import {Link as NavLink} from "react-router-dom"

import Link from "../../../components/link/Link.jsx"

function Card({title, description}) {
    return (
        <NavLink to={`/projects/${title.toLowerCase()}`}>
            <div className="card">
                <Link/>

                <p className="card__title">{title}</p>

                <p className="card__description">{description}</p>

                <div className="card__image"></div>
            </div>
        </NavLink>
    );
}

export default Card