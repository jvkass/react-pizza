import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --background:#FFFFFF;
    }
 
    #root {
     max-width: 1080px;
     margin: 0 auto;
     padding: 2.0rem 1rem;
     color: #333333;
    }
    * {
        margin:0;
        padding:0; 
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
    }

    body, input, textarea, select, button {
        font: 400 1.3rem "Arial", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
     color: inherit;
     text-decoration: none;
    }
`;
