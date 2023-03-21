import React from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai'
import IMG1 from '../../assets/home-img.png'
import { HomeContainer } from './styles'

function Home() {
    return (
        <HomeContainer>
            <section className='home section' id='home'>
                <div className='home__container container grid'>
                    <div className='home__data'>
                        <h2 className='home__subtitle'>MAKE YOUR</h2>
                        <h1 className='home__title'>BODY SHAPE</h1>
                        <p className='home__description'>
                            In here we will help you to shape and build YOUR ideal
                            body and live your life to the fullest.
                        </p>
                        <a href='/' className="button button__flex">
                             Get Started <AiOutlineArrowRight className='icon' />
                        </a>
                    </div>
                        <img src={IMG1} alt="home" className='home__img'/>

                        <div className='home__triangle home__triangle-3'></div>
                        <div className='home__triangle home__triangle-2'></div>
                        <div className='home__triangle home__triangle-1'></div>
                </div>
            </section>
        </HomeContainer>
    )
}

export default Home