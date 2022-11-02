import ClipLoader from "react-spinners/ClipLoader";
import { colors } from "../styled-components/global/Styled-App";
import Item from './Item';
import { WrapperMainProd } from './styled/StyleMain';
import { WrapperItem } from "./styled/StyleMain";

const ItemList = ({loading, listProduct}) => {
  
  return (

  <>
  
  <WrapperMainProd>
   
 
    <WrapperItem>
      
    {
        loading
        ? <ClipLoader color={colors.second} loading={loading} size={90} />
        : listProduct.map((product) => <Item key={product.id} product={product}></Item> )

      }
    </WrapperItem>
  </WrapperMainProd>

  </>
  )
}

export default ItemList
