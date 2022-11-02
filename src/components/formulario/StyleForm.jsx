import styled from "styled-components"
import { colors } from "../styled-components/global/Styled-App"


export const Form = styled.form`
    background-color:${colors.btnHover};
    width: 50%;
    height: 100vh;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 50px;
    align-items: center;
    label{
        font-size: 12px;
        width: 70%;
        display: flex;
        flex-direction: column;
        input{
            outline: none;
            border: none;
            background-color: ${colors.btnHover};
            border-bottom: 2px solid ${colors.second};
            color: ${colors.primary};
            padding: 4px;
            &::placeholder { color:${colors.primary}}

        }
    }
    div{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        input{
            width: 52px;
            margin: auto;
            padding: 3px;
        }
        label{
            margin: 10px;  
        }
    }

    @media(max-width:860px){
        width: 100%;
    }

`

export const MensajeError = styled.div`
    background-color: red;
    color: white;
    height: 50px;
    p{
        font-size: 60%;
    }

`

export const DivToken = styled.div`
    text-align: center;
    color: black;
`