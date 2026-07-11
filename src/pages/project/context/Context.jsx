import React from "react"
import "./Context.css"

function Context({title, context, projectImages, typeInterior}) {
    return (
        <section className="context">
            <div className="container">
                <div className="context__box">
                    <p className="context__title"><span>Context</span> <br/> {context[0]}</p>

                    {typeInterior === "desktop" || typeInterior === "full" ?
                        <>
                            <div className="context__image-desktop">
                                <img src={`/screens/${title.toLowerCase()}/${projectImages[0]}.webp`} alt="project image"/>
                            </div>

                            <p className="context__title">{context[1]}</p>

                            <div className="context__image-desktop">
                                <img src={`/screens/${title.toLowerCase()}/${projectImages[1]}.webp`} alt="project image"/>
                            </div>
                        </> : null
                    }

                    {typeInterior === "full" ? <p className="context__title">{context[2]}</p> : null}

                    {typeInterior === "mobile" || typeInterior === "full" ?
                        <>
                            <div className="context__images-mobile">
                                <div className="context__image-mobile">
                                    <img src={`/screens/${title.toLowerCase()}/${projectImages[typeInterior === "mobile" ? 0 : 2]}.webp`} alt="project image"/>
                                </div>

                                <div className="context__image-mobile">
                                    <img src={`/screens/${title.toLowerCase()}/${projectImages[typeInterior === "mobile" ? 1 : 3]}.webp`} alt="project image"/>
                                </div>
                            </div>
                        </> : null
                    }

                    {typeInterior === "mobile" ? <p className="context__title">{context[1]}</p> : null}
                </div>
            </div>
        </section>
    );
}

export default Context