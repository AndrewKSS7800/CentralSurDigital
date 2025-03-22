//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import News from './pages/news';
import Contact from './pages/contact';
import NotFound from './pages/notfound';
import Footer from './components/footer';
import Header from "./components/header";
const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre-nosotros" element={<About/>}/>
        <Route path="/noticias" element={<News/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </>
  );
};
export default App
