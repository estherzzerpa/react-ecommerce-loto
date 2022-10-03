import styled from "styled-components";
import { colors } from "../../styled-components/global/Styled-App";

export const WrapperMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    padding-top:70px;
    width: 100%;
    justify-content: center;
    margin: auto;
    top: 8rem;
`;

export const DivPortada = styled.div`
    width: 100%;
    min-width: 600px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    display: ${(props) => props.display};
`
export const ContainerSlogan = styled.section`
    display: flex;
    width: 100%;
    height: 300px;
    flex-direction: column;
    position: absolute;
    right: 0;
    left:0 ;
    z-index: 1;
    text-align: center;
        h2{
            color: ${colors.primary};
            font-size: 4rem;
        }   
`

export const ImgPrincipal = styled.img`
    max-width:100%;
    min-width: 600px;
    object-fit: cover;
    background-position: center;
`

export const ButtonPrincipal = styled.button`
    margin: auto;
    width: 200px;
    height: 100px;
    background-color: ${colors.text};
    position: ${(props) => props.position };
    top: 75%;
    left: 45%;
    right: 50%;
    z-index: 2;
    &.btn{
        width: 6.5em;
        height: 2.3em;
        background-color: rgb(255, 255, 255);
        color: rgb(89, 58, 43);
        border: none;
        font-size: 20px;
        cursor: pointer;
        z-index: 1;
        overflow: hidden;

        &:after{
            content: "";
            background: rgb(89, 58, 43);
            position: absolute;
            z-index: -1;
            left: -20%;
            right: -20%;
            top: 0;
            bottom:0;
            transform: skewX(-45deg) scale(0, 1);
            transition: all 0.5s ease;
            
        }

        &:hover{
            color: rgb(255, 255, 255);

            &:after{
                transform: skewX(-45deg) scale(1, 1);
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
            }
        }
    }
`


