import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
  
 font-family: 'Red Hat Display', sans-serif;

 :root {
  --header-height: 3.5rem;
  

  --first-color: hsl(79, 72%, 55%);
  --first-color-light: hsl(79, 97%, 77%);
  --first-color-alt: hsl(79, 67%, 52%);
  --first-color-dark: hsl(79, 63%, 50%);
  --first-color-gray: hsl(79, 6%, 64%);
  --title-color: hsl(180, 4%, 98%);
  --title-color-black: hsl(180, 4%, 12%);
  --text-color: hsl(180, 4%, 72%);
  --text-color-light: hsl(180, 4%, 65%);
  --body-color: hsl(180, 12%, 8%);


  --body-font: 'Red Hat Display', sans-serif;
  --second-font: 'Kaushan Script', cursive;
  --biggest-font-size: 2rem;
  --bigger-font-size: 1.5rem;
  --big-font-size: 1.25rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;

  
  --font-bold: 700;
  --font-black: 900;

  
  --z-tooltip: 10;
  --z-fixed: 100;

}

::-webkit-scrollbar{
  width: .6rem;
  border-radius: .5rem;
  background-color: hsl(79, 4%, 15%);
}

::-webkit-scrollbar-thumb{
  background-color: hsl(79, 4%, 45%);
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover{
  background-color: hsl(79, 67%, 42%);
}


@media screen and (min-width: 1024px) {
  :root {
    --biggest-font-size: 6rem;
    --bigger-font-size: 3.5rem;
    --big-font-size: 2.75rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body,
button,
input {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

body {
  background-color: var(--body-color);
  color: var(--text-color);
}

h1, h2, h3 {
  color: var(--title-color);
  font-weight: var(--font-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}


.container {
  max-width: 1124px;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.section {
  padding: 4.5rem 0 2rem;
}

.section__data {
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
  text-align: center;
  margin-bottom: 3rem;
}

.section__title, 
.section__title-border {
  font-size: var(--big-font-size);
  letter-spacing: 1.5px;
}

.section__subtitle {
  font-size: var(--h2-font-size);
  font-family: var(--second-font);
  font-weight: 400;
  letter-spacing: 1.5px;
  color: var(--first-color);
  transform: rotate(-2deg);
}

.section__titles {
  display: flex;
  column-gap: .75rem;
  justify-content: center;
}

.section__title-border {
  -webkit-text-stroke: 1px var(--text-color);
  color: transparent;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.main {
  overflow: hidden; 
}

.color-red {
  color: hsl(0, 80%, 64%);
}

.color-green {
  color: var(--first-color);
}


@media screen and (min-width: 768px){
    .section__data{
      text-align: initial;
    }

    .section__titles{
      justify-content: initial;
    }
}

@media screen and (min-width: 1023px){
  .section{
    padding: 7rem 0 0;
  }

  .section__data{
    text-align: center;
  }

  .section__titles{
    justify-content: center;
  }
}

@media screen and (min-width: 1150px){

  .section{
    overflow: hidden;
  }

  .section__subtitle{
    font-size: 2rem;
  }

  .container{
    margin-left: auto;
    margin-right: auto;
  }
}


`