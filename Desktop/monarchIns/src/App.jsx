import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FloatingChat from './components/FloatingChat'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import BranchesPage from './pages/BranchesPage'
import FAQsPage from './pages/FAQsPage'
import TeamPage from './pages/TeamPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <FloatingChat />
    </Router>
  )
}

export default App
