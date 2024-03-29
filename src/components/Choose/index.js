import React from 'react'

import { ChooseLogosContainer } from './styles'
import IMG1 from "../../assets/choose-img.png"
import Fade from 'react-reveal/Fade';

function Choose() {

    return (
        <ChooseLogosContainer>
            <section className='choose section' id='choose'>
                <div className='choose__overflow'>
                    <div className='choose__container container grid'>
                        <Fade bottom>
                            <div className='choose__content'>
                                <div className='section__data'>
                                    <h2 className='section__subtitle'>Best Reason</h2>
                                    <div className='section__titles'>
                                        <h1 className='section__title-border'>WHY</h1>
                                        <h1 className='section__title'>CHOOSE US ?</h1>
                                    </div>
                                </div>

                                <p className='choose__description'>
                                    Choose your favorite class and start now. Remember the
                                    only bad workout is the one you didn't do.
                                </p>

                                <div className='choose__data'>
                                    <div className='choose__group'>
                                        <h3 className='choose__number'>200+</h3>
                                        <p className='choose__subtitle'>Total Members</p>
                                    </div>

                                    <div className='choose__group'>
                                        <h3 className='choose__number'>50+</h3>
                                        <p className='choose__subtitle'>Best trainers</p>
                                    </div>

                                    <div className='choose__group'>
                                        <h3 className='choose__number'>25+</h3>
                                        <p className='choose__subtitle'>Programs</p>
                                    </div>

                                    <div className='choose__group'>
                                        <h3 className='choose__number'>100+</h3>
                                        <p className='choose__subtitle'>Awards</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <div className='choose__images'>
                            <Fade left>
                                <img className='choose__img' src={IMG1} alt='choose' />
                            </Fade>
                            <div className='choose__triangle choose__triangle-1'></div>
                            <div className='choose__triangle choose__triangle-2'></div>
                            <div className='choose__triangle choose__triangle-3'></div>
                        </div>
                    </div>
                </div>
            </section>
        </ChooseLogosContainer>
    )
}

export default Choose