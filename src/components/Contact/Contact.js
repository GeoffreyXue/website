import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
    return (
        <div className='Contact'>
            <Card>
                <Card.Body>
                <Card.Title>Contact Info</Card.Title>
                <Card.Text>
                    <div>
                        Email: <a href='xuegeoff@gmail.com'>xuegeoff@gmail.com</a>
                    </div>
                    <a href='https://github.com/GeoffreyXue'>Github</a>
                    <div/>
                    <a href='https://www.linkedin.com/in/geoffreyxue/'>LinkedIn</a>
                </Card.Text>
                </Card.Body>
            </Card>
            <div className='Questions'>Have a question? Send a message to me below!</div>
            <Card>
            <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows='5' placeholder="Your message here..." />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card.Body>
            </Card>
      </div>
    );
  }
  
  export default Contact;