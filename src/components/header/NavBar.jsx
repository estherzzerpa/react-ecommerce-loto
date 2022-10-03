
import CartWidget from "./CartView/CartWidget";
import {ContainerNav, Header, UlMenu, Logo} from "./styled/StyleNav";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (

    <ContainerNav >        

      <Header >
      <Link to="/"><Logo>LOTO</Logo></Link>

        <UlMenu>
        
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/category/women's clothing"><li>
        Women's clothing
            {/* <ul>
                  <li>Buzos</li>
                  <li>Remeras</li>
                  <li>Musculozas</li>
                  <li>Corsets</li>
                  <li>Vestidos</li>
                </ul> */}
        </li></NavLink>     
        <NavLink to="/category/electronics"><li>Electronics</li></NavLink> 
        <NavLink to="/category/men's clothing"><li>men's clothing</li></NavLink> 
        <NavLink to="/category/jewelery"><li>"jewelery"</li></NavLink> 

        </UlMenu>
        
        <Link to="/cart">
          <CartWidget />
        </Link>
              
      </Header>       
    </ContainerNav>
  )
}

export default NavBar