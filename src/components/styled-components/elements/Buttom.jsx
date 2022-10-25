import styled from "styled-components";
import { colors } from "../global/Styled-App";

export const Buttom = styled.button`
     
    width: ${({width})=> width };
    height: ${({height})=> height };
    background-color: ${({color}) => color};
    min-width: 30px;
    border: none;
    color: ${colors.primary};
    font-weight:lighter;
    cursor: pointer;
    transition: .5s all ease;
    &:hover{
        background-color: ${colors.btnHover};
        color: ${colors.text};
    }
    margin: 5px;       
`