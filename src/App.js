import React from "react"
import Calculate from "./components/Calculate"
import Choose from "./components/Choose"
import Footer from "./components/Footer"
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
            <Calculate/>
            <Footer/>
        </>
    )
}

export default App