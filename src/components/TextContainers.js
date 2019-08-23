import React from "react";
import Reveal from 'react-reveal/Reveal'
import { Container, Row, Col } from "reactstrap";



export function TextContainerOne(props) {
    return (
        
        <div  style={{ width: "720px", opacity: 1}}
            >
            <div >
                <div >
                   <Reveal effect="fadeIn" duration={2000}>
                    <span style={{ fontSize: 25, color: "#0F1419",fontFamily:("Courier New", "Courier" )}}>{props.children}</span>
                    </Reveal>
                </div>
            </div>
    </div> 
 
    )
};

export function TextContainerTwo (props) {
    return (
            <Container>
                 <Reveal effect="fadeIn" duration={2500}>
                <Row>
                    <Col className="col-lg-6" >
                        <h2 style={{ textAlign: "center", fontSize: 35, fontFamily:("Courier New", "Courier" ) }}>{props.education}</h2>
                    </Col>
                    <Col className="col-lg-6" >
                        <div >
                            <strong style={{ paddingTop: 50, fontSize: 17, fontFamily:("Courier New", "Courier" ) }}>
                                <p>{props.children}</p>
                                
                            </strong>
                        </div>
                    </Col>

                </Row>
                </Reveal>
            </Container>

    );
}

export default TextContainerOne