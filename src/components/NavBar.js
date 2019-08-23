import React from 'react';
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom';

const NavStyled = styled.nav`
height: 100px
background-color: #394D6B;
color: white;
font-size: 30px;
padding-top: 30px
font-family: "Courier New", Courier, monospace;
font-size: 29px;
letter-spacing: 2.2px;
word-spacing: 2.4px;
margin-bottom: .25em;
font-weight: 700;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;

`
class NavBar extends React.Component {

    render() {


        return (
            <div>
                <NavStyled className="navbar navbar-expand-lg navbar-dark" >
                    <a className="navbar-brand" href="/"><h1>Robby Kurle</h1> </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span></span>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
                        <ul className="navbar-nav" >
                            <li className="nav-link">

                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    style={{ fontSize: "23px" }}
                                    isActive={() => window.location.pathname === "/about"}
                                    to="/about">
                                    About
                        </NavLink>

                            </li>
                            <li className="nav-link">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    style={{ fontSize: "23px" }}
                                    isActive={() => window.location.pathname === "/portfolio"}
                                    to="/portfolio">
                                    Projects
                        </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    style={{ fontSize: "23px" }}
                                    isActive={() => window.location.pathname === "/contact"}
                                    to="/contact">
                                    Contact
                        </NavLink>
                            </li>
                        </ul>
                        <a href="https://github.com/rfnkurle"><img src={require("../img/gihub.png")} style={{ height: 45, width: 35, paddingBottom: 10 }} alt="GitHub" /></a>
                        <br></br>
                        <a href="https://www.linkedin.com/in/robbykurle/"><img src={require("../img/linkedin-logo.jpg")} style={{ height: 38, width: 28, margin: 10, paddingBottom: 10 }} alt="LinkedIn" /></a>

                    </div>
                </NavStyled>

            </div>
        );
    }
}

export default NavBar;