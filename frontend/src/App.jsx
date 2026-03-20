import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collaction" element={<Collection/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Orders" element={<Orders/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Product/:productId" element={<Product/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
