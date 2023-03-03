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
    transition: baclground .5s;
   }
`