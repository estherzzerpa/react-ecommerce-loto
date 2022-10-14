import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemDetail from "./ItemDetail"
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from "firebase/firestore";


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

  const [count, setCount] = useState(Number)
  
  useEffect(()=>{

    const querydb = getFirestore()
    const queryItem = doc(querydb,"productos",IdProducto )

    getDoc(queryItem)
    .then((res)=>{
      return setProducto({id:res.id, ...res.data()})
    })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      setLoading(false)
    })

    // const getItem = async ()=>{

    //   try{
    //     const respuesta = await fetch(`https://fakestoreapi.com/products/${IdProducto}`)
    //     const data = await respuesta.json();
    //     const stockData = Math.floor(Math.random()  * 100)

    //     setProducto({...data, stockData});
    //     setStock(stockData)
      
    //   }
    //   catch{
    //     console.error("Algo salio mal")
    //   }
    //   finally{
    //     setLoading(false)
    //   }
    // }

    // getItem()

  },[IdProducto])
 
  return (
    <Container>

    {

      loading ? <ClipLoader color={"#593713"} loading={loading}  size={150} /> : <ItemDetail key={producto.id} producto={producto} count={count} setCount={setCount}   />

    }

    </Container>
  )
}

export default ItemDetailContainer