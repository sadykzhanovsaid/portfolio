import React from "react"
import "./Layout.css"

import Header from "./header/Header.jsx"
import Footer from "./footer/Footer.jsx"
import Contact from "@/screens/contact/Contact.jsx"

function Layout({theme, setTheme}) {
    return (
        <>
            <Header
                theme={theme}
                setTheme={setTheme}
            />
            <Contact/>
            <Footer/>
        </>
    );
}

export default Layout