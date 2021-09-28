import moment from 'moment';

import Image from 'react-bootstrap/Image';
import photo from './../../images/senior_photo.jpg';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {

    const currentDate = moment();
    const creation = moment('2021-09-26 04:31:00');
    const time = moment(currentDate.diff(creation)).format("D");

    return (
        <div className='Home'>
            <div className='Panel'>
                <div className='Strip'/>
                <div className='PictureBackground'>
                    <Image src={photo} className='Picture' roundedCircle/>
                </div>
                <div className='Name'>Geoffrey Xue</div>
                <div className='Information'>
                    <div>PHS '17 - '21 🎓 UW Madison '21 - '25</div>
                    <div>Computer Science, Data Science</div>
                </div>
                
            </div>
            <div className='Body'>
                <h1>Hi, I'm Geoffrey!</h1>
                <h5>Feel free to check out some info or my ongoing/featured projects below.</h5>
                <br/>
                <h1>🚧Work in Progress🚧</h1>
                <h2>Some things may not work as expected. This website is only {time} days old! </h2>
            </div>
        </div> 
    );
}

export default Home;