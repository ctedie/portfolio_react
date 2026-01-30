import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

function Footer()
{
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          {/* Colonne 1 */}
          <Col md={4}>
            <h5>MonApp</h5>
            <p className="small">
              Une application moderne construite avec React et Bootstrap.
            </p>
          </Col>

          {/* Colonne 2 */}
          <Col md={4}>
            <h5>Navigation</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light p-0 mb-1">
                Accueil
              </Nav.Link>
              <Nav.Link href="/about" className="text-light p-0 mb-1">
                À propos
              </Nav.Link>
            </Nav>
          </Col>

          {/* Colonne 3 */}
          <Col md={4}>
            <h5>Contact</h5>
            <p className="small mb-1">contact@monapp.fr</p>
            <p className="small">© {new Date().getFullYear()} MonApp</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer