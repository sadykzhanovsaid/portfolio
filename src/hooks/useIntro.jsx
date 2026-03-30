import React, {useState, useEffect} from "react"
import {introData} from "@/data.jsx"

export function useIntro() {
    const [intro, setIntro] = useState(() => {
        const stored = localStorage.getItem("introData")
        return stored ? JSON.parse(stored) : introData
    })

    useEffect(() => {
        localStorage.setItem("introData", JSON.stringify(intro))
    }, [intro])

    function toggleActive(id, e) {
        e.stopPropagation()
        setIntro(prev =>
            prev.map(item => ({
                ...item,
                isActive: item.id === id ? !item.isActive : false
            }))
        );
    }

    function removeActive(id) {
        setIntro(prev =>
            prev.map(item => ({
                ...item,
                isActive: item.id === id ? false : item.isActive
            }))
        )
    }

    return {intro, setIntro, toggleActive, removeActive}
}