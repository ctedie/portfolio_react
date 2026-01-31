import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import './entete.css'

function Header()
{
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
                <Container>
                    <div className="navbar-brand" href="/">JOHN DOE</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            <a className="nav-link" href="#">SERVICES</a>
                            <a className="nav-link" href="#">PORTFOLIO</a>
                            <a className="nav-link" href="#">CONTACT</a>
                            <a className="nav-link" href="#">MENTIONS LÉGALES</a>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Header
/**
 *     <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MonApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/about">À propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

 */