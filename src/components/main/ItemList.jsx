import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Item from './Item';
import styled from 'styled-components';



const ItemList = ({loading, listProduct}) => {

    const WrapperItem = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: white;
        width: 100%;
        height: 100%;
    `

  return (
    <WrapperItem>
    
    {
        loading ? <ClipLoader color={"#593713"} loading={loading}  size={150} /> :  listProduct.map((product)=>{ return(<Item key={product.id} product={product}></Item> ) })
    
    }
            
    </WrapperItem>
  )
}

export default ItemList
