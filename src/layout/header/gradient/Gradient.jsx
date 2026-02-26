import React from "react"
import "./Gradient.css"

import GradientImage from "@/assets/images/layout/header/gradient.png"

function Gradient() {
    return (
        <div className="header__gradient">
            <img src={GradientImage} alt="gradient"/>
        </div>
    );
}

export default Gradient