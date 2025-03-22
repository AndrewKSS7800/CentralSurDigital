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
      
      <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>}/>
        <Route path="/sobre-nosotros" element={<><Header /><About /><Footer /></>}/>
        <Route path="/noticias" element={<><Header /><News /><Footer /></>}/>
        <Route path="/contacto" element={<><Header /><Contact /><Footer /></>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </>
  );
};
export default App
