import plus from '../../../assets/icon/bx-plus.svg'
import minus from '../../../assets/icon/bx-minus.svg'
import { Buttom } from '../../styled-components/elements/Buttom';
import { colors } from '../../styled-components/global/Styled-App';
import { Count } from '../styled/StyleMain';
import { isDisabled } from '@testing-library/user-event/dist/utils/misc/isDisabled';

const ItemCount = ({onAdd, stock, count, setCount}) => {


    const pluss = () =>{
        count < stock && setCount(count + 1) 
    }

    const subtr = ()=>{
        count > 1 && setCount(count - 1)
    }

  return (
    <>
        <Count>
            <button onClick={subtr} ><img src={minus} alt="" /></button>
            <h2>{count}</h2>
            <button onClick={pluss}><img src={plus} alt="" /></button>
        </Count>
        <Buttom  color={colors.second} height="50px" width="100%" onClick={stock === 0 ? isDisabled : onAdd}>Añadir al carrito</Buttom>
    </>
  )
}

export default ItemCount