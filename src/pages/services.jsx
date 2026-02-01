import Header from '../components/entete.jsx'
import Footer from '../components/Foooter.jsx'
import './services.css'

import baniere from '../assets/img/banner.jpg'

function Services() {

  return (
    <>
        <div id="title">
          <img id="banniere" src={baniere} alt="Bannière Services" />
          <h2>Mon offre de services</h2>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
        </div>
        <div className='flex'> {/* TODO: Faire les 3 cards des differernts services et ajouter les icones*/}
          
          <div className='contour'>  {/* UX Design */}
            <h3>UX Design</h3>
            <p>
              L'UX Design est une discipline qui consiste à
              concevoir des produits (sites web, applications
              mobiles, logiciels, objets connectés, etc.) en plaçant
              l'utilisateur au centre des préoccupations. L'objectif
              est de rendre l'expérience utilisateur la plus fluide et
              agréable possible.
              </p>
          </div>
          
          <div className='contour'>  {/* Développement web */}
            <h3>Développement web</h3>
            <p>
              Le développement de sites web consiste à créer des
              sites internet en utilisant des langages de
              programmation (HTML, CSS, JavaScript, PHP, etc.)
              et des frameworks (Bootstrap, React, Angular, etc.).
            </p>
          </div>
          
          <div className='contour'>  {/* Référencement */}
            <h3>Référencement</h3>
            <p>
              Le référencement naturel (SEO) est une technique
              qui consiste à optimiser un site web pour le faire
              remonter dans les résultats des moteurs de
              recherche (Google, Bing, Yahoo, etc.). L'objectif est
              d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
    </>
  )
}

export default Services