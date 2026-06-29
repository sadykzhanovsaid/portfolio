import React from "react"
import "./Layout.css"
import {Outlet, useLocation} from "react-router-dom"

import Header from "./header/Header.jsx"

function Layout() {
    const location = useLocation()

    return (
        <>
            <Header/>

            <div key={location.pathname} className="page">
                <Outlet/>
            </div>
        </>
    );
}

export default Layout