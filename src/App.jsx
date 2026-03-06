import {useState, useEffect} from "react"
import "./assets/styles/App.css"
import {Route, Routes} from "react-router-dom"

import Layout from "@/layout/Layout.jsx"
import Contact from "@/screens/contact/Contact.jsx"
import TechStack from "@/screens/techStack/TechStack.jsx"
import Bookshelf from "@/screens/bookshelf/Bookshelf.jsx"
import About from "@/screens/about/About.jsx"

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
                    <Route path="/tech-stack" element={<TechStack/>}/>
                    <Route path="/bookshelf" element={<Bookshelf/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<p>404</p>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App