import React from "react"
import "./Link.css"

import Arrow from "../../assets/arrow.svg?react"

function Link({active = "active", index = "index", className = "", hover}) {
    return (
        <div className={`${className === "links" ? "link-links" : "link"} ${active === index ? "active" : ""} ${hover === index ? "hover" : ""}`}>
            <Arrow/>
        </div>
    );
}

export default Link