import Image from 'react-bootstrap/Image';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='Home'>
        <div className='Panels'>
            <div className='TopPanel'/>
            <div className='Strip'/>
            <div className='BottomPanel'/>
        </div>
        <div className='PictureBackground'/>
        <Image src='picture.png' className='Picture' roundedCircle/>
        <img src='picture.png' />
    </div> 
  );
}

export default Home;