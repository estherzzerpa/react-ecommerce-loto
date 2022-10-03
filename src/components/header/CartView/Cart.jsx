import React from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/CustomContext'
import { useContext } from 'react'
import Plantilla from './PlantillaProduct'
import { Link } from 'react-router-dom'
import { Buttom } from '../../styled-components/elements/Buttom'
import { colors } from '../../styled-components/global/Styled-App'

const ContainerCart = styled.div`
  
  background-color: #eee0a9;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;

`
const StyleP = styled.p`
  color: #612a09;
`
export const useCartContext = () => useContext(Context)

const Cart = () => {

  const {cart, totalPrice} = useCartContext(Context)

  if(cart.length){

    return (
  
      <ContainerCart> 
      {
        cart.map((prod)=> <Plantilla key={prod.id} prod={prod}/> )
      }
      <StyleP>Total: ${ totalPrice() }</StyleP>
      <Buttom color={colors.primary} >Finalizar compra</Buttom>
      </ContainerCart>

    );
  }
  return (

    <ContainerCart>
      <StyleP>El Carrito de compras esta vacio</StyleP>
      <Link to='/'><Buttom color={colors.primary} width="100%"> Ir a comprar</Buttom></Link>
    </ContainerCart>
   
  )
}

export default Cart