import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Login from './pages/login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/"  element={<Login />} />
      </Routes>
  </BrowserRouter>
)
