import styled from "styled-components"


export const HomeContainer = styled.div`

.home{
    position: relative;
    padding-bottom: 0;
}

.home__container{
    padding-top: 4rem;
    row-gap: 3rem;
}

.home__data{
    text-align: center;
}

.home__subtitle{
    font-size: 1.5rem;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: hsl(180, 4%, 98%);
}

.home__title{
    font-size: 1.5rem;
    font-weight: 900;
    margin: .5rem 0;
}

.home__subtitle,
.home__title{
    letter-spacing: 1.5px;
}

.home__description{
    margin-bottom: 2.5rem;
}


.home__triangle{
    height: 325px;
    position: absolute;
    right: 0;
    bottom: 0;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.home__triangle-1{
    width: 105px;
    background-color: hsl(79, 72%, 55%);
}

.home__triangle-2{
    width: 205px;
    background-color: hsl(79, 67%, 52%);
}

.home__triangle-3{
    width: 305px;
    background-color: hsl(79, 63%, 50%);
}

.home__img{
    display: block;
    position: relative;
    z-index: 1;
    width: 350px;
    margin: 0 auto;
}

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

@media screen and (min-width: 768px){

  .home__container{
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .home__data{
    text-align: initial;
  }
}

`