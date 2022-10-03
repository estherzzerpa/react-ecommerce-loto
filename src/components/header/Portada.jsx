import React from 'react'

import { DivPortada, ButtonPrincipal, ContainerSlogan } from '../main/styled/StyleMain'
import { ImgPrincipal } from '../main/styled/StyleMain'
import imagen from "../../assets/images/imagen2.jpg"

const Portada = ({greeting, url}) => {

  return (
    

    <DivPortada display= {url && "none"}>

        <ImgPrincipal src={imagen} alt="imagen principal"/>

        <ButtonPrincipal className=' btn' position={"absolute"} href="">GO SHOP</ButtonPrincipal>

        <ContainerSlogan>
        <h2 >{greeting}</h2>
        <h2 >MAKE IT YOURS</h2>
        </ContainerSlogan>

    </DivPortada>
  )
}

export default Portada