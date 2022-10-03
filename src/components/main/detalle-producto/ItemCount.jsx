import plus from '../../../assets/icon/bx-plus.svg'
import minus from '../../../assets/icon/bx-minus.svg'
// import { isDisabled } from '@testing-library/user-event/dist/utils'
import styled from 'styled-components';
import { Buttom } from '../../styled-components/elements/Buttom';

import { colors } from '../../styled-components/global/Styled-App';

const Count = styled.div`
    
    display: flex;
    width: 80%;
    justify-content: space-evenly;

    button{
        width: 20%;
        height: 50px;
        border: none;
        background-color: ${colors.primary};
        color: ${colors.text};  
        cursor: pointer;
    }
`

const ItemCount = ({onAdd, stock, count, setCount}) => {

    const pluss = () =>{

        count < stock && setCount(count + 1)
        console.log(stock)

    }

    const subtr = ()=>{

        count > 1 && setCount(count - 1)
        console.log(stock)
    }


  return (
    <>
        <Count>
            <button onClick={subtr} ><img src={minus} alt="" /></button>
            <h2>{count}</h2>
            <button onClick={pluss}><img src={plus} alt="" /></button>
        </Count>
        <Buttom color={colors.primary} width="100%" onClick={onAdd}>Añadir al carrito</Buttom>
        
    </>
  )
}

export default ItemCount