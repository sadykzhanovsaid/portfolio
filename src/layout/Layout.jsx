import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

import Header from "@/layout/header/Header.jsx"

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default Layout