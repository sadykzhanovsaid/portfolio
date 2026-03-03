import React from "react"
import "./Button.css"

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
            {title}
        </button>
    );
}

export default Button