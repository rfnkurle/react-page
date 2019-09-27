import React from 'react';
import { Parallax } from 'react-parallax'
import Fade from 'react-reveal/Fade'
import { LinksBox } from '../components/TextBox';
import { TextContainerOne } from '../components/TextContainers'
import { Container, Row, Col } from "reactstrap";


const insideStyles = {
    color: "white",
    padding: 20,
    weight: "bold",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-57%,-54%)"
};

const Contact = () => {
    return (
        <>
            <Parallax bgImage={require("../img/RobbySwing.jpeg")} strength={500}>
                <div style={{ height: 480, width: 940 }}>
                    <div style={insideStyles}>
                        <Container>
                            <Row>
                                <Col>
                                    <Fade left >
                                        <TextContainerOne >
                                            <h1>Denver.</h1>
                                        </TextContainerOne>
                                    </Fade>
                                    <Fade right duration={2000}>
                                        <TextContainerOne >
                                            <h1>Boulder.</h1>
                                        </TextContainerOne>
                                    </Fade>
                                    <Fade up duration={4000}>
                                        <TextContainerOne >
                                            <h1>Colorado.</h1>
                                        </TextContainerOne>
                                    </Fade>
                                    <br></br>

                                    <TextContainerOne >
                                        <h2><i class="far fa-clone"></i>rfnkurle@gmail.com</h2>

                                    </TextContainerOne>
                                    <TextContainerOne >
                                        <a href="https://github.com/rfnkurle"><img src={require("../img/gihub.png")} style={{ height: 65, width: 55, paddingBottom: 10 }} alt="GitHub" /></a>

                                        <a href="https://www.linkedin.com/in/robbykurle/"><img src={require("../img/linkedin-logo.jpg")} style={{ height: 55, width: 45, margin: 10, paddingBottom: 10 }} alt="LinkedIn" /></a>

                                    </TextContainerOne>


                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div>

            </Parallax>

            <LinksBox />




        </>
    )
}


export default Contact;