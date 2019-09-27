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





const About = () => (
    <div style={styles}>

        <Parallax bgImage={require("../img/Blue:green sky.jpg")} strength={500}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>
                    <Reveal effect="fadeIn" duration={2000}>
                        <TextContainerOne>
                            <p>I am a Full Stack Web Developer focused on finding effective solutions to both front-end and back-end problems. </p>
                            <p>Whether it's building a sleek looking webpage, working with tons of data behind the scenes, or putting it all together, I got you covered.</p>
                            <p> I hope to make visually pleasing, approachable applications with everyday utility. I love learning. I love creating. I love making people laugh. I look forward to any challenge within the developer community.
                                It is my goal to work with passionate and brilliant individuals striving to create solutions to to any given problem. </p>

                            <p>Let's work together!</p>
                        </TextContainerOne>
                    </Reveal>

                </div>
            </div>
        </Parallax>

        <TextBox />

        <Parallax bgImage={require("../img/Blue:green sky.jpg")} blur={{ min: -1, max: 3 }}>
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

        <TextBox />


    </div>
)

export default About;