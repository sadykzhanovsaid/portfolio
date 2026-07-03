import React, {useEffect, useState} from "react"
import "./Header.css"
import {Link, useLocation} from "react-router-dom"

function Header() {
    // const {pathname} = useLocation()
    // const [active, setActive] = useState("home")
    // const [hover, setHover] = useState("")
    // const isDesktop = window.matchMedia("(hover: hover)").matches
    //
    // useEffect(() => {
    //     const page =
    //         pathname === "/"
    //             ? "home"
    //             : pathname.slice(1);
    //
    //     setActive(page);
    // }, [pathname])

    return (<></>
        // <header className="header">
        //     <div className="container">
        //         <div className="header__box">
        //             <ul className="header__list">
        //                 <div className={`header__active ${hover ? `${hover}Active` : `${active}Active`}`}></div>
        //                 <Link to="/">
        //                     <li
        //                         onMouseEnter={() => setHover("home")}
        //                         onMouseLeave={() => setHover("")}
        //                         className="header__link"
        //                         style={{color: active === "home" && hover === "home" && isDesktop ? "#75757580" : "#757575"}}
        //                         onClick={() => setActive("home")}
        //                     >Home
        //                     </li>
        //                 </Link>
        //                 <Link to="/about">
        //                     <li
        //                         onMouseEnter={() => setHover("about")}
        //                         onMouseLeave={() => setHover("")}
        //                         className="header__link"
        //                         style={{color: active === "about" && hover === "about" && isDesktop ? "#75757580" : "#757575"}}
        //                         onClick={() => setActive("about")}
        //                     >About
        //                     </li>
        //                 </Link>
        //                 <Link to="/projects">
        //                     <li
        //                         onMouseEnter={() => setHover("projects")}
        //                         onMouseLeave={() => setHover("")}
        //                         className="header__link"
        //                         style={{color: active === "projects" && hover === "projects" && isDesktop ? "#75757580" : "#757575"}}
        //                         onClick={() => setActive("projects")}
        //                     >Projects
        //                     </li>
        //                 </Link>
        //                 <Link to="/connect">
        //                     <li
        //                         onMouseEnter={() => setHover("connect")}
        //                         onMouseLeave={() => setHover("")}
        //                         className="header__link"
        //                         style={{color: active === "connect" && hover === "connect" && isDesktop ? "#75757580" : "#757575"}}
        //                         onClick={() => setActive("connect")}
        //                     >Connect
        //                     </li>
        //                 </Link>
        //             </ul>
        //         </div>
        //     </div>
        // </header>
    );
}

export default Header