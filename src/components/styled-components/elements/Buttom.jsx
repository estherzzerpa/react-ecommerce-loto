import styled from "styled-components";
import { colors } from "../global/Styled-App";



export const Buttom = styled.button`
     
    width: ${({width})=> width };
    height: 30px;
    background-color: ${({color}) => color};
    border: none;
    color: ${colors.text};
    font-weight: bolder;
    cursor: pointer;
    transition: .5s all ease;
    &:hover{
        background-color: ${colors.btnHover};
    }
            
`