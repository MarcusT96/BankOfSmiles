import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import AppContent from './components/AppContent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid className="p-0">
        <AppContent />
      </Container>
    </Router>
  )
}

export default App