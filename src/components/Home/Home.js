import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';
import photo from './../../images/senior_photo.jpg';

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
            </div>
        </div> 
    );
}

export default Home;