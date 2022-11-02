import styled from "styled-components";
import { colors } from "../../styled-components/global/Styled-App";

export const Logo = styled.h2`
  font-size: 20px;
  font-weight: bolder;
  color: ${colors.text};
`

export const ContainerNav = styled.div`
  display: flex;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: ${(height)=> height};
  background-color:${({color})=> color};
  position: fixed;
  align-items:center;
  justify-content: center;
  justify-content: space-evenly;
  z-index: 10000;
  transition: all .5s ease-out;
  @media(max-width:920px){
    padding-top: 10px;
  }
`

export const UlMenu = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    .links{
        width: 80%;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        transition: all.5s ease-in-out;
        .active{
            border-bottom: 2px solid #20150beb;
        }
        a{
            display: flex;
            align-items: center;
        }

        li{
            list-style: none;
            width: 100%;
            color: ${colors.text};
            display: block;
            &:hover{
            color: ${colors.second};
            }
        }
        @media(max-width:920px){    
            transform: translateY(100%);
            width: 100%;
            position: absolute;
            opacity: 0;
            flex-direction: column;
            background-color: ${colors.primary} ;
            height: 100vh;
            justify-content:start;
            gap: 2rem;
            align-items: center;
            li{
            
                padding-top: 10px;
                font-size:1.5rem;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content:center;
                transition: all.5s ease-in-out;

                &:hover{
                    font-size:30px;
                }
            }

            .active{
                border-bottom: none;
            }
            
            a{
                display: flex;
                align-items: center;
            }
        }
    }

    .links.menuActivo{
      transform: translateY(37%);
      opacity: 1;
    }
    /* a:nth-child(2){
        transition: .6s all;
        ul{
            transition: 1s all;
            background-color: ${colors.primary};
            height: 100px;
            position: absolute;
            width: 100vw;
            right: 0%;
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
    }     */
`
// Plantilla de producto

export const PlantillaProduct = styled.div`
  width: 80%;
  height: 120px;
  margin: auto;
  box-shadow: 1px 1px  4px 1px #d0a59476;
  display: flex;
  padding: 5px;
  align-items: center;
  overflow: hidden;
  color: black;
  img{
    width: 90px;
    margin: auto;
  }
  p{
    font-size: 11px;
    margin: 0;
  }
`

export const  Div = styled.div`
  padding-top: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  margin-left: 30px;
  height: 100%;
`

// CART

export const ContainerCart = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: ${(direction)=> direction && "column"} ;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
  color: ${colors.text};
  font-weight: bold;
  a{
    width: 50%;
  }
`

export const ContainerCart2 = styled.div`
  background-color:${colors.primary};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${colors.text};
  font-weight: bold;
  @media(max-width:860px){
    flex-direction: column;
  }
`

export  const ContainerProduct = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${colors.primary};
 `

export const DivScroll = styled.div`
  overflow-x: hidden;
  height: 50%;
  width: 100%;

  overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 4px;
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${colors.text};
    }

 `
export const StyleP = styled.p`
  color: ${colors.text};
`


