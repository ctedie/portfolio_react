import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/services.jsx'
import Products from './pages/portfolio.jsx'
import Contacts from './pages/contacts.jsx'
import MentionsLegales from './pages/mentionsLegales.jsx'

import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import Portfolio from './pages/portfolio.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'


function App() {

  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <Footer /> 
    </>
  )
}

export default App
