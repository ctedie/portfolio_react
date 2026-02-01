import Container from 'react-bootstrap/Container'
import baniere from '../assets/img/banner.jpg'
import freshFood from '../assets/img/portfolio/fresh-food.jpg'
import restaurantAkira from '../assets/img/portfolio/restaurant-japonais.jpg'
import espaceBienEtre from '../assets/img/portfolio/espace-bien-etre.jpg'
import seo from '../assets/img/portfolio/seo.jpg'
import apiCreation from '../assets/img/portfolio/coder.jpg'
import siteMockup from '../assets/img/portfolio/screens.jpg'

import ItemPortfolio from '../components/ItemPortfolio'
import TitrePage from '../components/TitrePage'
import './portfolio.css'


function Portfolio() {

  return (
    <>
      <img id="banniere" src={baniere} alt="Bannière Portfolio" />
      {/* TODO: Ajouter le titre de la page (composant) */}
      <TitrePage titre="Portfolio" description="Voici quelques-unes de mes réalisations" />
      <div className="portfolio col-md-6 col-lg-8 space-around flex">
            <ItemPortfolio image={freshFood} alt="Fresh food" title="Fresh food" Description="Description de Fresh food" textFooter="Site réalisé avec PHP et MySQL" />
            <ItemPortfolio image={restaurantAkira} alt="Restaurant Akira" title="Restaurant Akira" Description="Description de Restaurant Akira" textFooter="Site réalisé avec WordPress" />
            <ItemPortfolio image={espaceBienEtre} alt="Espace bien-être" title="Espace bien-être" Description="Description de Espace bien-être" textFooter="Site réalisé avec LARAVEL" />
            <ItemPortfolio image={seo} alt="SEO" title="SEO" Description="Description de SEO" textFooter="Utilisation des outils SEO" />
            <ItemPortfolio image={apiCreation} alt="Création d'une API" title="Création d'une API" Description="Description de Création d'une API" textFooter="PHP - SYMFONY" />
            <ItemPortfolio image={siteMockup} alt="Maquette d'un site web" title="Maquette d'un site web" Description="Description de Maquette d'un site web" textFooter="Réalisé avec FIGMA"/>
            
      </div>
    </>
  )
}

export default Portfolio
