import React from "react"
import "./More.css"

function More({moreOpen, setMoreOpen}) {
    return (
        <div className={moreOpen ? "more active" : "more"}>
            <ul className="more__list">
                <li className="more__item" onClick={() => setMoreOpen(!moreOpen)}>Bookshelf</li>
                <li className="more__item" onClick={() => setMoreOpen(!moreOpen)}>Tech Stack</li>
                <li className="more__item" onClick={() => setMoreOpen(!moreOpen)}>This UI Kit</li>
            </ul>
        </div>
    );
}

export default More