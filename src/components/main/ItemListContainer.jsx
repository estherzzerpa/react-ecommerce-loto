import React, {useState, useEffect} from 'react'
import Portada from '../header/Portada'
import ItemList from './ItemList'
import {WrapperMain} from '../../components/main/styled/StyleMain'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firestore'
import Footer from '../footer/Footer'
import { PProd } from '../../components/main/styled/StyleMain'

const ItemListContainer = () => {

const [loading, setLoading]= useState(true)
const [error, setError] = useState(false)
const {IdCategoria} = useParams()
const [listProduct, setListProduct] = useState([])

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
  },[IdCategoria])

  const scrollBehavior = useRef(null)
  return (
  <WrapperMain>
    <Portada scrollBehavior={scrollBehavior} url={IdCategoria} ></Portada>
    <ItemList  scrollBehavior={scrollBehavior}  listProduct= {listProduct} loading={loading}></ItemList>
  </WrapperMain>
)}

export default ItemListContainer