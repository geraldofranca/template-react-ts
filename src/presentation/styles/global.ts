import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* dark shades of primary color*/
    --clr-primary-1: hsl(185, 91%, 17%);
    --clr-primary-2: hsl(185, 84%, 25%);
    --clr-primary-3: hsl(185, 81%, 29%);
    --clr-primary-4: hsl(185, 77%, 34%);
    /* primary/main color */
    --clr-primary-5: hsl(185, 62%, 45%);
    /* lighter shades of primary color */
    --clr-primary-6: hsl(185, 57%, 50%);
    --clr-primary-7: hsl(184, 65%, 59%);
    --clr-primary-8: hsl(184, 80%, 74%);
    --clr-primary-9: hsl(185, 94%, 87%);
    --clr-primary-10: hsl(186, 100%, 94%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: #f1f5f8;
    --clr-white: #fff;
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Open Sans', sans-serif;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;

    --clr-purple: #5d1499;
    --clr-yellow: #ffcc3e;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--ff-secondary);
    background: var(--clr-grey-10);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font-family: var(--ff-primary);
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* section */
  .section {
    padding: 1rem 0;
    position: relative;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

`;
