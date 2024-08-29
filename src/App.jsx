import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import ProfilePage from './components/ProfilePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <Container fluid className="p-0">
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
                <ProfilePage onLogout={() => {
                  handleLogout();
                  return <Navigate to="/" replace />;
                }} /> : 
                <Navigate to="/login" replace />
              } 
            />
          </Routes>
        </Container>
      </Container>
    </Router>
  )
}

export default App