import React from "react"
import "./Button.css"

import TouchIcon from "@/assets/images/screens/about/touch.svg?react"

function Button({
                    type,
                    className,
                    title
                }) {
    return (
        <button
            type={type}
            className={`buttonDefault ${className}`}
        >
            {className === "introduction__touch content" || className === "introduction__touch other" ? <TouchIcon/> : null}
            {title}
        </button>
    );
}

export default Button