import React, {useState} from "react"
import "./Message.css"

import MessageIdle from "@/screens/contact/messageIdle/MessageIdle.jsx"
import MessageShared from "@/shared/messageShared/MessageShared.jsx"

import TelegramIcon from "@/assets/images/screens/contact/telegram.svg?react"
import LinkedInIcon from "@/assets/images/screens/contact/linkedin.svg?react"
import GithubIcon from "@/assets/images/screens/contact/github.svg?react"
import XIcon from "@/assets/images/screens/contact/x.svg?react"

function Message() {
    const [status, setStatus] = useState(null)

    return (
        <section className="message">
            <div className="container">
                <div className="message__box">
                    {status === null ? <MessageIdle status={status} setStatus={setStatus}/> :
                        <MessageShared status={status} setStatus={setStatus}/>}

                    <div className="message__icons">
                        <div>
                            <div className="message__icon"
                                 onClick={() => setStatus(prev => prev === null ? false : null)}>
                                <TelegramIcon/>
                            </div>

                            <div className="message__icon">
                                <LinkedInIcon/>
                            </div>
                        </div>

                        <div>
                            <div className="message__icon">
                                <GithubIcon/>
                            </div>

                            <div className="message__icon">
                                <XIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Message