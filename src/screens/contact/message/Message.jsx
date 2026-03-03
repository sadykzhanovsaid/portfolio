import React, {useState} from "react"
import "./Message.css"

import MessageIdle from "@/screens/contact/messageIdle/MessageIdle.jsx"
import MessageShared from "@/shared/messageShared/MessageShared.jsx"

import TelegramIcon from "@/assets/images/screens/contact/telegram.svg?react"
import LinkedInIcon from "@/assets/images/screens/contact/linkedin.svg?react"
import GithubIcon from "@/assets/images/screens/contact/github.svg?react"

function Message() {
    const [status, setStatus] = useState("idle")

    return (
        <section className="message">
            <div className="container">
                <div className="message__box">
                    {status === "idle" ? <MessageIdle status={status} setStatus={setStatus}/> :
                        <MessageShared status={status}/>}

                    <div className="message__icons">
                        <div>
                            <a target="_blank" href="https://t.me/sadykzhanovsaid" className="message__icon">
                                <TelegramIcon/>
                            </a>

                            <a target="_blank" href="linkedin.com/in/said-sadykzhanov-b99235399" className="message__icon">
                                <LinkedInIcon/>
                            </a>
                        </div>

                        <div>
                            <a target="_blank" href="https://github.com/sadykzhanovsaid" className="message__icon">
                                <GithubIcon/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Message