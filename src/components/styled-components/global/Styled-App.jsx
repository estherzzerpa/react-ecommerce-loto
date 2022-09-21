import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body{
        /* padding: 0;
        margin: 0; */
        box-sizing: border-box;
        font-family:'Aboreto', 'cursive';
    }

    body::-webkit-scrollbar{
        width: 0;
    }

    a{
        text-decoration: none;
    }
    li{
        list-style: none;
        color: wheat;
        &:hover{
        color: #cf6f08ef;
        }
    }
`

export const colors = {
    primary:"#54280f",
    second:"#cf6f08ef",
    text:"#ffff",
    btnHover:"#6b4423"
}

