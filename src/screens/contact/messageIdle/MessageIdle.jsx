import React from "react"
import "./MessageIdle.css"

import Button from "@/shared/button/Button.jsx"

function MessageIdle({status, setStatus}) {

    function toggleStatus() {
        setStatus(false)
    }

    return (
        <div className="message__wrapper">
            <div className="messageIdle">
                <div className="messageIdle__title">
                    <div className="messageIdle__form-icons">
                        <div className="messageIdle__form-icon"></div>
                        <div className="messageIdle__form-icon"></div>
                        <div className="messageIdle__form-icon"></div>
                    </div>

                    <p>New message</p>
                </div>

                <form className="messageIdle__main">
                    <div className="messageIdle__inputs">
                        <div className="messageIdle__input">
                            <p>Email:</p>
                            <input
                                type="text"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="messageIdle__input">
                            <p>Name:</p>
                            <input
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="messageIdle__input">
                            <p>Subject:</p>
                            <input
                                type="text"
                                placeholder="Enter subject"
                            />
                        </div>
                    </div>

                    <div className="messageIdle__line"></div>

                    <textarea
                        className="messageIdle__textarea"
                        placeholder="Write your message here"
                    />

                    <div className="messageIdle__send-wrapper">
                        <Button onClick={toggleStatus} className="messageIdle__send" title="Send"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageIdle