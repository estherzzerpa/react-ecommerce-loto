import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import { GlobalStyle } from './components/styled-components/global/Styled-App';
import ItemDetailContainer from './components/main/detalle-producto/ItemDetailContainer';

function App() {

  const descuento = "20% OFF"

  return (
   
    <> 
      <GlobalStyle />
      <NavBar />
      <ItemListContainer greeting={descuento} />
      <ItemDetailContainer/>

    </>
  );
}

export default App;
