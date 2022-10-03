import React, {createContext, useState} from 'react'

export const Context = createContext()

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

    // agregar productos al carrito

    const addItem = (producto, cantidad) =>{

        let newCart;

        let prod = cart.find((prod) => prod.id === producto.id ) 

        if(prod){
            
           prod.cantidad += cantidad
           newCart = [...cart]
        }
        else{
            prod = {...producto, cantidad }
            newCart = [...cart, prod]
        }

        setCart(newCart)
    }

    console.log(cart)

    // eliminar productos del carrito

    const removeItem = (id) =>{

     const cartFiltrado =  cart.filter((item)=>{
          return  item.id !== id
        })
        
        setCart(cartFiltrado)
    }
    
    // restear el cart
    const clear = () =>{
        setCart([])
    }

    const isInCart = (id)=>{
        cart.find((item)=> item.id === id ? true : false )
    } 
    // precio total de todos los productos en el cart 
    const totalPrice =  ()=>{
       return cart.reduce((acum, act ) => acum + act.cantidad * act.price, 0 )
    }

    // cantidad total de prodcutos

    const totalProducts = ()=> cart.reduce((acum, productoActual) => acum + productoActual.cantidad, 0)

  return (

    <Context.Provider value={{cart, addItem, removeItem, clear, isInCart, totalPrice, totalProducts}}>{children}</Context.Provider>

  )
}

export default CartContext