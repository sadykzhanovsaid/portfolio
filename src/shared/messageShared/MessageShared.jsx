import React from "react"
import "./MessageShared.css"

import SuccessIcon from "@/assets/images/screens/contact/success.svg?react"
import ErrorIcon from "@/assets/images/screens/contact/error.svg?react"
import DownIcon from "@/assets/images/screens/contact/down.svg?react"

function MessageShared({status, setStatus}) {
    return (
        <div className="message__wrapper">
            <div className="messageShared" onClick={() => setStatus(null)}>
                <div className="messageShared__status">
                    {status ? <SuccessIcon className="messageSuccess"/> : <ErrorIcon className="messageError"/>}
                    <p className="messageShared__title">{status ? "Message Sent!" : <>Cannot send message <span
                        style={{whiteSpace: 'nowrap'}}>:(</span></>}</p>
                    <p className="messageShared__subtitle">{status ? "Thanks for taking the time to write me, I’ll reply to you as soon\n" +
                        "as possible." : "An error occurred while sending your message, please try again later."}</p>
                </div>

                <div className="messageShared__other">
                    <p className="messageShared__other-title">{status ? "In the meantime, follow me on these platforms below" : "Or, try reaching out using one of the following platforms instead"}</p>
                    <DownIcon/>
                </div>
            </div>
        </div>
    );
}

export default MessageShared