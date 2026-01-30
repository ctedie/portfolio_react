import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './entete.css'

function Header()
{
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">JOHN DOE</Navbar.Brand>
                    <Nav>
                        <Nav.Link className='hover' href="/">HOME</Nav.Link>
                        <Nav.Link className='hover' href="/services">SERVICE</Nav.Link>
                        <Nav.Link className='hover' href="/portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link className='hover' href="/contact">CONTACT</Nav.Link>
                        <Nav.Link className='hover' href="/mentions-legales">MENTIONS LÉGALES</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
