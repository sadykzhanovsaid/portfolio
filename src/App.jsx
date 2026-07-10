import React from "react"
import "./App.css"
import {Routes, Route} from "react-router-dom"

import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Projects from "./pages/projects/Projects.jsx"
import Project from "./pages/project/Project.jsx"
import Connect from "./pages/connect/Connect.jsx"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/:title" element={<Project/>}/>
                    <Route path="/connect" element={<Connect/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App