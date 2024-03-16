import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Nav/Nav.js';
import Home from './Components/Home/Home.js';
import CareerPage from './Components/Careers/Careers.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.js';
import Contact from './Components/Contact/Contact.js';

function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='CareerPage' element={<CareerPage />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
      {/* <Home />
      <CareerPage /> */}
    </div>
  );
}

export default App;
