import React from 'react'

import { PricingContainer } from './styles'
import { AiOutlineCheckCircle, AiOutlineArrowRight } from 'react-icons/ai'

import IMG1 from "../../assets/pricing1.png"
import IMG2 from "../../assets/pricing2.png"
import IMG3 from "../../assets/pricing3.png"


function Pricing() {
    return (
        <PricingContainer>
            <section className='pricing section' id='pricing'>
                <div className='container'>
                    <div className='section__data'>
                        <h2 className='section__subtitle'>Pricing</h2>
                        <div className='section__titles'>
                            <h1 className='section__title-border'>OUR</h1>
                            <h1 className='section__title'>SPECIAL PLAN</h1>
                        </div>
                    </div>

                    <div className='pricing__container grid'>
                        <article className='pricing__card'>
                            <header className='pricing__header'>
                                <div className='pricing__shape'>
                                    <img src={IMG1} alt='pricing' className='pricing__img' />
                                </div>

                                <h1 className='pricing__title'>BASIC PACKAGE</h1>
                                <h2 className='pricing__number'>$120</h2>
                            </header>

                            <ul className='pricing__list'>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 5 Days In A Week
                                </li>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 01 Sweatshirt
                                </li>
                                <li className='pricing__item pricing__item-opacity'>
                                    <AiOutlineCheckCircle className='icon-item' /> 01 Bottle of Protein
                                </li>
                                <li className='pricing__item pricing__item-opacity'>
                                    <AiOutlineCheckCircle className='icon-item' /> Access to Videos
                                </li>
                                <li className='pricing__item pricing__item-opacity'>
                                    <AiOutlineCheckCircle className='icon-item' /> Muscle Stretching
                                </li>
                            </ul>

                            <a href='/#' className='button button__flex pricing__button'>Purchase Now <AiOutlineArrowRight className='icon' /></a>
                        </article>

                        <article className='pricing__card'>
                            <header className='pricing__header'>
                                <div className='pricing__shape'>
                                    <img src={IMG2} alt='pricing' className='pricing__img' />
                                </div>

                                <h1 className='pricing__title'>PREMIUM PACKAGE</h1>
                                <h2 className='pricing__number'>$240</h2>
                            </header>

                            <ul className='pricing__list'>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 5 Days In A Week
                                </li>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 01 Sweatshirt
                                </li>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 01 Bottle of Protein
                                </li>
                                <li className='pricing__item pricing__item-opacity'>
                                    <AiOutlineCheckCircle className='icon-item' /> Access to Videos
                                </li>
                                <li className='pricing__item pricing__item-opacity'>
                                    <AiOutlineCheckCircle className='icon-item' /> Muscle Stretching
                                </li>
                            </ul>

                            <a href='/#' className='button button__flex pricing__button'>Purchase Now <AiOutlineArrowRight className='icon' /></a>
                        </article>

                        <article className='pricing__card'>
                            <header className='pricing__header'>
                                <div className='pricing__shape'>
                                    <img src={IMG3} alt='pricing' className='pricing__img' />
                                </div>

                                <h1 className='pricing__title'>DIAMOND PACKAGE</h1>
                                <h2 className='pricing__number'>$420</h2>
                            </header>

                            <ul className='pricing__list'>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 5 Days In A Week
                                </li>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 01 Sweatshirt
                                </li>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> 01 Bottle of Protein
                                </li>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> Access to Videos
                                </li>
                                <li className='pricing__item'>
                                    <AiOutlineCheckCircle className='icon-item' /> Muscle Stretching
                                </li>
                            </ul>

                            <a href='/#' className='button button__flex pricing__button'>Purchase Now <AiOutlineArrowRight className='icon' /></a>
                        </article>
                    </div>
                </div>
            </section>
        </PricingContainer>
    )
}

export default Pricing