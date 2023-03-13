import styled from "styled-components"

export const PricingContainer = styled.div`

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

`