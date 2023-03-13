import React from "react"
import Choose from "./components/Choose"
import Header from "./components/Header"
import Home from "./components/Home"
import Logos from "./components/Logos"
import Pricing from "./components/Pricing"
import Program from "./components/Program"

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <Logos/>
            <Program/>
            <Choose/>
            <Pricing/>
        </>
    )
}

export default App