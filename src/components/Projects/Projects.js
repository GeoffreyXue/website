import { useState, useContext, useEffect } from 'react';
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

import { getDatabase, ref, child, get } from "firebase/database";
import { FirebaseContext } from './../../App';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

function Projects() {
    const app = useContext(FirebaseContext);
    const dbRef = ref(getDatabase(app));
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        get(child(dbRef, `1tZvZzhRKlrNdr5GNieDeQ2-7dnDAnATqF_zqnmmODdA/Sheet1`)).then((snapshot) => {
            if (snapshot.exists()) {
                let data = snapshot.val();
                let projects = data.map(d => {
                        return {
                            id: d.id,
                            url: d.Image,
                            title: d.Name,
                            subtitle: d.Time,
                            description: d.Description,
                            links: parseLinks(d.Links),
                            badges: d.Badges
                    };
                });
                console.log(projects);
                setProjects(projects, ...projects);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    function parseLinks(d) {
        if (d.length === 0) return [];
        let links = d.split(',');
        return links.map(link => {
            return {
                label: link.match(/\[.*\]/g)[0].slice(1, -1),
                url: link.match(/\(.*\)/g)[0].slice(1, -1)
            }
        });
    }

    return (
        <div className='Projects'>
            <div className='Introduction'>A list of projects/experiments/hacks.</div>
        <Row xs={1} md={2} className="g-4 Projects">
            {projects.map(p => (
                <Col key={p.id}>
                <Card>
                    <Card.Img className='CardImage' variant="top" src={p.url} />
                    <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Subtitle>{p.subtitle}</Card.Subtitle>
                    <hr/>
                    <Card.Text>{p.description}</Card.Text>
                    {p.links.map(l => (
                        <Card.Link href={l.url}>
                            {l.label}
                        </Card.Link>
                    ))}
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
        </div>
    );
  }
  

  /*
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
  */
  export default Projects;