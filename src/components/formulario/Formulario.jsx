import { Buttom } from "../styled-components/elements/Buttom"
import { colors } from "../styled-components/global/Styled-App"
import { useState } from "react"
import { useCartContext } from "../header/CartView/Cart"
import { Context } from "../Context/CustomContext"
import {db} from '../../firebase/firestore'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import {  doc, updateDoc} from "firebase/firestore"
import { Form} from "./StyleForm"



const Formulario = ({pay, setPay, setIdCompra, setLoading}) => {

    const [validacion, setValidacion] = useState(false)


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [numeroSeguridad, setNumeroSeguridad] = useState("")
    const [fechaVencimiento, setFechaVencimiento] = useState("")

    const {cart, totalPrice, clear} = useCartContext(Context)

    const datosCliente = {
        name,
        email,
        telefono,
        numeroTarjeta,
        numeroSeguridad,
        fechaVencimiento
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()

        if([name, email, telefono,numeroTarjeta,numeroSeguridad,fechaVencimiento].includes("") ){

            setValidacion(true)       

        }else{
   
            const ventasCollecion = collection(db, "Ventas")
            addDoc(ventasCollecion,{
                datosCliente,
                items:cart,
                date:serverTimestamp(),
                total: totalPrice(),
            })
            .then((res)=>{
                console.log(res.id)

                cart.forEach((product)=>{

                    actualizarStock(product)

                })
                setIdCompra(res.id)
                setLoading(false)

                clear()
                
            })

            setPay(true)
           
        }

    }

    const  actualizarStock = (product)=>{

        return updateDoc(doc(db, "productos", product.id), {stock:product.stock - product.cantidad })
    }

    if(pay === false){
        return (

            <Form onSubmit={finalizarCompra}>
                {validacion && "Todos los campos son obligatorios"}
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </label>
                <label>
                    Telefono:
                    <input type="number" name="telefono" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}} />
                </label>
                <label htmlFor="">Numero de la tarjeta
                    <input type="number" value={numeroTarjeta} onChange={(e)=>{setNumeroTarjeta(e.target.value)}}   />
                </label>
                <label>
                    Nombre Completo:
                    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  />
                </label>
                <div>  
                    <label htmlFor="">Fecha de vencimiento
                        <input type="number" value={fechaVencimiento} onChange={(e)=>{setFechaVencimiento(e.target.value)}}   />
                    </label> 
                    <label htmlFor="">Numero de seguridad
                        <input type="number" value={numeroSeguridad} onChange={(e)=>{setNumeroSeguridad(e.target.value)}}   />
                    </label> 
                </div>
            
                <Buttom width="100%" color={colors.second}>Pagar</Buttom>
            </Form>

        )
    }

   
}

export default Formulario