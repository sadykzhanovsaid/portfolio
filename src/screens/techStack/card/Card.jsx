import React from "react"
import "./Card.css"

function Card({tool}) {
    return (
        <div className={`card ${tool.title}`}>
            <div className="card__image">
                <img src={`/tools/${tool.image}`} alt="tool image"/>
            </div>

            <div className="card__content">
                <p className="card__title">{tool.title}</p>
                {tool.type ? <p className="card__type">{tool.type}</p> : null}
            </div>
        </div>
    );
}

export default Card