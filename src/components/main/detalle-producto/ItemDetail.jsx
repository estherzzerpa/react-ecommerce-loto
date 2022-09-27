import React, { useState } from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { Buttom } from '../../styled-components/elements/Buttom'

const ContainerDetailCard = styled.div`
    display: flex;
    width: 80%;
    height: 90vh;
    justify-content: space-between;
`
const DetailCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 100%;
    padding: 10px;
    div{
        display: flex;
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

const ItemDetail = ({producto, setStock,  stock, count, setCount}) => {

    const [goCart, setGoCart] = useState(false)

    const onAdd = () => {
   
        setStock(stock - count)
    
        setGoCart(true)
    
        count >= producto.stock && console.log( "No hay mas stock")
    
    }

  return (

    <ContainerDetailCard>

        <CardImg>
            <img src={producto.image} alt="" />
        </CardImg>
        <DetailCard>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <h2>${producto.price}</h2>
            <p>STOCK: <strong>{stock}</strong></p>

            {
                goCart
                ? <Link to='/cart'><Buttom> Ir al carrito </Buttom></Link>
                : <ItemCount onAdd={onAdd} count={count} setCount={setCount} stock={stock} />

            }
          

        </DetailCard>
    
    </ContainerDetailCard>
  )
}

export default ItemDetail