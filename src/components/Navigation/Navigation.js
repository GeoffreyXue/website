import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import terminal from './../../images/terminal.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand>
            <img
                src={terminal}
                width='50'
                height='30'
                className="d-inline-block align-top"
                alt='terminal logo'
            />
      Geoffrey Xue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/website">Home</Nav.Link>
            <Nav.Link href="/website/#projects">Projects</Nav.Link>
            <Nav.Link href="/website/#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;
