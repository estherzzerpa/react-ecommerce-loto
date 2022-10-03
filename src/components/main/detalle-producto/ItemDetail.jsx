import React, { useState } from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { Buttom } from '../../styled-components/elements/Buttom'
import { Context } from '../../Context/CustomContext'
import { useCartContext } from '../../header/CartView/Cart'
import { colors } from '../../styled-components/global/Styled-App'

const ContainerDetailCard = styled.div`
    display: flex;
    width: 80%;
    height: 90vh;
    justify-content: space-between;
    margin-top: 57px;
    overflow: hidden;

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
    
    const {addItem} = useCartContext(Context)

    const onAdd = () => {
   
        setStock(stock - count)
        addItem(producto, count)
        setGoCart(true)
    
        // count >= producto.stock &&  
    
    }

  return (

    <ContainerDetailCard>

        <CardImg>
            <img src={producto.image} alt="" />
        </CardImg>
        <DetailCard>
            <h2>{producto.category}</h2>
            <p>{producto.title}</p>
            <h2>${producto.price}</h2>
            <p>STOCK: <strong>{stock}</strong></p>

            {
                goCart
                ? <Link to='/cart'><Buttom color={colors.primary} width="100%"> Ir al carrito </Buttom></Link>
                : <ItemCount onAdd={onAdd} count={count} setCount={setCount} stock={stock} />

            }
          

        </DetailCard>
    
    </ContainerDetailCard>
  )
}

export default ItemDetail