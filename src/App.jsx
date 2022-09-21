import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import { GlobalStyle } from './components/styled-components/global/Styled-App';
import ItemDetailContainer from './components/main/detalle-producto/ItemDetailContainer';
import {useState} from "react"
function App() {

  const descuento = "20% OFF"
  const [listProduct, setListProduct] = useState([])

  return (
   
    <> 
      <GlobalStyle />
      <NavBar />
      <ItemListContainer greeting={descuento} listProduct ={listProduct} setListProduct={setListProduct} />
      <ItemDetailContainer listProduct={listProduct} />

    </>
  );
}

export default App;
