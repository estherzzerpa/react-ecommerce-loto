
import CartWidget from "./CartView/CartWidget";
import {ContainerNav, Header, UlMenu, Logo} from "./styled/StyleNav";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

  const [chanceColor, setChanceColor] = useState(false)

  const changeColorNav = ()=>{

    window.scrollY >= 80 ? setChanceColor(true) : setChanceColor(false)
  }

  window.addEventListener("scroll", changeColorNav)

  return (

    <ContainerNav >        

      <Header color={chanceColor ? "#502b05dc" : "#7a634e1f"} >
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
        <NavLink to="/category/men's clothing"><li>Men's clothing</li></NavLink> 
        <NavLink to="/category/jewelery"><li>Jewelery</li></NavLink> 

        </UlMenu>
        
        <Link to="/cart">
          <CartWidget />
        </Link>
              
      </Header>       
    </ContainerNav>
  )
}

export default NavBar