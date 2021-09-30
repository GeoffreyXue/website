import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import geminid_systems from './../../images/geminid_systems.png';
import robotics_documentation from './../../images/robotics_documentation.png';
import swerve_drive from './../../images/swerve_drive.jpeg';
import react_bootstrap from './../../images/react_bootstrap.png';
import old_website from './../../images/old_website.png';
import wpm_races from './../../images/wpm_races.png';

import wpm from './../../images/wpm_over_time.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

function Projects() {
    return (
        <div className='Projects'>
            <div className='Introduction'>A list of projects/experiments/hacks.</div>
        <Row xs={1} md={2} className="g-4 Projects">
            <Card>
                <Card.Img className='CardImage' variant="top" src={wpm_races} />
                <Card.Body>
                <Card.Title>Personal - WPM R Plot</Card.Title>
                <Card.Subtitle>September 2021</Card.Subtitle>
                <Card.Text>
                    I web scraped my typing data from typeracer and graphed my words per minute
                     over time, from 2018 to now. I just learned R, so this is more of a test than a project.
                </Card.Text>
                <Card.Link href={wpm}>
                    Plot
                </Card.Link>
                </Card.Body>
            </Card>
            <Col>
            <Card>
                <Card.Img className='CardImage' variant="top" src={react_bootstrap} />
                <Card.Body>
                <Card.Title>Personal - Website</Card.Title>
                <Card.Subtitle>September 2021</Card.Subtitle>
                <Card.Text>
                    This website! An interesting experiment with React Bootstrap
                    hosted using Github Pages.
                </Card.Text>
                <Card.Link href='https://github.com/GeoffreyXue/website'>
                    Github
                </Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img className='CardImage' variant="top" src={geminid_systems} />
                <Card.Body>
                <Card.Title>Work - Weather App</Card.Title>
                <Card.Subtitle>July 2021 - August 2021</Card.Subtitle>
                <Card.Text>
                    An data-aggregated app that allows you to view 
                    charts on the latest climate statistics and news
                    related to climate change. I participated on a scrum
                    team to work on the iOS front end with SwiftUI, with also
                    some opportunities to work on some python scripts, a 
                    serverless backend, and mySQL database work. Still a work in progress.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img className='CardImage' variant="top" src={swerve_drive} />
                <Card.Body>
                <Card.Title>FRC Robotics - Swerve Drive</Card.Title>
                <Card.Subtitle>July 2020 - August 2021</Card.Subtitle>
                <Card.Text>
                    Worked alongside team to develop the first swerve drive in our 
                    team's 17-year long history. Each wheel on the robot moves 
                    independently, allowing us to take advantage of path planning.
                </Card.Text>
                <Card.Link href='https://paradigmshift1259.github.io/Swerve2021/'>
                    Documentation
                </Card.Link>
                <Card.Link href='https://github.com/ParadigmShift1259/Swerve2021'>
                    Github
                </Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img className='CardImage' variant="top" src={robotics_documentation} />
                <Card.Body>
                <Card.Title>FRC Robotics - Travis Continuous Integration</Card.Title>
                <Card.Subtitle>July 2021</Card.Subtitle>
                <Card.Text>
                    Using Travis CI, I added continuous integration to our github code -
                    whenever the main branch on Github is updated, Doxygen documentation
                    is automatically published for reference.
                </Card.Text>
                <Card.Link href='https://paradigmshift1259.github.io/FRC_Robot_2021/class_climber_subsystem.html'>
                    2021 Documentation
                </Card.Link>
                <Card.Link href='https://github.com/ParadigmShift1259/FRC_Robot_2021'>
                    Github
                </Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img className='CardImage' variant="top" src={geminid_systems} />
                <Card.Body>
                <Card.Title>Work - QuickLook NPM Package</Card.Title>
                <Card.Subtitle>August 2020</Card.Subtitle>
                <Card.Text>
                    An npm package made for react native. A wrapper for IOS's 
                    QuickLook to be used easily to preview files, images, 
                    videos, base64, and more.
                </Card.Text>
                <Card.Link href='https://www.npmjs.com/package/react-native-quicklook-view'>
                    react-native-quicklook-view
                </Card.Link>
                <Card.Link href='https://github.com/GeminidSystems/react-native-quicklook-view'>
                    Github
                </Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img className='CardImage' variant="top" src={old_website} />
                <Card.Body>
                <Card.Title>Personal - Old Website</Card.Title>
                <Card.Subtitle>August 2020</Card.Subtitle>
                <Card.Text>
                    A vanilla JS experimental website. A peek into css formatting, animations,
                    and JS libraries.
                </Card.Text>
                <Card.Link href='https://geoffreyxue.gitlab.io/website-testing/'>
                    Website
                </Card.Link>
                <Card.Link href='https://gitlab.com/GeoffreyXue/website-testing'>
                    Gitlab
                </Card.Link>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </div>
    );
  }
  

  /*
<Col>
<Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Robotics</Card.Title>
    <Card.Text>
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit longer.
    </Card.Text>
    </Card.Body>
</Card>
</Col>
  */
  export default Projects;