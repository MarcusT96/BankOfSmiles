import React, { useState } from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LandingPage from './LandingPage'
import Login from './Login'
import ProfilePage from './ProfilePage'

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/login" 
          element={
            isLoggedIn ? 
            <Navigate to="/profile" replace /> : 
            <Login onLoginSuccess={handleLoginSuccess} />
          } 
        />
        <Route 
          path="/profile" 
          element={
            isLoggedIn ? 
            <ProfilePage onLogout={handleLogout} /> : 
            <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </Container>
  )
}

export default AppContent