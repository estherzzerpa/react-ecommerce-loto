import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemDetail from "./ItemDetail"
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const ItemDetailContainer = () => {

  console.log("asjdnak")

  const [producto, setProducto] = useState({})
  const [loading, setLoading]= useState(true)
  const {IdProducto} = useParams()

  console.log(producto)
  console.log(IdProducto)

  useEffect(()=>{

    const getItem = async ()=>{

      try{

        const respuesta = await fetch(`https://fakestoreapi.com/products/${IdProducto}`)
        const data = await respuesta.json();
        setProducto(data)

        console.log(data)
        
      }
      catch{
        console.error("ALgo salio mal")
      }
      finally{
        setLoading(false)
      }

    }

    getItem()


  },[IdProducto])
 
  return (
    <Container>

    {

      loading ? <ClipLoader color={"#593713"} loading={loading}  size={150} /> : <ItemDetail key={producto.id} producto={producto} />

    }

    </Container>
  )
}

export default ItemDetailContainer