import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';
import photo from './../../images/senior_photo.jpg';

import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {

    return (
        <div className='Home'>
            <div className="Content">
                <div className='Panel'>
                    <div className='Strip'/>
                    <div className='PictureBackground'>
                        <Image src={photo} className='Picture' roundedCircle/>
                    </div>
                    <div className='Name'>Geoffrey Xue</div>
                    <div className='Information'>
                        <div>PHS '17 - '21 🎓 UW Madison '21 - '24</div>
                        <div>Computer Science, Data Science</div>
                    </div>
                    
                </div>
                <div className='Body'>
                    <h1>Welcome to my Portfolio!</h1>
                    <h5>Feel free to check out some info or my current and past projects.</h5>
                    <br/>
                    <Card>
                        <Card.Body>
                        <Card.Title>Contact Info</Card.Title>
                        <Card.Text>
                            <div>
                                <Envelope/> &nbsp; <a href='mailto:xuegeoff@gmail.com?subject=Template'>xuegeoff@gmail.com</a>
                            </div>
                            <div>
                                <Github/> &nbsp; <a href='https://github.com/GeoffreyXue'>Github</a>
                            </div>
                            <div>
                                <Linkedin/> &nbsp; <a href='https://www.linkedin.com/in/geoffreyxue/'>LinkedIn</a>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div> 
    );
}

export default Home;