import styled from "styled-components"

export const PricingContainer = styled.div`

.button{
    display: inline-block;
    background-color: hsl(180, 4%, 98%);
    padding: 18px 32px;
    border-radius: 2px;
    color: hsl(180, 4%, 12%);
    font-weight: 700;
    cursor: pointer;
    transition: background .3s;
}


.button:hover{
    background-color: hsl(180, 4%, 98%);
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

.pricing__container{
    grid-template-columns: 285px;
    justify-content: center;
    row-gap: 2rem;
}

.pricing__card,
.pricing__shape,
.pricing__list{
    display: grid;
}

.pricing__card{
    row-gap: 2rem;
    background-color: hsla(79, 6%, 64%, .07);
    padding: 2rem 2.5rem;
}

.pricing__img{
    width: 35px;
}

.pricing__shape{
    width: 60px;
    height: 60px;
    background-color: hsl(79, 6%, 64%);
    border-radius: 50%;
    place-items: center;
    margin-bottom: 1rem;
}

.pricing__title{
    font-size: 1rem;
    color: hsl(180, 4%, 72%);
    margin-bottom: 1rem;
}

.pricing__number{
    font-size: 1.5rem;
}

.pricing__list{
    row-gap: 1rem;
}

.pricing__item{
    display: flex;
    column-gap: .5rem;
    align-items: center;
    font-size: .813rem;
}

.icon-item{
    font-size: 1.25rem;
    color: hsl(79, 72%, 55%);
}

.pricing__item-opacity{
    opacity: .3;
}

.pricing__card-active{
    background-color: hsl(79, 72%, 55%);
    border: 2px solid hsl(79, 97%, 77%);
}

.pricing__card-active .pricing__shape{
    background-color: hsl(79, 97%, 77%);
}

.pricing__card-active .pricing__item .icon-item{
    color: hsl(180, 4%, 98%);
}

.pricing__card-active .pricing__title,
.pricing__card-active .pricing__number,
.pricing__card-active .pricing__item{
    color: hsl(180, 4%, 12%);
}

`