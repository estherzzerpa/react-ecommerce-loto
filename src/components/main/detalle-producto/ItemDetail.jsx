import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { Buttom } from '../../styled-components/elements/Buttom'
import { Context } from '../../Context/CustomContext'
import { useCartContext } from '../../header/CartView/Cart'
import { colors } from '../../styled-components/global/Styled-App'
import {ContainerDetailCard, DetailCard, CardImg  } from '../styled/StyleMain'

const ItemDetail = ({producto,count, setCount}) => {

    const [goCart, setGoCart] = useState(false)
    const { addItem} = useCartContext(Context)

    const onAdd = () => {

        addItem(producto, count)
        setGoCart(true)
        
    }

  return (

    <ContainerDetailCard>

        <CardImg>
        <h3>{producto.category}</h3>
            <img src={producto.image} alt="imagen de producto" />
        </CardImg>
        <DetailCard>
            <p>{producto.title}</p>
            <h2>${producto.price}</h2>
            <p>STOCK: <strong>{count >= producto.stock ? "No hay stock" : producto.stock }</strong></p>

            {
                goCart
                ? <Link to='/cart'><Buttom color={colors.second} width="100%"> Ir al carrito </Buttom></Link>
                : <ItemCount  onAdd={onAdd} count={count} setCount={setCount} stock={producto.stock} />

            }
        </DetailCard>
    
    </ContainerDetailCard>
  )
}

export default ItemDetail