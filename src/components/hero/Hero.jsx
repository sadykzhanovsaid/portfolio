import React from "react"
import "./Hero.css"

function Hero({
                  type,
                  image,
                  index,
                  title,
                  description,
                  screens
              }) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    {type === "heading" ? <div className={`hero__image ${image === "name.webp" ? "nameImage" : image === "connect.webp" ? "connectImage" : ""}`}><img src={`/hero/${image}`} alt={title}/></div> :
                        <p className="hero__index">{index <= 9 ? `0${index}` : index}</p>}
                    <p className="hero__title">{title}</p>
                    <p className="hero__description">{description}</p>
                    {type === "project" ? <div className="hero__stacks">
                        {screens.map((screen, index) => {
                            return <button tabIndex="0" key={index} className="hero__stack">{screen}</button>
                        })}
                    </div> : null}
                </div>
            </div>
        </section>
    );
}

export default Hero