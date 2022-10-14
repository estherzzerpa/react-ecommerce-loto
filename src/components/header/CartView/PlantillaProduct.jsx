import React from 'react'


import styled from 'styled-components'
import { Context } from '../../Context/CustomContext'

import { Buttom } from '../../styled-components/elements/Buttom'
import { useCartContext } from './Cart'


const PlantillaProduct = styled.div`
  
  width: 500px;
  overflow: hidden;
  margin: 10px;
  background-color: #fae1c7;
  height: 120px;
  box-shadow: 1px 1px  10px 3px  #34231c92;
  display: flex;
  padding: 5px;
  align-items: center;
  color: black;

  img{
    width: 80px;
    border-radius: 10%;
  }
  p{
    font-size: 11px;
    margin: 0;
  }

`

const  Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 60%;
    margin-left: 30px;
    height: 100%;
`


const Plantilla = ({prod}) => {
  const { removeItem, clear} = useCartContext(Context)

  return (
    <>

      <PlantillaProduct>
        <img src={prod.image} alt="" />
        <Div>
          <p> Producto:{prod.title} </p>
          <p>Cantidad:{prod.cantidad}</p>
          <p>Precio: ${prod.price}</p>

          <p>Precio total: ${prod.cantidad * prod.price}</p>
        </Div>
     
          
        <Buttom onClick={()=>removeItem(prod.id)} color="red" width={"10%"}>X</Buttom>
        <Buttom onClick={clear} color="blue" width={"10%"}>Clear</Buttom>
          
      </PlantillaProduct >
    </>
  )
}

export default Plantilla