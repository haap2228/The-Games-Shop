import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Products from './pages/Products'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrders from './pages/PlaceOrders'
import Cart from './pages/Cart'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collections/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:productID' element={<Products/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-orders' element={<PlaceOrders/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
