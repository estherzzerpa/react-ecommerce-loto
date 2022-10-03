import React from 'react'
import bag from '../../../assets/icon/bag-white-heart.png'
import styled from 'styled-components'

import { useCartContext } from './Cart'
import { Context } from '../../Context/CustomContext'

const CartDiv = styled.div`
  
  display: flex;
  color: wheat;
`

const CartWidget = () => {

  const {totalProducts} = useCartContext(Context)

  return (
    
    <CartDiv>  

        <img src={bag} alt="bag shop" width={35} height={35} />
        <p>{totalProducts()|| ""}</p>
    </CartDiv>
  )
}

export default CartWidget
