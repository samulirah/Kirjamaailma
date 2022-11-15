import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import NotFound from './pages/NotFound';



function App() {
  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;
