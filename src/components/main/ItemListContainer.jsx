import React, {useState, useEffect} from 'react'
import Portada from '../header/Portada'
import ItemList from './ItemList'
import {WrapperMain} from '../../components/main/styled/StyleMain'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firestore'

const ItemListContainer = ({greeting}) => {

const [loading, setLoading]= useState(true)
const [error, setError] = useState(false)
const {IdCategoria} = useParams()
const [listProduct, setListProduct] = useState([])



// console.log(clothes)

// const URL_BASE = "https://fakestoreapi.com/products"
// const URL_CATEGORY = `https://fakestoreapi.com/products/category/${IdCategoria}`
  
useEffect(()=>{

const collectionProducts = collection(db, "productos")
const resultado =  IdCategoria ? query(collectionProducts, where("category","==", IdCategoria))  : collectionProducts

getDocs(resultado)
.then((data)=>{
  const datos = data.docs.map((element)=>{
   return {
    ...element.data(),
    id:element.id
   }
  }); 
  setListProduct(datos)
})
.catch(() => {
  setError(true)
  console.log(error)
})
  .finally(()=>{
    setLoading(false)
  });

  // fetch( `${resultado}`)
  //   .then((res) => res.json()
  //   )
  //   .then((data) =>{
           
  //     setListProduct(data)

  //  }
  //   )
  //   .catch((error) => {
  //     setError(true)
  //     console.log(error)
  //   })
  //     .finally(()=>{
  //       setLoading(false)
  //     });

  },[IdCategoria])

  const scrollBehavior = useRef(null)

  // const arrayObj = [{id:1, nombre:"esther"}, {id:2, nombre:"inge"}, {id:3, nombre:"vanessa"}]

  // const map = arrayObj.map((amiga)=>{
  //      return {
  //       ...amiga, edad:23
  //      }
  // })

  // const other = [...map, {id:4, name:"jeremy", edad:24}]
  // let prod = other.find((prod)=>{
  //   return prod.nombre
  // })

  // if(prod){
  //   console.log(prod.nombre);
  // }

  // console.log(map)
  // console.log(arrayObj)
  // console.log(other)

  return (

  <WrapperMain>
   
    <Portada scrollBehavior={scrollBehavior} url={IdCategoria} greeting={greeting}></Portada>
    <ItemList scrollBehavior={scrollBehavior} listProduct= {listProduct} loading={loading}></ItemList>

  </WrapperMain>
)}

export default ItemListContainer