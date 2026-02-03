import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

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
            </p>
            <a className="text-secondary me-3" href="https://github.com/JohnDoe" target="_blank" rel="noopener noreferrer"><IoLogoGithub size={24} /></a>
            <a className="text-secondary me-3" href="https://twitter.com/JohnDoe" target="_blank" rel="noopener noreferrer"><IoLogoTwitter size={24} /></a>
            <a className="text-secondary" href="https://linkedin.com/in/JohnDoe" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={24} /></a>
          </Col>

          {/* Colonne 2 */}
          <Col md={4} className='mt-3'>
            <h5>Liens utiles</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light p-0 mb-1">Accueil</Nav.Link>
              <Nav.Link href="/services" className="text-light p-0 mb-1">Services</Nav.Link>
              <Nav.Link href="/portfolio" className="text-light p-0 mb-1">Portfolio</Nav.Link>
              <Nav.Link href="/contacts" className="text-light p-0 mb-1">Me contacter</Nav.Link>
              <Nav.Link href="/mentions-legales" className="text-light p-0 mb-1">Mentions légales</Nav.Link>
            </Nav>
          </Col>

          {/* Colonne 3 */}
          <Col md={4} className='mt-3'>
            <h5>Mes dernières réalisations</h5>
            <p className="small mb-1">Fresh Food</p>
            <p className="small">Restaurent Akira</p>
            <p className="small mb-1">Espace bien-être</p>
            <p className="small">SEO</p>
            <p className="small mb-1">Création d'une API</p>
            <p className="small">Maquette d'un site</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer