import styled from "styled-components"

export const CalculateContainer = styled.div`

.button{
    display: inline-block;
    background-color: hsl(79, 72%, 55%);
    padding: 18px 32px;
    border: 2px solid hsl(79, 97%, 77%);
    border-radius: 2px;
    color: hsl(180, 4%, 12%);
    font-weight: 700;
    cursor: pointer;
    transition: background .3s;
}


.button:hover{
    background-color: hsl(79, 67%, 52%);
}

.icon{
    font-size: 1.25rem;
    transition: transform .3s;
}

.button__flex{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: .5rem;
}

.button__flex:hover .icon{
    transform: translateX(.25rem);
}

.calculate{
    padding-bottom: 0;
}

.calculate__container{
    row-gap: 4rem;
}

.calculate__content .section__titles{
    margin-bottom: 2rem;
    text-align: center;
}

.calculate__description{
    text-align: center;
    margin-bottom: 2.5rem;
}

.calculate__form{
    display: grid;
    row-gap: 1rem;
}

.calculate__box{
    position: relative;
    border: 2px solid hsl(79, 97%, 77%);
}

.calculate__input{
    width: 100%;
    background: transparent;
    padding: 20px 56px 20px 24px;
    outline: none;
    border: none;
    color: hsl(180, 4%, 72%);
}

.calculate__input::-webkit-outer-spin-button,
.calculate__input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}

.calculate__input[type=number]{
    -moz-appearance: textfield;
}

.calculate__label{
    position: absolute;
    right: 1.5rem;
    top: 1.25rem;
    color: hsl(180, 4%, 98%);
}

.calculate__form .button{
    margin-top: 1.5rem;
}

.calculate__img{
    width: 200px;
    justify-self: center;
}

.calculate__message{
    margin-top: 2rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
}

@media screen and (min-width: 768px){
    .calculate__container{
        grid-template-columns: 1fr .8fr;
        align-items: center;
    }

    .calculate__description{
        text-align: initial;
    }

    .calculate__content{
        justify-content: initial;
    }

    .calculate__form{
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1.5rem;
    }

    .button{
        grid-column: 1 / 3;
    }
}

`