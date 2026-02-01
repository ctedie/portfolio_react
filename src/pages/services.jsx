import './services.css'
import ItemService from '../components/ItemService'
import baniere from '../assets/img/banner.jpg'

function Services() {

  return (
    <>
        <div id="title">
          <img id="banniere" src={baniere} alt="Bannière Services" />
          <h2>Mon offre de services</h2>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
        </div>
        <div className='d-flex justify-content-center flex-wrap gap-4 m-4'> 
          <ItemService logo="https://via.placeholder.com/150" alt="UX Design" title="UX Design" 
            Description="L'UX Design est une discipline qui consiste à
              concevoir des produits (sites web, applications
              mobiles, logiciels, objets connectés, etc.) en plaçant
              l'utilisateur au centre des préoccupations. L'objectif
              est de rendre l'expérience utilisateur la plus fluide et
              agréable possible." />
        
        
          <ItemService logo="https://via.placeholder.com/150" alt="Développement web" title="Développement web" 
            Description="Le développement de sites web consiste à créer des
              sites internet en utilisant des langages de
              programmation (HTML, CSS, JavaScript, PHP, etc.)
              et des frameworks (Bootstrap, React, Angular, etc.)." />

          <ItemService logo="https://via.placeholder.com/150" alt="Référencement" title="Référencement" 
            Description="Le référencement naturel (SEO) est une technique
              qui consiste à optimiser un site web pour le faire
              remonter dans les résultats des moteurs de
              recherche (Google, Bing, Yahoo, etc.). L'objectif est
              d'attirer un maximum de visiteurs qualifiés sur le site."/>
        </div>
    </>
  )
}

export default Services