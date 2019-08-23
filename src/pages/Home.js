import React from "react";
import { Parallax } from "react-parallax";
import styled from 'styled-components';
import { Row, Col } from "reactstrap";
import Reveal from 'react-reveal/Reveal';
import { TextBox } from '../components/TextBox';


const TypeStyle = styled.p`

  font-family: "Courier";
  font-size:45px;
  // margin: 10px 0 0 10px;
  position: absolute;
  top: 5%;
  left: 43%;
  bottom: 20%;
  white-space: nowrap;
  overflow: hidden;
  width: 3.9em;
  animation: type 1s steps(10, end); 

  @keyframes type{ 
    from { width: 0 } 
  } 
`
const TypeStyleTwo = styled.p`

  font-family: "Courier";
  font-size:45px;
  position: absolute;
  top: 80%;
  left: 25%;
  white-space: nowrap;
  overflow: hidden;
  width: 6em;
  animation: type 1.7s steps(10, end); 
@keyframes type{ 
    from { width: 0 } 
  } 
`

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Home = () => (
  <div style={styles}>


    <Parallax bgImage={require("../img/Typewriters.jpg")} strength={500}>
      <div style={{ height: 550 }}>
        <div>

          <TypeStyle >
            Hello_
            </TypeStyle>

          <TypeStyleTwo>
            I'm Robby.
            </TypeStyleTwo>

        </div>

      </div>
    </Parallax>

    <TextBox >
      <Row>


        <Col >
          <Reveal effect="fadeInRight" duration={3000}>
            <h2>I am a Web Developer</h2>

          </Reveal>
        </Col>

      </Row>
    </TextBox>

    <Parallax bgImage={require("../img/Robby Kurle.jpg")} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 550 }}>

      </div>
    </Parallax>


    <TextBox >
      <Row>


        <Col >
          <Reveal effect="fadeInRight" duration={2500}>
            <h2>This is a giant picture of me.</h2>

          </Reveal>
        </Col>

      </Row>
    </TextBox>

  </div>
);


export default Home;