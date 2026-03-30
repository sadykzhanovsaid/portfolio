import React from "react"
import "./App.css"
import {Route, Routes} from "react-router-dom"

import Layout from "@/layout/Layout.jsx"

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<p>home</p>}/>
                    <Route path="/about" element={<p>about</p>}/>
                    <Route path="/projects" element={<p>projects</p>}/>
                    <Route path="/connect" element={<p>connect</p>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App