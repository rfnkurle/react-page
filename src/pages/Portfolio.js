import React from 'react';
import { Parallax } from 'react-parallax'
import ReactTooltip from 'react-tooltip';
import TextBox from '../components/TextBox'
import Reveal from 'react-reveal/Reveal'
import {Container, Row, Col} from "reactstrap";
import GridComponent from '../components/Grid';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    padding: 90,
    margin: 30
};

const image2 =
    "https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
const image3 =
    "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"

const Portfolio = () => (
    <div style={styles}>

        <Parallax bgImage={"https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} strength={500}>
            <div style={{ height: 600 }}>
                <div style={insideStyles}>
                    
                    <Container>
                    <Row>
                    <Col md="4">
                    <Reveal effect="fadeInLeft" duration={2000}>
                    <GridComponent>
                        
                         <a data-tip="Art + GIFS = Joy" href="https://rfnkurle.github.io/Gif-Art-Joy/"><img src="http://images.fineartamerica.com/images-medium-large-5/soothing-sea-abstract-painting-linda-woods.jpg" style={{ height: 200, width: 200, textAlign: "center" }} alt="Clicky Game" /></a>
                    </GridComponent>
                    </Reveal>
                    </Col>

                    <Col md="4">
                    <Reveal effect="fadeIn" duration={1000}>
                    <GridComponent>
                        <a data-tip="Train Scheduler"href="https://rfnkurle.github.io/train-scheduler/"><img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/hell-train-ryan-seek.jpg" style={{ height: 200, width: 200, textAlign: "center" }} alt="Clicky Game" /></a>
                        
                    </GridComponent>
                    </Reveal>
                    </Col>
                    
                    <Col md="4">
                    <Reveal effect="fadeInRight" duration={2500}>

                    <GridComponent>
                    
                        <a data-tip="Freelancer" href="https://freelancer2020.herokuapp.com/ "><img src="https://image.flaticon.com/icons/png/512/64/64888.png" style={{ height: 200, width: 200, textAlign: "center" }} alt="Clicky Game" /></a>
                        
                    </GridComponent>
                    </Reveal>
                    </Col>
                    
                    
                    </Row>
                    </Container>
                    <br></br>
                    <br></br>
                    <Container>
                    <Row>
                    <Col md="4">
                    <Reveal effect="fadeIn" duration={5500}>
                    <GridComponent>
                        <a data-tip="Portfolio Website Repo" href="https://github.com/rfnkurle/react-portfolio"><img src="https://www.eschoolnews.com/files/2016/12/computer-science-education.jpg" style={{ height: 200, width: 200, textAlign: "center" }} alt="Clicky Game" /></a>
                        
                    </GridComponent>
                    </Reveal>
                    </Col>

                    <Col md="4">
                    <Reveal effect="fadeInUp" duration={2750}>
                    <GridComponent>
                       
                        <a data-tip="RPG Memory Game"href="https://agile-anchorage-48812.herokuapp.com/"><img src="http://img05.deviantart.net/e22a/i/2005/134/c/b/ff7_lovely_creatures_by_genyaxadrian.gif" style={{ height: 200, width: 200, textAlign: "center" }} alt="Clicky Game" /></a>
                    </GridComponent>
                    </Reveal>
                    </Col>
                    <Col md="4">
                    <Reveal effect="fadeInLeft" duration={3000}>
                    <GridComponent>
                        <a data-tip= "Psychic Game"href="https://rfnkurle.github.io/Psychic-Game/"><img src="https://www.bing.com/th?id=OIP.QkT1qZAhJH68Ibb2SHqpZgD5D5&pid=Api&rs=1&p=0" style={{ height: 200, width: 200, textAlign: "center" }} alt="Clicky Game" /></a>
                        
                    </GridComponent>
                    </Reveal>
                    </Col>
                    
                    
                    </Row>
                    <ReactTooltip place="top" type="dark" effect="float"/>
                    </Container>
                    
                    


                </div>
            </div>
        </Parallax>
        <TextBox >
        <Col >
          <Reveal effect="fadeInRight" duration={2500}>
        <h2><strong>-- All Made With --</strong></h2>
        
        </Reveal>
        </Col>
        </TextBox>
        <Parallax bgImage={"https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} blur={{ min: -1, max: 3 }}>
            <div style={{ height: 500 }}>
                <div style={{padding: 120}}> 
                <Container>
                    <Row>
                    <Col md="4">
                    <Reveal effect="fadeInLeft" duration={2000}>
                    <GridComponent>
                    <i data-tip="HTML 5"class="fab fa-html5 fa-7x"></i>

                    <br></br>
                    <br></br>
                    <i data-tip="CSS 3"class="fab fa-css3-alt fa-7x"></i>
                    


                    </GridComponent>
                    </Reveal>
                    </Col>

                    <Col md="4">
                    <Reveal effect="fadeInDown" duration={1000}>
                    <GridComponent>
                    <i data-tip="JavaScript / ES6"class="fab fa-js fa-7x" ></i>
                    <br></br>
                    <br></br>
                    <i data-tip="Node.js"class="fab fa-node-js fa-7x"></i>



                    </GridComponent>
                    </Reveal>
                    </Col>
                    <Col md="4">
                    <Reveal effect="fadeInRight" duration={2500}>
                    <GridComponent>
                    <i data-tip="React.js"class="fab fa-react fa-7x"></i>
                    <br></br>
                    <br></br>
                    <i data-tip="+Bootstrap, SQL, MongoDB, Express, Firebase and more! "class="fab fa-rebel fa-7x"></i>

                    
                    </GridComponent>
                    </Reveal>
                    </Col>
                    
                    
                    </Row>
                    <ReactTooltip place="top" type="dark" effect="float"/>
                    </Container>
                
                </div>
            </div>
        </Parallax>
        <TextBox>
            {/* <div class="footer">
            <h6>© 2019 Robby Kurle. All Rights Reserved</h6>
          </div> */}
          </TextBox>
        
    </div>
)

export default Portfolio;