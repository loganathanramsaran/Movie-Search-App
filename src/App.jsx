import React, { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movie from "./components/Movie";
import { Footer } from './components/Footer';
function App() {
  const [favourites, setFavourites] = useState([])
  return (
    <>
    <BrowserRouter>
    <Header favourites ={favourites} />
    <div className="container max-w-screen ">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movie' element={<Movie favourites={favourites} setFavourites={setFavourites}/>}/>
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App