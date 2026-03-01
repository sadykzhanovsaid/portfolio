import React from "react"
import "./Message.css"

import TelegramIcon from "@/assets/images/screens/contact/telegram.svg?react"
import LinkedInIcon from "@/assets/images/screens/contact/linkedin.svg?react"
import GithubIcon from "@/assets/images/screens/contact/github.svg?react"
import XIcon from "@/assets/images/screens/contact/x.svg?react"

function Message() {
    return (
        <section className="message">
            <div className="container">
                <div className="message__box">
                    <div className="message__form">
                        <div className="message__title">
                            <div className="message__form-icons">
                                <div className="message__form-icon"></div>
                                <div className="message__form-icon"></div>
                                <div className="message__form-icon"></div>
                            </div>

                            <p>New message</p>
                        </div>

                        <form className="message__main">
                            <div className="message__inputs">
                                <div className="message__input">
                                    <p>Email:</p>
                                    <input
                                        type="text"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="message__input">
                                    <p>Name:</p>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="message__input">
                                    <p>Subject:</p>
                                    <input
                                        type="text"
                                        placeholder="Enter subject"
                                    />
                                </div>
                            </div>

                            <div className="message__line"></div>

                            <textarea
                                className="message__textarea"
                                placeholder="Write your message here"
                            />

                            <div className="message__send-wrapper">
                                <button className="message__send">Send</button>
                            </div>
                        </form>
                    </div>

                    <div className="message__icons">
                        <div>
                            <div className="message__icon">
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