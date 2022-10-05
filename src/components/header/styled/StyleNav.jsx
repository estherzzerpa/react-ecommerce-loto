import styled from "styled-components";
import { colors } from "../../styled-components/global/Styled-App";

export const Logo = styled.h2`
    font-size: 20px;
    font-weight: bolder;
    color: ${colors.second};
`

export const ContainerNav = styled.div`
    display: flex;
    justify-content: center;
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 80px;
    background-color:${({color})=>color};
    position: fixed;
    align-items:center;
    justify-content: center;
    z-index: 10000;
    transition: all .5s ease-out;


    .headerOpacity{
        background-color:#502b0520 ;
    }

    .header{
        background-color: #502b05dc;
    }
`



export const UlMenu = styled.ul`
    width: 80%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    a{
        height: 80px;
        display: flex;
        align-items: center;
    }

    li{
        list-style: none;
        color: ${colors.second};
        &:hover{
        color: #dcb28beb;
        }
    }

    a:nth-child(2){
        transition: .6s all;
        ul{
            transition: 1s all;
            background-color: ${colors.primary};
            height: 100px;
            position: absolute;
            width: 100vw;
            right: 0%;
            /* top:-100%; */
            z-index:-3;
            padding-left: 200px;
            opacity: 0;
            visibility: hidden;
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            justify-content: space-evenly;
            align-items: center;

                li{
                    width: 100px;
                    height: 10%;
                }
        }

        &:hover{
            ul{
                opacity: 1;
                visibility: visible;
            }
        }
    }    
`



