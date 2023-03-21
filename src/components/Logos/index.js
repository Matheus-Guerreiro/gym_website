import React from 'react'


import LOGO1 from "../../assets/logo1.png"
import LOGO2 from "../../assets/logo2.png"
import LOGO3 from "../../assets/logo3.png"
import LOGO4 from "../../assets/logo4.png"
import { LogosContainer } from './styles'
import ScrollReveal from 'scrollreveal'

function Logos() {

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    })

    sr.reveal('.logos__img', {interval: 100})


    return (
        <LogosContainer>
            <section className='logos section'>
                <div className='logos__container container grid'>
                    <img src={LOGO1} alt="Logo" className='logos__img' />
                    <img src={LOGO2} alt="Logo" className='logos__img' />
                    <img src={LOGO3} alt="Logo" className='logos__img' />
                    <img src={LOGO4} alt="Logo" className='logos__img' />
                </div>
            </section>
        </LogosContainer>
    )
}

export default Logos