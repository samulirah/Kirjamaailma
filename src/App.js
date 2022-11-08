import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
