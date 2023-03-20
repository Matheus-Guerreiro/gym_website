import styled from "styled-components"

export const LogosContainer = styled.div`

.logos__container{
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding-left: 2.5rem;
}

.logos__img{
    width: 120px;
}

@media screen and (min-width: 768px){

.logos__container{
    grid-template-columns: repeat(4, 1fr);
}
}

`