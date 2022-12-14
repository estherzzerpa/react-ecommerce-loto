import { Context } from '../../Context/CustomContext'
import { Buttom } from '../../styled-components/elements/Buttom'
import { useCartContext } from './Cart'
import { Div } from '../styled/StyleNav'
import { PlantillaProduct } from '../styled/StyleNav'

const Plantilla = ({prod}) => {
  const { removeItem} = useCartContext(Context)

  return (

    <PlantillaProduct>
      <img src={prod.image} alt="" />
      <Div>
        <p>Producto: {prod.title} </p>
        <p>Cantidad: {prod.cantidad}</p>
        <p>Precio: ${prod.price}</p>
        <p>Precio total: ${ Math.round(prod.cantidad * prod.price)}</p>
        <div> 
          <Buttom onClick={()=>removeItem(prod.id)} color="#bf3127fd" width={"30px"}>X</Buttom>
        </div>
      
      </Div>
    </PlantillaProduct >
  )
}

export default Plantilla