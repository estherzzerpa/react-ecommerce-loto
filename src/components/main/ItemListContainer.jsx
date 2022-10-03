import React, {useState, useEffect} from 'react'
import Portada from '../header/Portada'
import ItemList from './ItemList'
import {WrapperMain} from '../../components/main/styled/StyleMain'
import { useParams } from 'react-router-dom'
// import { categorias,clothes } from '../../categorias/categorias'
 
const ItemListContainer = ({greeting}) => {

const [loading, setLoading]= useState(true)
const [listProduct, setListProduct] = useState([])
const [error, setError] = useState(false)
const {IdCategoria} = useParams()

// console.log(clothes)

const URL_BASE = "https://fakestoreapi.com/products"
const URL_CATEGORY = `https://fakestoreapi.com/products/category/${IdCategoria}`
  
const resultado =  IdCategoria === undefined ? URL_BASE : URL_CATEGORY

useEffect(()=>{

  fetch( `${resultado}`)
    .then((res) => res.json()
    )
    .then((data) =>{
           
      setListProduct(data)

   }
    )
    .catch((error) => {
      setError(true)
      console.log(error)
    })
      .finally(()=>{
        setLoading(false)
      });

  },[IdCategoria])

  return (

  <WrapperMain>

   
    <Portada url={IdCategoria} greeting={greeting}  ></Portada>
    <ItemList listProduct= {listProduct} loading={loading}></ItemList>

  </WrapperMain>
)}

export default ItemListContainer