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
      <Portfolio />
      <Footer /> 
    </>
  )
}

export default App
