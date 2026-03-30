import React from "react"
import "./App.css"
import {Route, Routes} from "react-router-dom"

import Layout from "@/layout/Layout.jsx"
import Home from "@/pages/home/Home.jsx"
import About from "@/pages/about/About.jsx"
import Projects from "@/pages/projects/Projects.jsx"
import Connect from "@/pages/connect/Connect.jsx"

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/connect" element={<Connect/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App