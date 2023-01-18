import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
// import Calculator from './components/calculator';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
