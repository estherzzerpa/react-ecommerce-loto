import { DivPortada, ButtonPrincipal, ContainerSlogan } from '../main/styled/StyleMain'
import { ImgPrincipal } from '../main/styled/StyleMain'
import imagen from "../../assets/images/imagen2.jpg"
import { useRef } from 'react'

const Portada = ({greeting, url, scrollBehavior}) => {



  const handleScroll = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (

    <DivPortada display= {url && "none"}>

      <ImgPrincipal src={imagen} alt="imagen principal"/>

      <ButtonPrincipal onClick={()=>{handleScroll(scrollBehavior)}} className=' btn' position={"absolute"} href="">GO SHOP</ButtonPrincipal>

      <ContainerSlogan>
      <h2 >{greeting}</h2>
      <h2 >MAKE IT YOURS</h2>
      </ContainerSlogan>

    </DivPortada>
  )
}

export default Portada