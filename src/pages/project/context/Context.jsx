import React from "react"
import "./Context.css"

function Context({context, projectImages}) {
    return (
        <section className="context">
            <div className="container">
                <div className="context__box">
                    <p className="context__title"><span>Context</span> <br/> {context[0]}</p>

                    <div className="context__image-desktop">
                        <img src={`/screens/zara/${projectImages[0]}.png`} alt="project image"/>
                    </div>

                    <p className="context__title">{context[1]}</p>

                    <div className="context__image-desktop">
                        <img src={`/screens/zara/${projectImages[1]}.png`} alt="project image"/>
                    </div>

                    <p className="context__title">{context[2]}</p>

                    <div className="context__images-mobile">
                        <div className="context__image-mobile">
                            <img src={`/screens/zara/${projectImages[2]}.png`} alt="project image"/>
                        </div>

                        <div className="context__image-mobile">
                            <img src={`/screens/zara/${projectImages[3]}.png`} alt="project image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Context