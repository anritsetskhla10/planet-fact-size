import {createGlobalStyle } from 'styled-components'




const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Antonio", sans-serif;
        text-decoration: none;
    }

    body {
        min-width: 375px;
        min-height: 100vh;
        background: url(/images/background-stars.svg), #070724;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (min-width:768px){
        
    }

    @media only screen and (min-width:1440px){
        
    }

`

export default GlobalStyle;