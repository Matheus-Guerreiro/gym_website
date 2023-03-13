import styled from "styled-components"

export const ProgramContainer = styled.div`
   .program__conatiner{
    grid-template-columns: 225px;
    justify-content: center;
    row-gap: 2rem;
   }

   .program__card{
    display: grid;
    background-color: hsla(79, 6%, 64%, .07);
    padding: 1.5rem 2rem;
    border: 2px solid transparent;
    transition: background .5s, border .4s;
   }

   .program__img{
    width: 38px;
   }

   .program__shape{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: hsl(79, 6%, 64%);
    display: grid;
    place-items: center;
    margin-bottom: 1rem;
    transition: background .5s;
   }

   .program__title{
      font-size: 1rem;
      margin-bottom: 1rem;
   }

   .program__description{
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: .3px;
      line-height: 150%;
   }

   .program__title,
   .program__description{
      transition: color .5s;
   }

   .program__button{
      justify-self: flex-end;
      margin-top: 1.5rem;
      font-size: 1.25rem;
      opacity: 0;
      transition: opacity .4s;
   }

   .icon{
      display: block;
      color: hsl(180, 4%, 12%);
      transition: transform .3s;
   }

   .icon:hover{
      transform: translateX(.25rem);
   }

   .program__card:hover {
      background-color: hsl(79, 72%, 55%);
      border: 2px solid hsl(79, 97%, 77%);
   }

   .program__card:hover .program__shape{
      background-color: hsl(79, 97%, 77%);
   }

   .program__card:hover .program__title,
   .program__card:hover .program__description{
      color: hsl(180, 4%, 12%);
   }

   .program__card:hover .program__button{
      opacity: 1;
   }
`