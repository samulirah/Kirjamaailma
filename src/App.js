import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Tuotesivu from './pages/Tuotesivu';


const URL = 'http://localhost/kirjamaailma/';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Navbar url={URL} cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:categoryId' element={<Products url={URL} />} />
          <Route path='/tuotesivu' element={<Tuotesivu addToCart={addToCart}/>} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        
        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;
