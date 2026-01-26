import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/reset.css'
import './styles/common.css' //공통서식 변수
import './styles/layout.css' //레이아웃 서식 (헤더, 푸터)
import './styles/main.css'
import './styles/sub.css'

import Header from './layout/Header';
import Main from './components/Main';
import Intro from './components/Intro';
import Info from './components/Info';
import Event from './components/Event';
import Customer from './components/Customer';
import Login from './components/Login';
import Join from './components/Join';
import Order from './components/Order';
import Cart from './components/Cart';
import Footer from './layout/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/info' element={<Info />} />
          <Route path='/event' element={<Event />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
