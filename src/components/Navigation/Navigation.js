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
            <Nav.Link href="/website">Home</Nav.Link>
            <Nav.Link href="/website/#projects">Projects</Nav.Link>
            <Nav.Link href="/website/#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Text>V0.04</Navbar.Text>
        </Container>
    </Navbar>
  );
}

export default Navigation;
