import React from "react"
import "./Gallery.css"

function Gallery() {
    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery__box">
                    <div className="gallery__card"></div>
                    <div className="gallery__card"></div>
                    <div className="gallery__card"></div>
                </div>
            </div>
        </section>
    );
}

export default Gallery