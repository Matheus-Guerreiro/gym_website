import React from 'react'

import IMG1 from '../../assets/logo-nav.png'
import { FooterContainer } from './styles'

function Footer() {
    return (
        <FooterContainer>
            <footer className='footer section' id='footer'>
                <div className='footer__container container grid'>
                    <div>
                        <a href='/' className='footer__logo'>
                            <img src={IMG1}/> BEROTOT
                        </a>
                    </div>
                </div>
            </footer>
        </FooterContainer>
    )
}

export default Footer