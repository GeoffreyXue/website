import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Toast from 'react-bootstrap/Toast';

import { Github, Linkedin, EnvelopeOpenFill } from 'react-bootstrap-icons';


import terminal from './../../images/terminal.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (showToast) {
            setTimeout(() => {
                setShowToast(false);
            }, 2000);
        }
    }, [showToast]);


    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("xuegeoff@gmail.com");
        setShowToast(true);
    }

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
                    <Nav.Link href="/~gxue/#home">Home</Nav.Link>
                    <Nav.Link href="/~gxue/#projects">Projects</Nav.Link>
                    <Nav.Link href="/~gxue/#resume">Resume</Nav.Link>
                </Nav>
                <Nav className="ml-auto Contacts">
                    <a onClick={copyEmailToClipboard}>
                        <EnvelopeOpenFill className="ContactIcon" />
                        <div className="ToastContainer">
                            <Toast show={showToast} onClose={setShowToast} className="Toast">
                                <Toast.Header>
                                    <div className="me-auto">✔️ Copied xuegeoff@gmail.com!</div>
                                </Toast.Header>
                            </Toast>
                        </div>
                    </a>
                    <a href='https://github.com/GeoffreyXue'>
                        <Github className="ContactIcon"/>
                    </a>
                    <a href='https://www.linkedin.com/in/geoffreyxue/'>
                        <Linkedin className="ContactIcon"/>
                    </a>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default Navigation;
