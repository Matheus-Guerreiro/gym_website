import styled from "styled-components"


export const FooterContainer = styled.div`

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

.footer__container{
    row-gap: 4rem;
    padding-top: 1rem;
}

.footer__logo,
.footer__description{
    color: hsl(180, 4%, 98%);
}

.footer__logo,
.footer__form,
.footer__social{
    display: flex;
}

.footer__logo{
    align-items: center;
    column-gap: .5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.footer__logo img{
    width: 1.5rem;
}

.footer__description{
    margin-bottom: 2rem;
}

.footer__form{
    flex-direction: column;
    gap: 1.25rem;
}

.footer__input{
    padding: 20px 56px 20px 24px;
    border: 2px solid hsl(79, 97%, 77%);
    background: transparent;
    color: hsl(180, 4%, 72%);
    outline: none;
}

.footer__content,
.footer__links,
.footer__group{
    display: grid;
}

.footer__content{
    grid-template-columns: repeat(2, max-content);
    gap: 2.5rem  3.5rem;
}

.footer__title{
    font-size: 1rem;
    margin-bottom: 1.5rem;
}

.footer__links{
    row-gap: .75rem;
}

.footer__link{
    color: hsl(180, 4%, 72%);
    transition: color .3s;
}

.footer__link:hover{
    color: hsl(79, 72%, 55%);
}

.footer__group{
    margin-top: 5rem;
    justify-items: center;
    row-gap: 2rem;
}

.footer__social{
    column-gap: 1.25rem;
}

.footer__social-link{
    display: inline-flex;
    padding: .35rem;
    background-color: hsl(79, 72%, 55%);
    border-radius: 50%;
    font-size: 1.25rem;
    color: hsl(180, 4%, 12%);
    transition: background .4s;
}

.footer__social-link:hover{
    background-color: hsl(79, 63%, 50%);
}

@media screen and (min-width: 768px){
    .footer__container{
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
  }

  .footer__content{
    grid-template-columns: repeat(3, max-content);
  }
}

@media screen and (min-width: 1023px){
    .footer{
        padding-bottom: 3rem;
    }

    .footer__form{
        flex-direction: row;
    }

    .footer__content{
        column-gap: 5rem;
    }

    .footer__group{
        margin-top: 7rem;
    }
}

`