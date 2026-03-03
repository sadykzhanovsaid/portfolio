import React, {useState} from "react"
import "./MessageIdle.css"
import emailjs from "@emailjs/browser"

import Button from "@/shared/button/Button.jsx"

function MessageIdle({status, setStatus}) {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target;

        let formattedValue = value;

        if (name === "name" || name === "subject" || "message") {
            formattedValue = value.charAt(0).toUpperCase() + value.slice(1)
        }

        setFormData(prev => ({
            ...prev,
            [name]: formattedValue
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (status === "loading") return;

        setStatus("loading");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                formData,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );

            setStatus("success");

            setFormData({
                email: "",
                name: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error(error);
            setStatus("error");
        }
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

                <form className="messageIdle__main" onSubmit={handleSubmit}>
                    <div className="messageIdle__inputs">
                        <div className="messageIdle__input">
                            <p>Email:</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="messageIdle__input">
                            <p>Name:</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="messageIdle__input">
                            <p>Subject:</p>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Enter subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="messageIdle__line"></div>

                    <textarea
                        className="messageIdle__textarea"
                        name="message"
                        placeholder="Write your message here"
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <div className="messageIdle__send-wrapper">
                        <Button type="submit" className="messageIdle__send" title="Send"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageIdle