import React from "react"
import "./Hero.css"

function Hero({
                  type,
                  image,
                  index,
                  title,
                  description,
                  stacks
              }) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    {type === "heading" ? <div className={`hero__image ${image === "name.png" ? "nameImage" : image === "connect.png" ? "connectImage" : ""}`}><img src={`/hero/${image}`} alt={title}/></div> :
                        <p className="hero__index">{index}</p>}
                    <p className="hero__title">{title}</p>
                    <p className="hero__description">{description}</p>
                    {type === "project" ? <div className="hero__stacks">
                        {stacks.map((stack, index) => {
                            return <button key={index} className="hero__stack">{stack}</button>
                        })}
                    </div> : null}
                </div>
            </div>
        </section>
    );
}

export default Hero