import React, {useState, useEffect} from 'react'
import imagen from "../../assets/images/imagen2.jpg"
import ItemList from './ItemList'
import {WrapperMain, ImgPrincipal, DivPortada, ButtonPrincipal, ContainerSlogan} from '../../components/main/styled/StyleMain'

 
const ItemListContainer = ({greeting}) => {

    // <main className='container_main flex flex-wrap relative overflow-hidden h-[100%] w-[95%] justify-center top-32 m-auto overflow-y-scroll'>


  // HOOKS

  // const [stock, setStock] = useState(6)

  // const [count, setCount] = useState(1)

  // const onAdd = ()=>{

  //   setStock(stock - count)

  //   setCount(1)

  //   count >= stock && console.log( "No hay mas stock")

  //   console.log(stock)

  // }
  const [loading, setLoading]= useState(true)
  const [listProduct, setListProduct] = useState([])


useEffect(()=>{

    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) =>{
      setListProduct(data)
      console.log(data)})
    .catch(()=>{
      console.log("mal");
    })
      .finally(()=>{
        setLoading(false)
      });

  },[])

  return (

  <WrapperMain>

      <DivPortada>

        <ImgPrincipal src={imagen} alt="imagen principal"/>

        <ButtonPrincipal className=' btn' position={"absolute"} href="">GO SHOP</ButtonPrincipal>
        
        <ContainerSlogan>
          <h2 >{greeting}</h2>
          <h2 >MAKE IT YOURS</h2>
        </ContainerSlogan>

      </DivPortada>
        
      {/* <ItemCount onAdd={onAdd} stock={stock} setStock={setStock} count={count} setCount={setCount}  /> */}

      <ItemList listProduct={listProduct} loading={loading}></ItemList>

    </WrapperMain>
)}

export default ItemListContainer