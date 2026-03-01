import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

import Header from "./header/Header.jsx"
import Footer from "./footer/Footer.jsx"

function Layout({theme, setTheme}) {
    return (
        <>
            <Header
                theme={theme}
                setTheme={setTheme}
            />
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout