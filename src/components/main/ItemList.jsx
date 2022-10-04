import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Item from './Item';
import styled from 'styled-components';

const WrapperItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f9ece5;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

`

const ItemList = ({loading, listProduct}) => {
  
  return (

    <>

      <p id='products'>Products</p>

      <WrapperItem>

      {
        loading
        ? <ClipLoader color={"#593713"} loading={loading} size={150} />
        : listProduct.map((product) => <Item key={product.id} product={product}></Item> )

      }
              
      </WrapperItem>
    </>
  )
}

export default ItemList
