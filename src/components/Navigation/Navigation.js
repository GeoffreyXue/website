import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import terminal from './../../images/terminal.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{flex: "0 0 auto"}}>
            <Container>
            <Navbar.Brand>
                    <img
                        src={terminal}
                        width='50'
                        height='30'
                        className="d-inline-block align-top"
                        alt='terminal logo'
                    />
                    Geoffrey Xue
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/website">Home</Nav.Link>
                    <Nav.Link href="/website/#projects">Projects</Nav.Link>
                    <Nav.Link href="/website/#contact">Contact</Nav.Link>
                    <Nav.Link href="/website/#resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand>
            <img
                src={terminal}
                width='50'
                height='30'
                className="d-inline-block align-top"
                alt='terminal logo'
            />
            Geoffrey Xue
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/website">Home</Nav.Link>
            <Nav.Link href="/website/#projects">Projects</Nav.Link>
            <Nav.Link href="/website/#contact">Contact</Nav.Link>
            <Nav.Link href="/website/#resume">Resumeblahblahblah</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;
