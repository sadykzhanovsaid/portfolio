import React from "react"
import "./MessageShared.css"

import SuccessIcon from "@/assets/images/screens/contact/success.svg?react"
import ErrorIcon from "@/assets/images/screens/contact/error.svg?react"
import DownIcon from "@/assets/images/screens/contact/down.svg?react"

function MessageShared({status}) {
    return (
        <div className="message__wrapper">
            <div className="messageShared">
                <div className="messageShared__status">
                    {status === "success" ? <SuccessIcon className="messageSuccess"/> : status === "error" ? <ErrorIcon className="messageError"/> : null}
                    <p className="messageShared__title">{status === "success" ? "Message Sent!" : status === "error" ? <>Cannot send message <span
                        style={{whiteSpace: 'nowrap'}}>:(</span></> : "Sending..."}</p>
                    <p className="messageShared__subtitle">{status === "success" ? "Thanks for taking the time to write me, I’ll reply to you as soon\n" +
                        "as possible." : status === "error" ? "An error occurred while sending your message, please try again later." : "Please let me know that the download is in progress"}</p>
                </div>

                <div className="messageShared__other">
                    <p className="messageShared__other-title">{status === "success" ? "In the meantime, follow me on these platforms below" : status === "error" ? "Or, try reaching out using one of the following platforms instead" : ""}</p>
                    {status === "loading" ? null : <DownIcon/>}
                </div>
            </div>
        </div>
    );
}

export default MessageShared