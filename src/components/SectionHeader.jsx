/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SectionHeader.scss";
import Container from "react-bootstrap/Container";

const SectionHeader = () => {
  return (
    <div className="sectionHeader">
      <Container>
        <ul className="wrapper">
          <li className="list">
            <a href="#">Home</a>
          </li>
          <li className="list">
            <a href="#">Shop</a>
          </li>
          <li className="list">
            <a href="#">Blog</a>
          </li>
          <li className="list">
            <a href="#">Our Factory</a>
          </li>
          <li className="list">
            <a href="#">List Of Vendors</a>
          </li>
          <li className="list">
            <a href="#">Vendor Page</a>
          </li>
        </ul>
      </Container>

      <hr />

      <Container className="gridContainer">
        <div className="side">
          <div className="left1">
            <p>MATTIS LAOREET SAPIEN</p>
            <h1>
              Porta <br /> Consectetur <br /> Imperdiet <br /> Frigilla
            </h1>
            <a href="#">READ MORE</a>
          </div>
          <div className="right2">
            <p>Semper</p>
            <h3>
              Feugiat <br /> Scerelisque <br /> Imperdiet
            </h3>
            <a href="#">READ MORE</a>
          </div>
          <div className="right3">
            <p>Semper</p>
            <h3>
              Adispicing <br /> Sodales
            </h3>
            <a href="#">READ MORE</a>
          </div>
          <div className="right4"></div>
        </div>
      </Container>
    </div>
  );
};

export default SectionHeader;
