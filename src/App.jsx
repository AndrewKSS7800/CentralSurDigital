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
import Policy from "./pages/news/policy";
import Culture from "./pages/news/culture";
import Economy from "./pages/news/economy";
import Education from "./pages/news/education";
import Society from "./pages/news/society";
import Nature from "./pages/news/nature";
import Sport from "./pages/news/sport";
import Technology from "./pages/news/technology";
import Columns from "./pages/news/columns";
const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>}/>

        <Route path="/sobre-nosotros" element={<><Header /><About /><Footer /></>}/>

        <Route path="/noticias" element={<><Header /><News /><Footer /></>}/>
        <Route path="/noticias/politica" element={<><Header /><Policy /><Footer /></>}/>
        <Route path="/noticias/cultura" element={<><Header /><Culture /><Footer /></>}/>
        <Route path="/noticias/economia" element={<><Header /><Economy /><Footer /></>}/>
        <Route path="/noticias/educacion" element={<><Header /><Education /><Footer /></>}/>
        <Route path="/noticias/sociedad" element={<><Header /><Society /><Footer /></>}/>
        <Route path="/noticias/ambiente" element={<><Header /><Nature /><Footer /></>}/>
        <Route path="/noticias/deporte" element={<><Header /><Sport /><Footer /></>}/>
        <Route path="/noticias/tecnologia" element={<><Header /><Technology /><Footer /></>}/>
        <Route path="/noticias/columnas" element={<><Header /><Columns /><Footer /></>}/>


        <Route path="/contacto" element={<><Header /><Contact /><Footer /></>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </>
  );
};
export default App
