import {useState, useEffect} from "react"
import "./assets/styles/App.css"

import Header from "./layout/header/Header.jsx"
import Home from "@/screens/home/Home.jsx"


function App() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme")
        return saved !== null ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches
    })

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
        document.documentElement.setAttribute(
            "data-theme",
            theme ? "dark" : "light"
        )
    }, [theme])

    return (
        <>
            <Header theme={theme} setTheme={setTheme}/>
            <Home/>
        </>
    )
}

export default App