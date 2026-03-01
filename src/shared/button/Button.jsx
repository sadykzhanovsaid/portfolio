import React from "react"
import "./Button.css"

function Button({
                    onClick,
                    className,
                    title
                }) {
    return (
        <button
            type="button"
            onClick={() => onClick?.()}
            className={className + " buttonDefault"}
        >
            {title}
        </button>
    );
}

export default Button