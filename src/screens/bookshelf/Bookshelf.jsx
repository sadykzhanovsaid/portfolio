import React from "react"
import "./Bookshelf.css"

import Hero from "@/shared/hero/Hero.jsx"

import {data} from "../../../data.jsx"

function Bookshelf() {
    return (
        <main className="bookshelf">
            <Hero title="Bookshelf" subtitle="Books and pieces of wisdom I’ve enjoyed reading."/>

            <section className="library">
                <div className="container">
                    <div className="library__box">
                        <div className="books">
                            {data.books.map(book => {
                                return (
                                    <div className="book" key={book.title}>
                                        <img src={`/books/${book.image}`} alt={book.title}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Bookshelf