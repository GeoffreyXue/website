import { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import { getDatabase, ref, child, get } from "firebase/database";
import { FirebaseContext } from './../../App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

function Projects() {
    const app = useContext(FirebaseContext);
    const dbRef = ref(getDatabase(app));
    const [projects, setProjects] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        get(child(dbRef, `1tZvZzhRKlrNdr5GNieDeQ2-7dnDAnATqF_zqnmmODdA`)).then((snapshot) => {
            if (snapshot.exists()) {
                let data = snapshot.val();

                setProjects(
                    data.Projects.map(d => {
                        return {
                            id: d.id,
                            url: d.Image,
                            title: d.Name,
                            subtitle: d.Time,
                            description: d.Description,
                            links: parseLinks(d.Links),
                            badges: parseBadges(d.Badges.split(','), data.Badges)
                        }
                    })
                );

                setUpcoming(
                    parseBadges(
                        data.Upcoming.map(d => d.Upcoming), 
                        data.Badges
                    )
                );
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [dbRef])

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

    function parseBadges(badges, mapping) {
        badges = badges.map((b, i) => {
            return {
                id: i,
                label: b,
                type: mapping[b] ? mapping[b].Type : "primary",
                text: mapping[b] ? mapping[b].Text : null,
            }
        })
        .map((b) => {
            return {
                ...b,
                text: b.text ?? ((b.type === "warning" || b.type === "light") ? "dark" : "light")
            }
        })
        return badges;
    }

    return (
        <div className='Projects'>
            <div className='Scroll'>
            <div className='Introduction'>A list of projects/experiments/hacks.</div>
            <div className='Upcoming'>
                Upcoming projects underway are using: &nbsp;
                {upcoming.map(b => (
                    <span key={b.id}>
                        <Badge bg={b.type} text={b.text}>
                            {b.label}
                        </Badge>
                        &nbsp;
                    </span>
                ))}
            </div>
            <Row xs={1} md={2} className="g-4">
                {projects.map(p => (
                    <Col key={p.id}>
                    <Card>
                        <Card.Img className='CardImage' variant="top" src={p.url} />
                        <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Subtitle>{p.subtitle}</Card.Subtitle>
                        {p.badges.map(b => (
                            <span key={b.id}>
                            <Badge bg={b.type} text={b.text}>
                                {b.label}
                            </Badge>
                            &nbsp;
                            </span>
                        ))}
                        <hr/>
                        <Card.Text>{p.description}</Card.Text>
                        {p.links.map(l => (
                            <Card.Link key={l.url} href={l.url}>
                                {l.label}
                            </Card.Link>
                        ))}
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            </div>
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