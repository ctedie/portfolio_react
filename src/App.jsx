import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import Home from './pages/home.jsx'
import MentionsLegales from './pages/mentionsLegales.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      {/* <Home /> */}
      <MentionsLegales />
      <Footer /> 
    </>
  )
}

export default App
