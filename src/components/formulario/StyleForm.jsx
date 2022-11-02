import styled from "styled-components"
import { colors } from "../styled-components/global/Styled-App"

export const Form = styled.form`
    background-color:${colors.primary};
    width: 50%;
    height: 100vh;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 50px;
    align-items: center;
    box-shadow: 2px -3px 6px -1px #ad7a7692;
    @media(max-width:838px){
        box-shadow: 2px 2px 3px 2px #ad7a7692;

    }
    label{
        font-size: 12px;
        width: 70%;
        display: flex;
        flex-direction: column;
        input{
            outline: none;
            border: none;
            background-color: ${colors.primary};
            border-bottom: 2px solid ${colors.btnHover};
            color: ${colors.btnHover};
            padding: 4px;
            &::placeholder { color:${colors.btnHover}}

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
    background-color: #ec3535;
    color: ${colors.primary};
    height: 50px;
    p{
        font-size: 60%;
    }

`

export const DivToken = styled.div`
    text-align: center;
    padding:0 40px;
    color:${colors.text};
    h1{
        font-size: 1.4rem;
    }
    p{
        font-size: 1rem;
    }
`