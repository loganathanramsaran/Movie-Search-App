import React, { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movie from "./components/Movie";
import { Footer } from './components/Footer';
import Favourite from './components/Favourite';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <div className="container max-w-screen ">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movie' element={<Movie/>}/>
        <Route path='/Favourite' element={<Favourite/>}/>
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App