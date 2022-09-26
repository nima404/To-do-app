import { useEffect, useState } from "react";

export function getTheme() {
    const [theme, setTheme] = useState("")



    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            const useMyTheme = e.matchMedia ? "dark" : "light"
        })

        return (
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {
                const useMyTheme = e.matchMedia ? "dark" : "light"
            })
        )
    }, [])


    function Toggle() {

    }

    return [theme, Toggle]
}