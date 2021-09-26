import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand>Geoffrey Xue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;
