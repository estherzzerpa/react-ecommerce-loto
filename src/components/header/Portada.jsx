import { DivPortada, ButtonPrincipal} from '../main/styled/StyleMain'
import video from "../../assets/images/video1.mp4"

const Portada = ({ url, scrollBehavior}) => {

  // const [playVideo, setPLayVideo]

  const handleScroll = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (

    <DivPortada display= {url && "none"}>

      <video  type="video/mp4"  autoPlay loop muted src={video} alt="video principal"/>

      <ButtonPrincipal onClick={()=>{handleScroll(scrollBehavior)}} className=' btn'  href="">GO SHOP</ButtonPrincipal>
      <h2 >MAKE IT YOURS</h2>

    </DivPortada>
  )
}

export default Portada