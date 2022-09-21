
import CartWidget from "../header/CartWidget"
import {ContainerNav, Header, UlMenu, Logo} from "./styled/StyleNav"

const NavBar = () => {

  return (

    <ContainerNav >

        {/* <Registro/> */}
        
  
     <Header >

        <Logo>LOTO</Logo>

          <UlMenu>
          
            <a href="#"><li>Home</li></a>
            <a href="#"><li>
                Productos
                <ul>
                    <li>Buzos</li>
                    <li>Remeras</li>
                    <li>Musculozas</li>
                    <li>Corsets</li>
                    <li>Buzos overside</li>
                    <li>Vestidos</li>
                    <li>Blusas</li>
                    <li>Shorts</li>
                    <li>Enterizos</li>
                    <li>Accesorios</li>
                </ul>
            </li></a>     
            <a href="#"><li>loto clasic</li></a> 
            <a href="#"><li>loto Under</li></a> 
            <a href="#"><li>OUFITS</li></a>

          </UlMenu>

            <CartWidget />
            
        </Header>       
    </ContainerNav>
  )
}

export default NavBar