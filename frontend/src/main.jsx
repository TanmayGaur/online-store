import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DashBoard } from './modules/dashboard/components/DashBoard.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashBoard />
  </StrictMode>,
)
