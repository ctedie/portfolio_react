import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

import './Footer.css'

function Footer()
{
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          {/* Colonne 1 */}
          <Col md={4} className='mt-3'>
            <h5>John Doe</h5>
            <p className="small">
              40 rue Laure Diebold<br />
              69009 Lyon, France <br />
              Tel : 06 12 34 56 78<br />
              john.doe@gmail.com<br />
            </p>
            <ul className="flex-row justify-content-start navbar-nav">
              <li className='nav-item'><NavLink className="icone-reseaux text-secondary me-1 p-0" to="https://github.com/JohnDoe" target="_blank" rel="noopener noreferrer"><IoLogoGithub size={24} /></NavLink></li>
              <li className='nav-item'><NavLink className="icone-reseaux text-secondary me-1 p-0" to="https://twitter.com/JohnDoe" target="_blank" rel="noopener noreferrer"><IoLogoTwitter size={24} /></NavLink></li>
              <li className='nav-item'><NavLink className="icone-reseaux text-secondary p-0" to="https://linkedin.com/in/JohnDoe" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={24} /></NavLink></li>
            </ul>
          </Col>

          {/* Colonne 2 */}
          <Col md={4} className='mt-3 navbar-nav'>
            <h5>Liens utiles</h5>
            <ul className="navbar-nav">
              <li className='nav-item'><NavLink to="/" className="nav-link p-0 mb-1">Accueil</NavLink></li>
              <li className='nav-item'><NavLink to="/services" className="nav-link p-0 mb-1">Services</NavLink></li>
              <li className='nav-item'><NavLink to="/portfolio" className="nav-link p-0 mb-1">Portfolio</NavLink></li>
              <li className='nav-item'><NavLink to="/contacts" className="nav-link p-0 mb-1">Me contacter</NavLink></li>
              <li className='nav-item'><NavLink to="/mentions-legales" className="nav-link p-0 mb-1">Mentions légales</NavLink></li>
            </ul>
          </Col>

          {/* Colonne 3 */}
          <Col md={4} className='mt-3 navbar-nav'>
            <h5>Mes dernières réalisations</h5>
            <ul className="navbar-nav">
              <li className='nav-item'><NavLink to="/portfolio" className="nav-link p-0 mb-1">Fresh Food</NavLink></li>
              <li className='nav-item'><NavLink to="/portfolio" className="nav-link p-0 mb-1">Restaurent Akira</NavLink></li>
              <li className='nav-item'><NavLink to="/portfolio" className="nav-link p-0 mb-1">Espace bien-être</NavLink></li>
              <li className='nav-item'><NavLink to="/portfolio" className="nav-link p-0 mb-1">SEO</NavLink></li>
              <li className='nav-item'><NavLink to="/portfolio" className="nav-link p-0 mb-1">Création d'une API</NavLink></li>
              <li className='nav-item'><NavLink to="/portfolio" className="nav-link p-0 mb-1">Maquette d'un site</NavLink></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer