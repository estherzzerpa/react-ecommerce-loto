import { colors } from '../styled-components/global/Styled-App'
import { Link } from 'react-router-dom'
import { Buttom } from '../styled-components/elements/Buttom'
import { CardProducts, Price, InfoCard, ImgProduct } from './styled/StyleMain'

const Item = ({product}) => {

  return (
    <CardProducts >

        <InfoCard>
            
          <Link to={`/productos/${product.id}`}><ImgProduct src={product.image} alt="" /></Link>  

        </InfoCard>

        <Price>
           <h4>{product.category}</h4>
            <p>${product.price}</p>
            <Link to={`/productos/${product.id}`}><Buttom height='50px' width="100%" >Ver detalles</Buttom></Link>
        </Price>
    </CardProducts>
  )
}

export default Item