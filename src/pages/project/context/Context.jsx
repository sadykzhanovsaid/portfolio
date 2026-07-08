import React from "react"
import "./Context.css"

function Context({context, projectImages}) {
    return (
        <section className="context">
            <div className="container">
                <div className="context__box">
                    <p className="context__title"><span>Context</span> <br/> {context[0]}</p>
                    <p className="context__title">{context[1]}</p>
                    <p className="context__title">{context[2]}</p>
                </div>
            </div>
        </section>
    );
}

export default Context