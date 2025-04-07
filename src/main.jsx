import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Login from './pages/login/login.jsx'
import MainMenu from './pages/main-menu/main-menu.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/login"  element={<Login />} />
          <Route path="/main-menu" element={<MainMenu />} />
      </Routes>
  </BrowserRouter>
)
