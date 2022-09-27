import styled from "styled-components";
import { colors } from "../global/Styled-App";



export const Buttom = styled.button`
     
    width: 100%;
    height: 30px;
    background-color: ${colors.primary};
    border: none;
    color: ${colors.text};
    font-weight: bolder;
    cursor: pointer;
    transition: .5s all ease;
    &:hover{
        background-color: ${colors.btnHover};
    }
            
`