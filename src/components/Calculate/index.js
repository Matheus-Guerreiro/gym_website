import React from 'react'

import { CalculateContainer } from './styles'
import { AiOutlineArrowRight } from 'react-icons/ai'
import IMG1 from '../../assets/calculate-img.png'


function Calculate() {

   function verificationBmi (e) {

    const calculateCm = document.getElementById('calculate-cm'),
          calculateKg = document.getElementById('calculate-kg'),
          calculateMessage = document.getElementById('calculate-message')

    e.preventDefault();

    const cm = calculateCm.value / 100,
          kg = calculateKg.value,
          bmi = Math.round(kg / (cm * cm))

          if(bmi < 18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`
          } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
          } else { 
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweigth 😔`
          }

          return(console.log(bmi))
   }
    

    return (
        <CalculateContainer>
            <section className='calculate section'>
                <div className='calculate__container container grid'>
                    <div className='calculate__content'>
                        <div className='section__titles'>
                            <h1 className='section__title-border'>CALCULATE</h1>
                            <h1 className='section__title'>YOUR BMI</h1>
                        </div>

                        <p className='calculate__description'>
                            The body mass index (BMI) calculator calculates
                            body mass index from your weight and height.
                        </p>

                        <form className='calculate__form' id='calculate-form'>
                            <div className='calculate__box'>
                                <input required type="number" placeholder='Height' className='calculate__input' id='calculate-cm'/>
                                <label htmlFor="" className='calculate__label'>cm</label>
                            </div>

                            <div className='calculate__box'>
                                <input required type="number" placeholder='Weight' className='calculate__input' id='calculate-kg'/>
                                <label htmlFor="" className='calculate__label'>kg</label>
                            </div>

                            <button onClick={verificationBmi} className='button button__flex'>
                                Calculate Now <AiOutlineArrowRight className='icon'/>
                            </button>
                        </form>

                        <p className='calculate__message' id='calculate-message'></p>
                    </div>

                    <img src={IMG1} alt='calculate' className='calculate__img'/>
                </div>
            </section>
        </CalculateContainer>
    )
}

export default Calculate