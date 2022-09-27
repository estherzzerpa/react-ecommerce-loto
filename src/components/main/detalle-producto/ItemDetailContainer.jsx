import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemDetail from "./ItemDetail"
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfb48c;
`

const ItemDetailContainer = () => {

     // HOOKS
    
  const [producto, setProducto] = useState({})

  const [loading, setLoading]= useState(true)
  
  const {IdProducto} = useParams()

  const [stock, setStock] = useState(30)

  console.log(stock)

  const [count, setCount] = useState(1)
  
 

  useEffect(()=>{

    const getItem = async ()=>{

      try{
        const respuesta = await fetch(`https://fakestoreapi.com/products/${IdProducto}`)
        const data = await respuesta.json();

        // setProducto({...data, stock: Math.floor(Math.random() * 20)});
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


  },[IdProducto])
 
  return (
    <Container>

    {

      loading ? <ClipLoader color={"#593713"} loading={loading}  size={150} /> : <ItemDetail key={producto.id} producto={producto} setStock={setStock} stock={stock} count={count} setCount={setCount}   />

    }

    </Container>
  )
}

export default ItemDetailContainer