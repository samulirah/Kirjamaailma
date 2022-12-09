import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Tuotesivu from './pages/Tuotesivu';
import Order from './pages/Order';
import About from './pages/About';
import NotFound from './pages/NotFound';


// Kirjamaailma
const URL = 'http://localhost/kirjamaailma/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Navbar url={URL} cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart} />} />
          <Route path='/tuotesivu/:productId' element={<Tuotesivu url={URL} addToCart={addToCart}/>} />
          <Route path='/order' element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount}/>} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />  
        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;
