import React from "react"
import "./Gradient.css"

import GradientImage from "@/assets/images/layout/footer/gradient.png"

function Gradient() {
    return (
        <div className="footer__gradient">
            <img src={GradientImage} alt="gradient"/>
        </div>
    );
}

export default Gradient