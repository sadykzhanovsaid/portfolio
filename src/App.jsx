import {useState, useEffect} from "react"
import "./assets/styles/App.css"
import {Route, Routes} from "react-router-dom"

import Layout from "@/layout/Layout.jsx"
import Contact from "@/screens/contact/Contact.jsx"


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
            <Routes>
                <Route path="/" element={<Layout
                    theme={theme} setTheme={setTheme}
                />}>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App