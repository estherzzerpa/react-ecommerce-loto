import React, {createContext, useState, useEffect} from 'react'

export const Context = createContext()


const localCart = JSON.parse(localStorage.getItem("cart"))

const CartContext = ({children}) => {

    const [cart, setCart] = useState(localCart || [])

    // agregar productos al carrito

    const addItem = (producto, cantidad) =>{

        let newCart;
        let prod = cart.find((prod)=> prod.id === producto.id )
        if(prod){

            prod.cantidad += cantidad

            newCart = [...cart]
        }else{
            newCart = [...cart, {...producto, cantidad}]
        }

        setCart(newCart)
    }

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
    //   return () => {
        
    //   };
    }, [cart]);
    
    // eliminar productos del carrito

    const removeItem = (id) =>{

    if(isInCart){
        // const clickId = cart.find((item)=>{
        //   return item.id === id
        // })

       let newCart = [...cart.filter((item)=>{
            return item.id === id ? item.cantidad = item.cantidad - 1 : item.id !== id;
        })]
        setCart(newCart);

        // todo el codigo que hice al pedo antes :

        // if(clickId.cantidad === 1){

        //     newCart = [...cart.filter((item)=>{
        //         return item.id !== id;
        //     })]
            
        //     console.log(newCart);
        // }
        // else{ 

        //     setCart(cart.filter((item)=> {
        //          console.log(item.cantidad)
        //         return item.cantidad = item.cantidad  - 1 }))
        // }
      
    }

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
       return cart.reduce((acum, act) => Math.round(acum + act.cantidad * act.price), 0 )
    }

    // cantidad total de prodcutos

    const totalProducts = ()=> cart.reduce((acum, productoActual) =>  acum + productoActual.cantidad, 0);


  return (

    <Context.Provider value={{cart, addItem, removeItem, clear, isInCart, totalPrice, totalProducts}}>{children}</Context.Provider>

  )
}

export default CartContext