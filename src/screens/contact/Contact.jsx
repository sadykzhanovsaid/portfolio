import React from "react"
import "./Contact.css"

import Hero from "@/shared/hero/Hero.jsx"
import Message from "@/screens/contact/message/Message.jsx"

function Contact() {
    return (
        <main className="contact">
            <Hero
                title="Get in touch"
                subtitle="Let’s build something awesome."
            />
            <Message/>
        </main>
    );
}

export default Contact