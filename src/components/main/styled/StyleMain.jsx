import styled from "styled-components";
import { colors } from "../../styled-components/global/Styled-App";

// Imagen principal

export const WrapperMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    justify-content: center;
    margin: auto;
    background-color: ${colors.primary};
`;

export const DivPortada = styled.div`
    min-width: 420px;
    height: 100%;
    display: flex;
    flex-direction: column;
    display: ${(props) => props.display};
    position: relative;
    h2{
        text-align: center;
        margin-top: 100px;
        color: ${colors.primary};
        font-size: .5em;
        margin: auto;
        margin: auto;
        position: absolute;
        width: 180px;
        top: 45%;
        left: 39%;
        right: 50%;
        z-index: 2;
        @media(max-width:662px){
            left: 37%;
        }
        @media(max-width:520px){
            left: 35%;
    }
    }  
`

export const ButtonPrincipal = styled.button`
    margin: auto;
    width: 200px;
    height: 100px;
    background-color: ${colors.text};
    position:absolute;
    top: 75%;
    left: 41%;
    right: 50%;
    z-index: 2;
    &.btn{
        width: 6.5em;
        height: 2.3em;
        background-color: ${colors.primary};
        color: ${colors.text};
        border: none;
        font-size: 20px;
        cursor: pointer;
        z-index: 1;
        overflow: hidden;
        &:after{
            content: "";
            background: ${colors.second};
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
            color: ${colors.primary};

            &:after{
                transform: skewX(-45deg) scale(1, 1);
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
            }
        }
    }
`

// Detalle de producto

export const ContainerDetailCard = styled.div`
    display: flex;
    width: 100%;
    overflow-y: hidden;
    align-items: center;
    padding: 0 30px;
    @media(max-width:920px){
        padding-top: 340px;
        flex-direction: column;
        height: 120%;
        align-items: center;
    }
`
export const DetailCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 10px;
    min-width: 220px;
    div{
        display: flex;
    }

    @media(max-width:920px){
       width: 100%;
       margin-bottom: 100px;
    }
    a{
        width:100% ;
    }

`
export const CardImg = styled.div`
    width: 50%;
    text-align: center;
    img{
        width: 60%;
        min-width: 220px;
        min-height: 300px;
        height: 70%;
    }
    @media(max-width:920px){
        width: 100%;
        height: 40%;
    }    
`

// container de detalle de 

export const Container = styled.div`
    width: 100%;
    height: 120vh;
    align-items: center;
    justify-content: center;
    display: flex;    
    background-color: ${colors.primary};
    padding-bottom: 100px;
`
// item count

export const Count = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    button{
        width: 30%;
        height: 35%;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
`
// TODOS LOS PRODUCTOS

export const WrapperMainProd = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 300%;
    width: 100%;
    margin-top: 100px;

`

export const WrapperItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  margin-bottom: 100px;

`

export const PProd = styled.p`
  font-size: 30px;
  padding-top: 100px;
  font-weight: bold;
  color: ${colors.text};
  margin-top: 50px;
`

// CARDS DE LOS PRODUCTOS

export const CardProducts = styled.article`
    width: 25%; 
    min-width: 300px;
    height: 100%;
    transition: .5s all ease;
    margin: 5px;
    color: ${colors.text};

    &:hover{
        box-shadow: 1px 1px 1px 1px #c2a5968b ;

    }
`
export const Price = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    h2{
        color: ${colors.primary};
    }
    button{
        width: 100%;
        background-color: ${colors.primary};
        border: none;
        color: ${colors.text};
        font-weight: bolder;
        cursor: pointer;
        transition: .5s all ease;
        &:hover{
            background-color: ${colors.btnHover};
        }
    }
`
export const InfoCard = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    height:280px;

`
export const ImgProduct = styled.img`
    width:100%;
    min-width: 20%;
    object-fit: fill;
    cursor: pointer;
    transition: .5s all;
    
    &:hover{
        transform: scale(1.1);
    }
`