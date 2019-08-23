import React from 'react';
import { Parallax } from 'react-parallax'
import TextBox from "../components/TextBox"
import Reveal from "react-reveal/Reveal"
import { TextContainerOne, TextContainerTwo } from '../components/TextContainers'


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    padding: 10,
    paddingTop: 50,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

};
const image1 =
    "https://img.freepik.com/free-photo/soft-cloudy-is-gradient-pastel-abstract-sky-background-sweet-color_6529-1434.jpg?size=626&ext=jpg";

const image3 =
    "https://img.freepik.com/free-photo/soft-cloudy-is-gradient-pastel-abstract-sky-background-sweet-color_6529-1434.jpg?size=626&ext=jpg";


const About = () => (
    <div style={styles}>

        <Parallax bgImage={image1} strength={500}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>
                    <Reveal effect="fadeIn" duration={2000}>
                        <TextContainerOne>
                            <p>I am a full stack web developer in awe of the power of technology and the good it can do for people. I love learning. I love creating. I love making people laugh. I believe in making visually pleasing, responsive and entertaining applications with everyday utility.
                            </p>
                            <p>Let's work together!</p>
                        </TextContainerOne>
                    </Reveal>

                </div>
            </div>
        </Parallax>

        <TextBox tagline="Superhero Uncle."></TextBox>
        <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>
                    <div style={{ paddingBottom: 30 }}>

                        <TextContainerTwo style={{ height: 200 }} education="Education">
                            <p>University of Denver, Certification in Full-Stack Web Development.</p>
                            <br></br>
                            <p>Canterbury English TEFL, Madrid. Certification in Teaching English as a foreign language.</p>
                            <br></br>
                            <p>University of Florida, Bachelor of Arts, History. Cum Laude.</p>
                        </TextContainerTwo>

                    </div>



                </div>
            </div>
        </Parallax>

        <TextBox/>
           
        
    </div>
)

export default About;