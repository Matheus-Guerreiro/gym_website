import React from 'react'

import IMG1 from '../../assets/logo-nav.png'
import { FooterContainer } from './styles'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {

    const notify = (e) => {

        e.preventDefault()
        
        toast.success('You subscribed! 🥳', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <FooterContainer>
            <footer className='footer section' id='footer'>
                <div className='footer__container container grid'>
                    <div className='footer__list-links'>
                        <a href='/' className='footer__logo'>
                            <img src={IMG1} alt='Berotot' /> BEROTOT
                        </a>

                        <p className='footer__description'>
                            Subscribe for company <br /> updates below.
                        </p>

                        <form action='' className='footer__form' id='contact-form'>
                            <input type='email' name='user_email' placeholder='Your Email' className='footer__input' id='contact-user' />
                            <button onClick={notify} type='submit' className='button'>
                                Subscribe
                            </button>
                            <ToastContainer
                                position="top-right"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored"
                            />
                        </form>
                    </div>

                    <div className='footer__content'>
                        <div className='footer__list-links'>
                            <h3 className='footer__title'>
                                SERVICES
                            </h3>

                            <ul className='footer__links'>
                                <li>
                                    <a href='/' className='footer__link'>Flex Muscle</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Cardio Exercise</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Basic Yoga</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Weight Lifting</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__list-links'>
                            <h3 className='footer__title'>
                                PRICING
                            </h3>

                            <ul className='footer__links'>
                                <li>
                                    <a href='/' className='footer__link'>Basic</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Premium</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Diamond</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__list-links'>
                            <h3 className='footer__title'>
                                COMPANY
                            </h3>

                            <ul className='footer__links'>
                                <li>
                                    <a href='/' className='footer__link'>About Us</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Careers</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Customers</a>
                                </li>
                                <li>
                                    <a href='/' className='footer__link'>Partners</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='footer__group'>
                        <ul className='footer__social'>
                            <a href='https://www.facebook.com/' rel="noreferrer" target='_blank' className='footer__social-link'>
                                <AiFillFacebook />
                            </a>
                            <a href='https://twitter.com/' rel="noreferrer" target='_blank' className='footer__social-link'>
                                <AiOutlineTwitter />
                            </a>
                            <a href='https://www.instagram.com/' rel="noreferrer" target='_blank' className='footer__social-link'>
                                <AiOutlineInstagram />
                            </a>
                        </ul>
                    </div>
                </div>
            </footer>
        </FooterContainer>
    )
}

export default Footer