import React, { useState } from "react"

import IMGLogo from "../../assets/logo-nav.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { HeaderContainer, NavMenu } from "./styles"

function Header() {

    const [close, setClose] = useState(false);


    return (
        <HeaderContainer>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="/#" className="nav__logo">
                        <img src={IMGLogo} alt="logo" /> BEROTOT
                    </a>

                    <NavMenu isClose={close} className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a onClick={() => setClose(false)} href="#home" className="nav__link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a onClick={() => setClose(false)} href="#program" className="nav__link">Program</a>
                            </li>
                            <li className="nav__item">
                                <a onClick={() => setClose(false)} href="#choose" className="nav__link">Choose Us</a>
                            </li>
                            <li className="nav__item">
                                <a onClick={() => setClose(false)} href="#pricing" className="nav__link">Pricing</a>
                            </li>


                            <div>
                                <a href="#footer" className="button nav__button">
                                    Register Now
                                </a>
                            </div>
                        </ul>

                        <div onClick={() => setClose(false)} className="nav__close" id="nav-close">
                            <AiOutlineClose />
                        </div>
                    </NavMenu>
                    <div onClick={() => setClose(true)} className="nav__toggle" id="nav-toggle">
                        <AiOutlineMenu />
                    </div>
                </nav>
            </header>
        </HeaderContainer>)
}


export default Header