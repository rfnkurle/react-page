import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
    height: 90px
    background-color: #394D6B; 
    color: white;
    font-size: 30px;
    padding-top: 30px
    font-family: "Courier New", Courier, monospace;
font-size: 29px;
letter-spacing: 2.2px;
word-spacing: 2.4px;

font-weight: 700;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;

`

const IconStyle = styled.div`
height:110px
background-color: #394D6B;
margin-top: .5em;  
    text-align: center;



`

export function TextBox (props) {
    return (

        <TextStyle>
            {props.children}
        </TextStyle>
    )

}

export function LinksBox (props)  {
    return (
        <IconStyle>
            {props.children}
        </IconStyle>
    )
}


export default TextBox;

