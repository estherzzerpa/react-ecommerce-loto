import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail"
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from "firebase/firestore";
import { Container } from '../styled/StyleMain';
import { colors } from '../../styled-components/global/Styled-App';

const ItemDetailContainer = () => {

     // HOOKS
    
  const [producto, setProducto] = useState({})

  const [loading, setLoading]= useState(true)
  
  const {IdProducto} = useParams()

  const [count, setCount] = useState(1)
  
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
    
  },[IdProducto])
 
  return (
    <Container>

    {

      loading
      ? <ClipLoader color={colors.second} loading={loading}  size={90}/>
      : <ItemDetail key={producto.id} producto={producto} count={count} setCount={setCount}   />

    }

    </Container>
  )
}

export default ItemDetailContainer