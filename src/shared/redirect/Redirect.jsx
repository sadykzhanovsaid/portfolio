import React from "react"
import "./Redirect.css"

import ArrowIcon from "@/assets/arrow.svg?react"

function Redirect({intro, toggleActive}) {
    return (
        <button
            className={`redirect ${intro.isActive ? "active" : null}`}
            onClick={(e) => toggleActive(intro.id, e)}
        >
            <ArrowIcon/>
        </button>
    );
}

export default Redirect