
import CartWidget from "./CartView/CartWidget";
import {ContainerNav, Header, UlMenu, Logo} from "./styled/StyleNav";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MenuHamburguesa from "./styled/MenuHamburguesa";
import { MobileContainer } from "./styled/MenuHamburguesa";
import { colors } from "../styled-components/global/Styled-App";

const NavBar = () => {

  const [changeHeader, setChangeHeader] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)

  const handleClick = ()=>{
    // lo pasa a true y si esta true lo pasa false
    setActiveMenu(!activeMenu)
  } 
  const handleChange= ()=>{

    window.scrollY >= 10 ? setChangeHeader(true) : setChangeHeader(false)

  }

  window.addEventListener("scroll", handleChange)

  return (

    <ContainerNav >        

      <Header color={changeHeader ? `${colors.primary}` : "#dd91841c"} height={changeHeader ? "45px" : "90px"} >
        <Link to="/"><Logo>LOTO</Logo></Link>

          <UlMenu >
            <div className={`links ${activeMenu && "menuActivo"}`}>
              <NavLink onClick={handleClick} to="/"><li>Home</li></NavLink>
              <NavLink onClick={handleClick} to="/category/Blazer's"><li>Blazer's</li></NavLink>     
              <NavLink onClick={handleClick} to="/category/Corset's"><li>Corset's</li></NavLink> 
              <NavLink onClick={handleClick} to="/category/Casual"><li>Casual</li></NavLink> 
              <NavLink onClick={handleClick} to="/category/Vestidos"><li>Vestidos</li></NavLink>   
            </div>
          </UlMenu>
          
        <Link to="/cart">
            <CartWidget />
        </Link>
        <MobileContainer>
          <MenuHamburguesa activeMenu={activeMenu} click={handleClick} />
        </MobileContainer>
      </Header>       
    </ContainerNav>
  )
}

export default NavBar