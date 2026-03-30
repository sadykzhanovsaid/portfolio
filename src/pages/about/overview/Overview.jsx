import React from "react"
import "./Overview.css"

import {useIntro} from "@/hooks/useIntro.jsx"
import {galleryData} from "@/data.jsx"

import Card from "@/pages/about/card/Card.jsx"

function Overview() {
    const {intro, toggleActive, removeActive} = useIntro()

    return (
        <section className="overview">
            <div className="container">
                <div className="overview__box">
                    <div className="intro">
                        {intro.map((intro) => {
                            return <Card
                                key={intro.id}
                                intro={intro}
                                toggleActive={toggleActive}
                                removeActive={removeActive}
                            />
                        })}
                    </div>
                    <div className="gallery">
                        {galleryData.map((photo) => {
                            return <div
                                key={photo.id}
                                className="gallery-card"
                                style={{background: `url(/gallery/${photo.urlImage}) center/cover no-repeat`}}
                            ></div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview