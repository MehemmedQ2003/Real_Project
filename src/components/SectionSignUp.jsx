import React from "react";
import "./SectionSignUp.scss";
import Container from "react-bootstrap/Container";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const SectionSignUp = () => {
  return (
    <div className="sectionSignUp">
      <Container className="containerSign">
        <div className="title">
          <h5>Laoreet in vitae amet</h5>
          <h1>
            Hey you, Sign Up <br /> Connect to woodmart
          </h1>
        </div>
        <div className="formSign">
          <input type="email" placeholder="Your email address" />
          <button className="btnSign">Sign Up</button>
        </div>
        <div className="iconSign">
          <FaFacebookF className="icons fcb"/>
          <FaInstagram className="icons ins"/>
          <FaTwitter className="icons twt"/>
          <FaLinkedin className="icons lnk"/>
          <FaPinterest className="icons pnt"/>
        </div>
      </Container>
    </div>
  );
};

export default SectionSignUp;
