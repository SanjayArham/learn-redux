import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

// SCSS
import './assets/scss/main.scss';

// ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES CRUD
import Login from './pages/crud/Login';
import Register from './pages/crud/Register';
// PAGES SITE
import Home from './pages/sites/Home';
import About from './pages/sites/About';
// PAGES OTHER
import NoPage from './pages/others/NoPage';



function App() {

  
  const anyUserLoggedin = useSelector((state) => state.users.anyUserLoggedin);

  return (
    <BrowserRouter>
        {anyUserLoggedin ? 
          <Routes>
            <Route exact path='/' element={<Home/>} /> 
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<NoPage/>} />
          </Routes>
          : 
          <Routes>
            <Route exact path='/' element={<Login/>} /> 
            <Route path='/register' element={<Register/>} />
            <Route path='*' element={<NoPage/>} />
          </Routes>
        }
        
    </BrowserRouter>
  );
}

export default App;