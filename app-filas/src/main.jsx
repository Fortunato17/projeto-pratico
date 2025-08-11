import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//ESTILOS
import "./styles/index.css";
import './styles/components.css';
import './styles/variables.css';
import './styles/layout.css';
import './styles/pages.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
