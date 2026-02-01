import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import Portfolio from './pages/portfolio.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Portfolio />
      <Footer /> 
    </>
  )
}

export default App
