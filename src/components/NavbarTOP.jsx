import "./NavbarTOP.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

const NavbarTOP = () => {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto leftSide">
            <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Deutsch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Turkish</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Country" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                United States (USD)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Deutschland (EUR)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Turkish (TL)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="rightSide">
            <div className="icons">
              <Nav.Link href="#">
                <FaFacebook style={{ color: "white" }} />
              </Nav.Link>
              <Nav.Link href="#">
                <FaTwitter style={{ color: "white" }} />
              </Nav.Link>
              <Nav.Link href="#">
                <FaInstagram style={{ color: "white" }} />
              </Nav.Link>
              <Nav.Link href="#">
                <FaYoutube style={{ color: "white" }} />
              </Nav.Link>
              <Nav.Link href="#">
                <FaPinterest style={{ color: "white" }} />
              </Nav.Link>
            </div>
            <Nav.Link href="#"><FaRegEnvelope style={{color:'white', marginRight:"5px"}}/>NEWSLETTER</Nav.Link>
            <Nav.Link href="#">CONTACT US</Nav.Link>
            <Nav.Link href="#">FAQS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTOP;
