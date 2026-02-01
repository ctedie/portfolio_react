import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import Services from './pages/services.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Services />
      <Footer /> 
    </>
  )
}

export default App
