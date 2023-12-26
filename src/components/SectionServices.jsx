/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SectionServices.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegPaperPlane } from "react-icons/fa6";
import { SiArkecosystem } from "react-icons/si";
import { MdSmartToy } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

const SectionServices = () => {
  return (
    <Container className="sectionServices">
      <div className="title">
        <h5>Wooden Accessories</h5>
        <h3>Hand Made Service</h3>
        <p>Visit our shop to see amazing creations from our designers</p>
      </div>

      <div className="servicesCreation">
        <Container>
          <Row>
            <Col xl={3} md={6} sm={12} className="creations crt1">
              <div className="creation">
                <div className="creationIcon">
                  <FaRegPaperPlane />
                </div>
                <div className="cardTitle">
                  <h4>Ullamcorper</h4>
                  <p>
                    Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                    Ipsum dolor sit amet
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
            </Col>
            <Col xl={3} md={6} sm={12} className="creations crt2">
              <div className="creation">
                <div className="creationIcon">
                  <SiArkecosystem />
                </div>
                <div className="cardTitle">
                  <h4>Tempor</h4>
                  <p>
                    Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                    Ipsum dolor sit amet
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
            </Col>
            <Col xl={3} md={6} sm={12} className="creations crt3">
              <div className="creation">
                <div className="creationIcon">
                  <MdSmartToy />
                </div>
                <div className="cardTitle">
                  <h4>Dictums</h4>
                  <p>
                    Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                    Ipsum dolor sit amet
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
            </Col>
            <Col xl={3} md={6} sm={12} className="creations crt4">
              <div className="creation">
                <div className="creationIcon">
                  <BsBagCheckFill />
                </div>
                <div className="cardTitle">
                  <h4>Consectetur</h4>
                  <p>
                    Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                    Ipsum dolor sit amet
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default SectionServices;
