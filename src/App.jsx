import {useState, useEffect} from "react"
import "./assets/styles/App.css"

import Layout from "@/layout/Layout.jsx"


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
        <div className="App">
            <Layout
                theme={theme}
                setTheme={setTheme}
            />
        </div>
    )
}

export default App