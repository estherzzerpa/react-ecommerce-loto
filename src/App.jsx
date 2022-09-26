import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import { GlobalStyle } from './components/styled-components/global/Styled-App';
import ItemDetailContainer from './components/main/detalle-producto/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/header/CartView/Cart';

function App() {

  const descuento = "20% OFF"

  return (
   
    <> 
      <GlobalStyle />

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer greeting={descuento} /> } />
          <Route path='/category/:IdCategoria' element={<ItemListContainer greeting={descuento} /> } />
          <Route path='/products/:IdProducto' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
