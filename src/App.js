import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <CartProvider>
        <NavBar/>
        <Routes>
         <Route path= "/" element = {<ItemListContainer/>} />
         <Route path= "/category/:categoryId" element={<ItemListContainer/>} />
         <Route path= "/item/itemId" element= {<ItemDetailContainer />} />
         <Route path= "/cart" element={<cart/>} />
         <Route path= "/checkout" element={<Checkout/>} />
         <Route path= "*" element= {<h1>404 NOT FOUND</h1>} />
        </Routes>
       </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
