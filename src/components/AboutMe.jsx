import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import './AboutMeStyles.css'
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import bg from "../assets/mexico.jpg";
import 'animate.css';
const AboutMe = () => {
  return (
    <div className='about-container'>
      
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">My Goals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Me</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content className="tab-pane-content" >
                    <Tab.Pane  eventKey="first">
                      <Row>
                      Hello, my name is Jamie, and I am 21 years old. I love traveling, exploring, and experiencing new cultures. I have traveled to many countries in Asia, such as Thailand, Vietnam, Korea, Hong Kong, and China, and I plan to visit many more countries in the future. I graduated from the University of Auckland, studying computer science, and I am currently working on projects in my spare time to help develop my programming skills.
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This project aims to document my travel history and future travel plans. I hope to inspire others to travel and explore the world. Additionally, I aim to improve my programming skills while enjoying traveling by consistently updating this website as I gain more life experiences and coding expertise. I am excited to see where this project takes me and what I can learn from it.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Container className='reach-me'>
                      <h1>How To Reach Me</h1>
                      <Row className='contact-info'>
                        <Col>
                          <Row className='email-section'>
                            <img className="email-logo" src={email} alt="Email" />
                            <p>jamiezhou777@gmail.com</p>
                          </Row>
                        </Col>
                      </Row>
                      <Row className='contact-info'>
                        <Col>
                          <Row className='phone-section'>
                            <img className='phone-logo' src={phone} alt="Phone" />
                            <p>+64 220890142</p>
                          </Row>
                        </Col>
                      </Row>
                      <img className='bg-image' src={""} alt="" />
                    </Container>

                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>

                


    
    </div>
  )
}

export default AboutMe