import styled from "styled-components"
import { colors } from "../styled-components/global/Styled-App"

const FooterBg = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${colors.second};
    color: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
      display: flex;
      flex-direction: column;
      width: 50%;
      label{
        padding-bottom: 14px;
      }
    }
`


const Footer = () => {
  return (
    <FooterBg>
      <div>
      <p>Acerca de nosotros</p>
      <p>Contacto</p>

      <div>
        <label>NewsLater</label>
        <input type="text" />
      </div>
      </div>
     
    </FooterBg>
  )
}

export default Footer