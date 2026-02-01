import baniere from '../assets/img/banner.jpg'
import freshFood from '../assets/img/portfolio/fresh-food.jpg'
import restaurantAkira from '../assets/img/portfolio/restaurant-japonais.jpg'
import espaceBienEtre from '../assets/img/portfolio/espace-bien-etre.jpg'
import seo from '../assets/img/portfolio/seo.jpg'
import apiCreation from '../assets/img/portfolio/coder.jpg'
import siteMockup from '../assets/img/portfolio/screens.jpg'
import './portfolio.css'


function Portfolio() {

  return (
    <>
      <img id="banniere" src={baniere} alt="Bannière Portfolio" />
      {/* TODO: Ajouter le titre de la page (composant) */}
      <div className="portfolio flex column align-center col-md-8 col-lg-8">
        <div className='contour'>
          <img src={freshFood} alt="Fresh food" />
          fresh food
        </div>
        <div className='contour'>
          <img src={restaurantAkira} alt="Restaurant Akira" />
          Restaurant Akira
        </div>
        <div className='contour'>
          <img src={espaceBienEtre} alt="Espace bien-être" />
          Espace bien-être
        </div>
        <div className='contour'>
          <img src={seo} alt="SEO" />
          SEO
        </div>
        <div className='contour'>
          <img src={apiCreation} alt="Création d'une API" />
          Création d'une API
        </div>
        <div className='contour'>
          <img src={siteMockup} alt="Maquette d'un site web" />
          Maquette d'un site web
        </div>
      </div>

    </>
  )
}

export default Portfolio
