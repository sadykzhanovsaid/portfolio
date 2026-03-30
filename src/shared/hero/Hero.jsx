import React from "react"
import "./Hero.css"

function Hero({
                  urlImage,
                  altImage,
                  title,
                  subtitle,
                  stack = []
              }) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    {typeof urlImage === "string" ? <img className="hero__image" src={urlImage} alt={altImage}/> :
                        <p className="hero__count">{`0${urlImage}`}</p>}
                    <h1 className="hero__title">{title}</h1>
                    <p className="hero__subtitle">{subtitle}</p>
                    <div className="hero__stacks">
                        {stack !== [] ? stack.map((stack) => {
                            return <button key={Math.random()} className="hero__stack">{stack}</button>
                        }) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero