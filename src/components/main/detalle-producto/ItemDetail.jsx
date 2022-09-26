import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styled-components/global/Styled-App'

const ContainerDetailCard = styled.div`
display: flex;
width: 80%;
margin-top: 7%;
height: 90vh;
`
const DetailCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 70%;
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

const ItemDetail = ({producto}) => {

    // agregar el counter al detail

  return (

    <ContainerDetailCard>

        <CardImg>
            <img src={producto.image} alt="" />
        </CardImg>
        <DetailCard>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <h2>${producto.price}</h2>
            <button>Añadir al carrito</button>
        </DetailCard>
    
    </ContainerDetailCard>
  )
}

export default ItemDetail