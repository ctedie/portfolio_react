import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { NavLink } from 'react-router-dom'
import './entete.css'

function Header()
{
    return (
        <div>
            <nav className="navbar sticky-top z-3 navbar-dark navbar-expand-lg bg-dark">
                <Container>
                    <div className="navbar-brand" href="/">JOHN DOE</div>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="menu">
                        <ul className="navbar-nav ">
                            <li className='nav-item'>
                                <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>HOME</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/services" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>SERVICES</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/portfolio" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>PORTFOLIO</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/contacts" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>CONTACT</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/mentions-legales" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>MENTIONS LÉGALES</NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
                
            </nav>
        </div>
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