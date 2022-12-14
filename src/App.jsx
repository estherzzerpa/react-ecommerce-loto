import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import { GlobalStyle } from './components/styled-components/global/Styled-App';
import ItemDetailContainer from './components/main/detalle-producto/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/header/CartView/Cart';
import CartContext from './components/Context/CustomContext';
import Formulario from './components/formulario/Formulario';
import Footer from './components/footer/Footer';
function App() {

  return (
   
    <> 
    <GlobalStyle />
    
    <BrowserRouter>
    <CartContext>

      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer /> } />
          <Route path='/category/:IdCategoria' element={<ItemListContainer /> } />
          <Route path='/productos/:IdProducto' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/formulario' element={<Formulario />}/>

        </Routes>

    </CartContext>
    
    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
