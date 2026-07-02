import React from "react"
import "./Overview.css"

function Overview({stacksImage}) {
    return (
        <section className="overview">
            <div className="container">
                <div className="overview__box">
                    <div className="overview__role">
                        <p className="overview__role-type">Role</p>

                        <div className="overview__role-content">
                            <p className="overview__role-title">Frontend Developer</p>
                            <p className="overview__role-description">Web Developer</p>
                        </div>
                    </div>

                    <div className="overview__stacks">
                        {stacksImage.map((stack, index) => {
                            return (
                                <div key={index} className={`overview__stack ${stack.slice(0, -4)}`}>
                                    <img src={`/stacks/${stack}`} alt={stack.slice(0, -4)}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview