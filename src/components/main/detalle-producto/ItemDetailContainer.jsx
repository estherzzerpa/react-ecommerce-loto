import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemDetail from './ItemDetail'
import ClipLoader from "react-spinners/ClipLoader";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`


const ItemDetailContainer = () => {


  const [producto, setProducto] = useState({})
  const [loading, setLoading]= useState(true)


  useEffect(()=>{

    const getItem = async ()=>{

      try{

        const respuesta = await fetch('https://fakestoreapi.com/products/1')
        const data = await respuesta.json();
        setProducto(data)
        
      }
      catch{
        console.error("ALgo salio mal")
      }
      finally{
        setLoading(false)
      }

    }

    getItem()


  },[])
 
  return (
    <Container>

    {

      loading ? <ClipLoader color={"#593713"} loading={loading}  size={150} /> : <ItemDetail product={producto} />

    }

    </Container>
  )
}

export default ItemDetailContainer