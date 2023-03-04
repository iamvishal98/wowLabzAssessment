import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Favourites from './pages/favorites/Favourites';
import Home from './pages/home/Home';
import { removeData } from './store/slicers/MovieSlice';




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeData([]));
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
