import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import "./styles/color.css"
import "./styles/grid.css"
import "./styles/header.css"
import "./styles/footer.css"
import "./styles/contact.css"
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
