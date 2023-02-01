import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root{
    --color1: #000000 ;
    --color2: #7890a8 ;
    --color3: #304878 ;
    --color4: #181848 ;
    --color5: #f0a818 ;
    --color6: #FFFFFF ;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
  }

  body{
    height: 100vh;
    background-color: var(--color2);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Barlow Condensed', sans-serif;
  }

`

export default GlobalStyles