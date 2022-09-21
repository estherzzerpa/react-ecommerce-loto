import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styled-components/global/Styled-App'

const ContainerDetailCard = styled.div`
display: flex;
width: 80%;
height: 90vh;
`

const DetailCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 100%;
    padding: 10px;

button{
    width: 90%;
    height: 50px;
    border: none;
    background-color: ${colors.primary};
    color: ${colors.text};
    cursor: pointer;
}
`
const CardImg = styled.div`
width: 40%;
padding: 10px;

img{
    width: 100%;
    min-width: 320px;
    height: 100%;
}
`

const ItemDetail = ({product}) => {

    console.log(product)
    // agregar el counter al detail

  return (


    <ContainerDetailCard>
        <CardImg>
            <img src={product.image} alt="" />
        </CardImg>
        <DetailCard>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <button>Añadir al carrito</button>
        </DetailCard>
    
    </ContainerDetailCard>
  )
}

export default ItemDetail