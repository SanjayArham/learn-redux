import React from 'react';
import { useSelector } from 'react-redux'

// SCSS
import './assets/scss/main.scss';

// ROUTER DOM
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// PAGES CRUD
import Login from './pages/crud/Login';
import Register from './pages/crud/Register';
// PAGES SITE
import Home from './pages/sites/Home';
import About from './pages/sites/About';
import Collection from './pages/sites/Collection';
import Product from './pages/sites/Product';
import Cart from './pages/sites/Cart';
import Checkout from './pages/sites/Checkout';
import Todos from './pages/sites/Todos';

// PAGES OTHER
import NoPage from './pages/others/NoPage';



function App() {
  
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <BrowserRouter>
        {currentUser ? 
          <Routes>
            <Route exact path='/' element={<Home/>} /> 
            <Route path='/about' element={<About/>} />
            <Route path='/collection' element={<Collection/>} />
            <Route path='/product/:productParamUrl' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='/Todos' element={<Todos/>} />
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