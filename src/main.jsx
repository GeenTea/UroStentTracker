import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Login from './pages/login/login.jsx'
import MainMenu from './pages/main-menu/main-menu.jsx'
import AddPatient from "./pages/add-patient/add-patient.jsx";
import EditPatient from "./pages/edit-patient/editPatients.jsx";
import NotFound from './pages/not-found/not-found.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/edit-patient" element={<EditPatient />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
)
