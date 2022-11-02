import React from 'react'
import { Context } from '../../Context/CustomContext'
import { useContext } from 'react'
import Plantilla from './PlantillaProduct'
import { Link } from 'react-router-dom'
import { Buttom } from '../../styled-components/elements/Buttom'
import { colors } from '../../styled-components/global/Styled-App'
import Formulario from '../../formulario/Formulario'
import { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { DivToken } from '../../formulario/StyleForm'
import { ContainerCart, ContainerCart2, ContainerProduct, DivScroll, StyleP } from '../styled/StyleNav'


export const useCartContext = () => useContext(Context)

const Cart = () => {

  const [pay, setPay] = useState(false)
  const [idCompra, setIdCompra] = useState("")
  const [loading, setLoading] = useState(true)

  const {cart, totalPrice, clear} = useCartContext(Context)

  if(pay){

    return (
      
      <ContainerCart  >
        {
          loading ? <ClipLoader color={"#593713"} loading={loading}  size={50} /> 
                  : <DivToken>
                      <h1>Gracias por tu compra </h1>
                      <p>Token : {idCompra}</p>
                      <Link to='/'><Buttom color={colors.second} height="50px" width="100%"> SEGUIR COMPRANDO</Buttom></Link>

                    </DivToken> 
        }
      </ContainerCart>

    );
  }
  else if(cart.length){
    return (

      <ContainerCart2 > 

        <ContainerProduct>
        

          <DivScroll>
            {
              cart.map((prod)=> <Plantilla key={prod.id} prod={prod}/> )
            }
          </DivScroll>
          
          <StyleP>Total: ${ totalPrice() }</StyleP>
          <Buttom onClick={clear} color="#5b62edda" height="50px" width={"300px"}>Clear</Buttom>

        </ContainerProduct>

        <Formulario setPay={setPay} pay={pay} idCompra={idCompra} setIdCompra={setIdCompra} setLoading={setLoading} />
      </ContainerCart2>
  )

  }
  return (

    <ContainerCart direction="true">
      <StyleP>El Carrito de compras esta vacio</StyleP>
      <Link to='/'><Buttom color={colors.second} height="50px" width="100%"> Ir a comprar</Buttom></Link>
    </ContainerCart>
   
  )
}

export default Cart