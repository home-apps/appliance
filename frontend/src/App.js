import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MenuSlides from './components/menuSlides/MenuSlides'

import Main from './pages/main/Main'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardLogin from './pages/dashboardLogin/DashboardLogin'

const App = () => {
  return (
    <BrowserRouter>
      <MenuSlides />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboardLogin' element={<DashboardLogin />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
