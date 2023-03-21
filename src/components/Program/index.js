import React from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai'

import IMG1 from '../../assets/program1.png'
import IMG2 from '../../assets/program2.png'
import IMG3 from '../../assets/program3.png'
import IMG4 from '../../assets/program4.png'
import { ProgramContainer } from './styles'
import ScrollReveal from 'scrollreveal'

function Program() {

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    })

    sr.reveal('.program__card', {interval: 100})


    return (
        <ProgramContainer>
            <section className='program section' id='program'>
                <div className='conatiner'>
                    <div className='section__data'>
                        <h2 className='section__subtitle'>Our Program</h2>
                        <div className='section__titles'>
                            <h1 className='section__title-border'>BUILD YOUR</h1>
                            <h1 className='section__title'>BEST BODY</h1>
                        </div>
                    </div>

                    <div className='program__conatiner grid'>
                        <article className='program__card'>
                            <div className='program__shape'>
                                <img src={IMG1} alt='program' className='program__img' />
                            </div>

                            <h3 className='program__title'>Flex Muscle</h3>

                            <p className='program__description'>
                                Creating tension that's temporarily making the muscle
                                fibers smaller or contracted.
                            </p>

                            <a href='/' className='program__button'>
                                <AiOutlineArrowRight className='icon' />
                            </a>
                        </article>

                        <article className='program__card'>
                            <div className='program__shape'>
                                <img src={IMG2} alt='program' className='program__img' />
                            </div>

                            <h3 className='program__title'>Cardio Exercise</h3>

                            <p className='program__description'>
                                Exercise your heart rate up and keeps it
                                up for a prolonged period of time.
                            </p>

                            <a href='/' className='program__button'>
                                <AiOutlineArrowRight className='icon' />
                            </a>
                        </article>

                        <article className='program__card'>
                            <div className='program__shape'>
                                <img src={IMG3} alt='program' className='program__img' />
                            </div>

                            <h3 className='program__title'>Basic Yoga</h3>

                            <p className='program__description'>
                                Diaphragmatic this is the most common breathing
                                technique you'll find in yoga.
                            </p>

                            <a href='/' className='program__button'>
                                <AiOutlineArrowRight className='icon' />
                            </a>
                        </article>

                        <article className='program__card'>
                            <div className='program__shape'>
                                <img src={IMG4} alt='program' className='program__img' />
                            </div>

                            <h3 className='program__title'>Weight Lifting</h3>

                            <p className='program__description'>
                                Attempts a maximum weight single lift of a
                                barbell loaded with weight plates.
                            </p>

                            <a href='/' className='program__button'>
                                <AiOutlineArrowRight className='icon' />
                            </a>
                        </article>
                    </div>
                </div>
            </section>
        </ProgramContainer>
    )
}

export default Program