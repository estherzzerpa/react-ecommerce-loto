import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Item from './Item';
import styled from 'styled-components';
import { colors } from '../styled-components/global/Styled-App';


const WrapperMain = styled.div`
  background-color: #f9ece5;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;    
`

const WrapperItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
`

const PProd = styled.p`
margin-top: 100px;
    font-size: 30px;
    font-weight: bold;
    color: ${colors.primary};

`

const ItemList = ({loading, listProduct, scrollBehavior}) => {
  
  
  return (

    <>
  
  <WrapperMain>
    <PProd ref={scrollBehavior}>Products</PProd>
    <WrapperItem>

    {
      loading
      ? <ClipLoader color={"#593713"} loading={loading} size={150} />
      : listProduct.map((product) => <Item key={product.id} product={product}></Item> )

    }
            
    </WrapperItem>

    </WrapperMain>

    </>
  )
}

export default ItemList
