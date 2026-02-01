import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import Contacts from './pages/contacts.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Contacts />
      <Footer /> 
    </>
  )
}

export default App
