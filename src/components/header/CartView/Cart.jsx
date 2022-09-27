import React, { useState } from 'react'
import styled from 'styled-components'

const ContainerCart = styled.div`
  
  background-color: #107856;

  width: 100%;

  height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;

  font-size: 1.5rem;

  color: white;

  font-weight: bold;
`

const Cart = () => {

  console.log("hola");
  return (
    <ContainerCart>

      <p>Carrito</p>

    </ContainerCart>
  )
}

export default Cart