import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createContext } from 'react-dom'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
