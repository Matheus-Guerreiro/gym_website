import styled from "styled-components"

export const ChooseLogosContainer = styled.div`

.choose{
    padding-bottom: 0;
}

.choose__overflow{
    position: relative;
}

.choose__container{
    row-gap: 3rem;
}

.choose__content .section__data{
    margin-bottom: 2rem;
}

.choose__description{
    text-align: center;
    margin-bottom: 2.5rem;
}

.choose__data{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
}

.choose__group{
    text-align: center;
}

.choose__number{
    font-size: 1.5rem;
    font-family: 'Kaushan Script', cursive;
    font-weight: 400;
    margin-bottom: .25rem;
}

.choose__subtitle{
    font-size: .813rem;
}

.choose__triangle{
    height: 325px;
    position: absolute;
    left: 0;
    bottom: 0;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
}

.choose__triangle-1{
    width: 305px;
    background-color: hsl(79, 72%, 55%);
}

.choose__triangle-2{
    width: 205px;
    background-color: hsl(79, 50%, 52%);
}

.choose__triangle-3{
    width: 105px;
    background-color: hsl(79, 63%, 43%);
}

.choose__img{
    width: 260px;
    display: block;
    position: relative;
    z-index: 1;
    margin: 0 auto;
}

@media screen and (min-width: 768px){
    .choose__container{
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .choose__content, .choose__description{
        text-align: initial;
    }

    .choose__content{
        order: 1;
        justify-content: initial;
    }

    .choose__data{
        justify-content: flex-start;
    }
}

@media screen and (min-width: 1023px){
    .choose__overflow{
        overflow: hidden;
    }

    .choose__img{
        width: 351px;
    }

    .choose__triangle{
        height: 700px;
    }

    .choose__triangle-1{
        width: 545px;
    }

    .choose__triangle-2{
        width: 345px;
    }

    .choose__triangle-3{
        width: 145px;
    }
}

@media screen and (min-width: 1150px){
    .choose__container{
        column-gap: 8rem;
    }

    .choose__img{
        width: 450px;
        margin: 0 0 0 auto;
    }

    .choose__triangle{
        height: 800px;
    }
    
    .choose__description{
        width: 418px;
        margin-bottom: 3.5rem;
    }
}

`