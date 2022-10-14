import styled from "styled-components"
import { ContainerCart } from "../header/CartView/Cart"
import { Buttom } from "../styled-components/elements/Buttom"
import { colors } from "../styled-components/global/Styled-App"
import { useState } from "react"
import { useCartContext } from "../header/CartView/Cart"
import { Context } from "../Context/CustomContext"
import {db} from '../../firebase/firestore'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import {  doc, updateDoc} from "firebase/firestore"
import ClipLoader from "react-spinners/ClipLoader";


const Form = styled.form`
    background-color: ${colors.primary};

    width: 420px;
    height: 360px;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    label{
        font-size: 12px;
        width: 70%;
        display: flex;
        flex-direction: column;

        input{
            outline: none;
            border: none;
        }

    }
    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        input{
            width: 50px;
            margin-left: 22px;
        }
        label{
            margin: 10px;  
        }
    }

`

const DivToken = styled.div`
    text-align: center;
    color: black;
`

const Formulario = () => {

    const [pay, setPay] = useState(false)
    const [idCompra, setIdCompra] = useState("")

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [numeroSeguridad, setNumeroSeguridad] = useState("")
    const [fechaVencimiento, setFechaVencimiento] = useState("")

    const [loading, setLoading] = useState(true)

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

            setLoading(false)

            setIdCompra(res.id)

        })
           
        setPay(true)
     
        clear()
    }

    const  actualizarStock = (product)=>{

        return updateDoc(doc(db, "productos", product.id), {stock:product.stock - product.cantidad })
    }


    if(pay){
        return (

            <ContainerCart>
                {
                    loading ? <ClipLoader color={"#593713"} loading={loading}  size={150} /> 
                            :<DivToken>
                                <h1>Gracias por tu compra </h1>
                                <p>Token : {idCompra}</p>
                            </DivToken> 

                }
            </ContainerCart>
            
        )
    }

    return (

        <ContainerCart>
            <Form onSubmit={finalizarCompra}>
              
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
             
                <Buttom width="100%"  color={colors.second}  >Pagar</Buttom>
            </Form>
        </ContainerCart>

    )
 
}

export default Formulario