import styled from "styled-components"


export const HeaderContainer = styled.div`
   
   header {
    width: 100%;
    background-color: hsl(180, 14%, 10%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: background .3s;
   }

   .nav {
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
   }

   .nav__logo,
   .nav__toggle {
    color: hsl(180, 4%, 98%);
    display: flex;
   }

   .nav__logo {
    align-items: center;
    column-gap: .5rem;
    font-weight: 700;
   }

   .nav__logo img {
    width: 1.25rem;
   }

   .nav__toggle {
    font-size: 1.25rem;
    cursor: pointer;
   }

   .nav__list {
    padding: 5rem 0 0 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
   }

   .nav__link {
    color: hsl(180, 4%, 98%);
    transition: color .3s;
   }

   .active-link{
    color: hsl(79, 72%, 55%);
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

  .nav .nav__button{
    background-color: hsl(180, 4%, 98%);
    border: none;
  }

  .nav__button:hover {
    background-color: hsl(79, 72%, 55%);
   }

   .nav__link:hover {
    color: hsl(79, 72%, 55%);
   }

   .nav__close {
    position: absolute;
    top: 1.4rem;
    right: 1.5rem;
    font-size: 1.25rem;
    color: hsl(180, 4%, 98%);
    cursor: pointer;
   }

   @media screen and (min-width: 768px){
  .nav__menu{
    width: 50%;
  }

  @media screen and (min-width: 1023px){
    .nav{
   height: calc(3.5rem + 2rem);
  }

  .nav__menu{
    width: initial;
  }

  .nav__toggle,
  .nav__close{
    display: none;
  }

  .nav__list{
    flex-direction: row;
    padding: 0;
    align-items: center;
    column-gap: 4rem;
  }
}
}

`

export const NavMenu = styled.div`

@media screen and (max-width: 1023px) {
    position: fixed;
    background-color: hsla(180, 12%, 8%, .8);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    top: 0;
    right: ${props => props.isClose ? '0' : '-100%'};
    width: 80%;
    height: 100%;
    border-left: 2px solid hsl(79, 6%, 64%);
    transition: right .3s;
}

`