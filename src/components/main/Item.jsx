import React from 'react'
import styled from 'styled-components'
import { colors } from '../styled-components/global/Styled-App'
import { Link } from 'react-router-dom'
import { Buttom } from '../styled-components/elements/Buttom'

const CardProducts = styled.article`
        width: 30%; 
        min-width: 300px;
        transition: .5s all ease;
        background-color: #cdae94 ;
        margin: 5px;
        color: ${colors.text};
        box-shadow: 1px 1px 4px 2px #8a6756db ;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            button{
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
            }
        }
    `
    const InfoCard = styled.div`
        width: 100%;
        overflow: hidden;
        position: relative;
        height:380px;
        background-color: beige;
        h2{
            position: absolute;
            top: 80%;
            left: 10%;
            color: ${colors.primary};
        }
    `
    const ImgProduct = styled.img`
        /* object-fit: contain; */
        width:100%;
        min-width: 20%;
        height: 100%;
        object-fit: fill;
        cursor: pointer;
        transition: .5s all;
       
        &:hover{
            transform: scale(1.1);
        }
    `

const Item = ({product}) => {

    const idString = product.id.toString()


  return (
    <CardProducts >

        <InfoCard>
            
            <ImgProduct src={product.image} alt="" />
            <h2>{product.title}</h2>

        </InfoCard>

        <div>

            <p>${product.price}</p>

            {/* LLAMAR AL CALL BACK */}

            <Link to={`/products/${idString}`}><Buttom width="100%" color={colors.primary}>Ver detalles</Buttom></Link>

        </div>
    </CardProducts>
  )
}

export default Item