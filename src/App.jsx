import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import Home from './pages/home.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'


function App() {

  return (
    <>
      <div className="position-sticky top-0">
        <Header />
      </div>
      <Home />
      <Footer /> 
    </>
  )
}

export default App
