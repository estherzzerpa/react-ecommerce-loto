import { Context } from '../../Context/CustomContext'
import { Buttom } from '../../styled-components/elements/Buttom'
import { useCartContext } from './Cart'
import { Div } from '../styled/StyleNav'
import { PlantillaProduct } from '../styled/StyleNav'

const Plantilla = ({prod}) => {
  const { removeItem, clear} = useCartContext(Context)

  return (

    <PlantillaProduct>
      <img src={prod.image} alt="" />
      <Div>
        <p>Producto:{prod.title} </p>
        <p>Cantidad:{prod.cantidad}</p>
        <p>Precio: ${prod.price}</p>
        <p>Precio total: ${prod.cantidad * prod.price}</p>
        
        <Buttom onClick={()=>removeItem(prod.id)} color="#ff675cda" width={"10%"}>X</Buttom>
        <Buttom onClick={clear} color="#5b62edda" width={"13%"}>Clear</Buttom>
      </Div>
    </PlantillaProduct >
  )
}

export default Plantilla