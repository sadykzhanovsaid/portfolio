import React, {useState} from "react"
import "./Links.css"
import "./LinksCard.css"

import Link from "../../../components/link/Link.jsx"

import Email from "/public/connect/email.svg?react"
import EmailIcon from "/public/connect/emailIcon.svg?react"
import Message from "/public/connect/message.svg?react"
import MessageIcon from "/public/connect/messageIcon.svg?react"
import Linkedin from "/public/connect/linkedin.svg?react"
import LinkedinIcon from "/public/connect/linkedinIcon.svg?react"
import Telegram from "/public/connect/telegram.svg?react"
import TelegramIcon from "/public/connect/telegramIcon.svg?react"

function Links() {
    const [active, setActive] = useState(null)
    const [hover, setHover] = useState(null)

    function toggleActive(id) {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return;
        }

        setActive((active === id ? null : id))
    }

    return (
        <section className="links">
            <div className="container">
                <div className="links__box">
                    <div
                        className={`links__card email ${active === 1 ? "active" : ""}`}
                        onClick={() => toggleActive(1)}
                        onMouseEnter={() => setHover(1)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <Link active={active} index={1} className="links" hover={hover}/>

                        <p className={`links__card-title ${active === 1 ? "active" : ""}`}>Reach out to me via email for
                            inquiries or collaborations.</p>

                        <div className="links__card-content">
                            <div className={`links__card-image ${active === 1 ? "active" : ""}`}>
                                <Email/>
                            </div>

                            <a target="_blank" href="mailto:saidsadykzhanov1@gmail.com" className={`links__card-button ${active === 1 ? "active" : ""}`}>
                                <EmailIcon/>
                                Email Me
                            </a>
                        </div>
                    </div>

                    <div
                        className={`links__card message ${active === 2 ? "active" : ""}`}
                        onClick={() => toggleActive(2)}
                        onMouseEnter={() => setHover(2)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <Link active={active} index={2} className="links" hover={hover}/>

                        <p className={`links__card-title ${active === 2 ? "active" : ""}`}>Send a message, and let’s
                            start a conversation!</p>

                        <div className="links__card-content">
                            <div className={`links__card-image ${active === 2 ? "active" : ""}`}>
                                <Message/>
                            </div>

                            <a href="tel:+996708882668" className={`links__card-button ${active === 2 ? "active" : ""}`}>
                                <MessageIcon/>
                                Send a Message
                            </a>
                        </div>
                    </div>

                    <div
                        className={`links__card linkedin ${active === 3 ? "active" : ""}`}
                        onClick={() => toggleActive(3)}
                        onMouseEnter={() => setHover(3)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <Link active={active} index={3} className="links" hover={hover}/>

                        <div className="links__card-content">
                            <div className={`links__card-image ${active === 3 ? "active" : ""}`}>
                                <Linkedin/>
                            </div>

                            <a target="_blank" href="https://www.linkedin.com/in/said-sadykzhanov-b99235399/" className={`links__card-button ${active === 3 ? "active" : ""}`}>
                                <LinkedinIcon/>
                                Let’s Connect
                            </a>
                        </div>

                        <p className={`links__card-title ${active === 3 ? "active" : ""}`}>Connect with me
                            professionally on LinkedIn.</p>
                    </div>

                    <div
                        className={`links__card telegram ${active === 4 ? "active" : ""}`}
                        onClick={() => toggleActive(4)}
                        onMouseEnter={() => setHover(4)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <Link active={active} index={4} className="links" hover={hover}/>

                        <div className="links__card-content">
                            <div className={`links__card-image ${active === 4 ? "active" : ""}`}>
                                <Telegram/>
                            </div>

                            <a target="_blank" href="https://t.me/sadykzhanovsaid" className={`links__card-button ${active === 4 ? "active" : ""}`}>
                                <TelegramIcon/>
                                Chat on Telegram
                            </a>
                        </div>

                        <p className={`links__card-title ${active === 4 ? "active" : ""}`}>Chat with me on Telegram for a quick response.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Links