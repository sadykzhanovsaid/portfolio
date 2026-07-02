import React, {useState} from "react"
import "./Quiz.css"
import "./QuizCard.css"

import Arrow from "../../../assets/arrow.svg?react"
import Link from "../../../components/link/Link.jsx"

function Quiz() {
    const [active, setActive] = useState(null)

    return (
        <section className="quiz">
            <div className="container">
                <div className="quiz__box">
                    <div
                        className={`quiz__card ${active === 1 ? "active" : ""}`}
                        onClick={() => setActive(active !== 1 ? 1 : null)}
                    >
                        <Link active={active} index={1}/>

                        <p className="quiz__card-type">About me</p>

                        <div className="quiz__card-content">
                            <p className={`quiz__card-title ${active === 1 ? "active" : ""}`}>Designing with purpose and
                                creativity.</p>

                            <p className={`quiz__card-description ${active === 1 ? "active" : ""}`}>Hi! I’m Phoenix
                                Baker, a UI/UX and graphic designer dedicated to crafting meaningful, engaging digital
                                experiences.</p>
                        </div>
                    </div>

                    <div
                        className={`quiz__card ${active === 2 ? "active" : ""}`}
                        onClick={() => setActive(active !== 2 ? 2 : null)}
                    >
                        <Link active={active} index={2}/>

                        <p className="quiz__card-type">What I Do</p>

                        <div className="quiz__card-content">
                            <p className={`quiz__card-title ${active === 2 ? "active" : ""}`}>Crafting intuitive and
                                captivating designs.</p>

                            <p className={`quiz__card-description ${active === 2 ? "active" : ""}`}>As a UI/UX designer,
                                I create engaging digital experiences. My work includes mobile and web interfaces,
                                focusing on user-centric design.</p>
                        </div>
                    </div>

                    <div
                        className={`quiz__card ${active === 3 ? "active" : ""}`}
                        onClick={() => setActive(active !== 3 ? 3 : null)}
                    >
                        <Link active={active} index={3}/>

                        <p className="quiz__card-type">WHERE I AM FROM</p>

                        <div className="quiz__card-content">
                            <p className={`quiz__card-title ${active === 3 ? "active" : ""}`}>Based in London, designing
                                inspirations.</p>

                            <p className={`quiz__card-description ${active === 3 ? "active" : ""}`}>I'm from London, a
                                city that inspires my creativity with its culture and vibe. Growing up here shaped my
                                design approach, focusing on accessibility.</p>
                        </div>
                    </div>

                    <div
                        className={`quiz__card ${active === 4 ? "active" : ""}`}
                        onClick={() => setActive(active !== 4 ? 4 : null)}
                    >
                        <Link active={active} index={4}/>

                        <p className="quiz__card-type">My Design Philosophy</p>

                        <div className="quiz__card-content">
                            <p className={`quiz__card-title ${active === 4 ? "active" : ""}`}>User-centered,
                                solution-driven.</p>

                            <p className={`quiz__card-description ${active === 4 ? "active" : ""}`}>My design process
                                combines research and creativity. I aim to understand user needs, balancing function and
                                aesthetics.</p>
                        </div>
                    </div>

                    <div
                        className={`quiz__card ${active === 5 ? "active" : ""}`}
                        onClick={() => setActive(active !== 5 ? 5 : null)}
                    >
                        <Link active={active} index={5}/>

                        <p className="quiz__card-type">Outside the Office</p>

                        <div className="quiz__card-content">
                            <p className={`quiz__card-title ${active === 5 ? "active" : ""}`}>Fueling creativity with
                                hobbies I love.</p>

                            <p className={`quiz__card-description ${active === 5 ? "active" : ""}`}>Outside of work, I
                                enjoy cooking, crafting, and gaming. These hobbies inspire my designs and fuel my
                                creativity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Quiz