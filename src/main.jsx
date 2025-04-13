import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import "./styles/color.css"
import "./styles/grid.css"
import "./styles/header.css"
import "./styles/footer.css"
import "./styles/contact.css"
import "./styles/notfound.css"
import "./styles/home.css"
import "./styles/about.css"
import "./styles/news.css"
import "./styles/news-cat.css"
import "./styles/news-page.css"
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
