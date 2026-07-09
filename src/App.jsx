import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import "./App.css";
import Navbar from './Navbar';
import Loading from './pages/Loading';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loading' element={<Loading />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
