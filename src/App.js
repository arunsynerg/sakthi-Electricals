import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Nav.js';
import Home from './Components/Home/Home.js';
import CareerPage from './Components/Careers/Careers.js';
import Footer from './Components/Footer/Footer.js';
import Contact from './Components/Contact/Contact.js';
import Product from './Components/Products/Product.js';
import About from './Components/About/About.js';
import Ourcustomer from './Components/Our-customer/ourCustomer.js';
import Nopage from './Components/Nopage/Nopage.js';
import Layout from './Components/Layout/Layout.js';

function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/sakthi-Electricals" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourcustomer" element={<Ourcustomer />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
    
  );
}

export default App;
