import { createGlobalStyle } from "styled-components";

// variables colors

export const colors = {
    primary:"#f0d6c7",
    second:"#791818",
    text:"#332b25",
    btnHover:"#c77777"
}

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family:'Aboreto', 'cursive';        
    }
    body::-webkit-scrollbar{
        width:3px;
    }
    body::-webkit-scrollbar-thumb{
        background-color: ${colors.second};
    }

    a{
        text-decoration: none;
    }
   
`



