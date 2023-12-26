/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="containerFooter">
        <Row>
          <Col className="contactFooter">
            <img
              src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/themes/woodmart/images/wood-logo-dark.svg"
              alt="..."
            />
            <p>
              Condimentum adipiscing vel neque <br /> dis nam parturient orci{" "}
              <br /> at scelerisque neque dis <br /> nam parturient.
            </p>
            <div className="contact">
              <div className="location">
                <FaLocationArrow />
                <b>451 Wall Street, UK, London</b>
              </div>
              <div className="phone">
                <IoMdPhonePortrait />
                <b>Phone: (+994)55-713-52-90</b>
              </div>
              <div className="message">
                <BiSolidMessageRoundedCheck />
                <b>mehemmed.qardasov2003@gmail.com</b>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="postFooter">
            <div className="decorSubject">
              <img
                src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/blog-post-hand-made-3-opt-75x60.jpg"
                alt="..."
              />
              <div className="Subject">
                <p>
                  Minimalist Japanese- <br />
                  inspired furniture <br /> <b>June 22, 2017</b>
                </p>
              </div>
            </div>
            <hr />
            <div className="decorSubject">
              <img
                src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/blog-post-hand-made-2-opt-75x60.jpg"
                alt="..."
              />
              <div className="Subject">
                <p>
                  New home decor from <br />
                  John Doerson <br /> <b>June 16, 2017</b>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="storiesFooter">
            <h4>OUR STORIES</h4>
            <a href="#">New York</a>
            <a href="#">London SF</a>
            <a href="#">Cockfosters BP</a>
            <a href="#">Los Angeles</a>
            <a href="#">Chicago</a>
            <a href="#">Las Vegas</a>
          </Col>
        </Row>
        <Row>
          <Col className="linksFooter">
            <h4>USEFUL LINKS</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Returns</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
            <a href="#">Latest News</a>
            <a href="#">Our Sitemap</a>
          </Col>
        </Row>
        <Row>
          <Col className="menuFooter">
            <h4>Footer Menu</h4>
            <a href="#">Instagram Profile</a>
            <a href="#">New Collection</a>
            <a href="#">Woman Dress</a>
            <a href="#">Contact Us</a>
            <a href="#">Latest News</a>
            <a href="#">Purchase Theme</a>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container className="cards">
        <p>
          <a href="#">WOODMART</a> © 2023 CREATED BY{" "}
          <a href="#">XTEMOS STUDIO</a>. PREMIUM E-COMMERCE SOLUTIONS.
        </p>
        <img
          src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/payments.png"
          alt="..."
        />
      </Container>
    </div>
  );
};

export default Footer;
