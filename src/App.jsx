import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import imagePrincipale from './assets/img/hero-bg.jpg'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <img id="imgPrincipale" src={imagePrincipale} alt="photo principale" />
      <h1 >Bonjour, je suis John Doe</h1>
      <h2>Développeur web Full stack</h2>
      <Footer />
    </>
  )
}

export default App
