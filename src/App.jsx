import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'


function App() {

  return (
    <>
      <div className="position-sticky top-0">
        <Header />
      </div>
      <MentionsLegales />
      <Footer /> 
    </>
  )
}

export default App
