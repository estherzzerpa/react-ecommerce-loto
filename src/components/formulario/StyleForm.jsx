import styled from "styled-components"
import { colors } from "../styled-components/global/Styled-App"


export const Form = styled.form`
    background-color: ${colors.primary};
    
    width: 50%;
    height: 100vh;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 10px;
    align-items: center;
    label{
        font-size: 12px;
        width: 70%;
        display: flex;
        flex-direction: column;


        input{
            outline: none;
            border: none;
        }

    }
    div{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;

        input{
            width: 50px;
            margin-left: 22px;
        }
        label{
            margin: 10px;  
        }
    }

    @media(max-width:860px){
        width: 100%;
    }

`

export const DivToken = styled.div`
    text-align: center;
    color: black;
`