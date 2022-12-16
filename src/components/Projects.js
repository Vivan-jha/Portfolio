import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ComfySloth",
      description: "E-Commerce Website for a french Company",
      imgUrl: projImg1,
      url:'https://comfysloths.netlify.app/',
    },
    {
      title: "Krypt",
      description: "Send Cryptos across the globe",
      imgUrl: projImg2,
      url:'https://solidikrypt.netlify.app/',
    },
    {
      title: "Metaversus",
      description: "NextJs and Framer motion",
      imgUrl: projImg3,
      url: 'https://metaversus-seven.vercel.app/',
      
    },
    {
      title: "Disneyplus clone",
      description: "OTT platform",
      imgUrl: projImg4,
      url:'https://disney-plus-ca55d.web.app/',
    },
    {
      title: "LinkedIn Clone",
      description: "Networking Website",
      imgUrl: projImg5,
      url:'https://linkedin-clone-457de.web.app/',
    },
    {
      title: "Netflix Clone",
      description: "OTT platform",
      imgUrl: projImg6,
      url:'https://netflix-clonexx.netlify.app/',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A showcase of my diverse skills and experience, featuring projects from Web development to Web3.o. Explore my portfolio and see my passion for creativity come to life.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>"More exciting projects are coming your way - stay tuned!"</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>"More amazing projects are coming your way - keep an eye out!"</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
