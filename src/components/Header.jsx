import React, { useState } from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import { IoIosCall } from "react-icons/io";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);
  return (
    <Container className="headerContainer">
      <div className="handle">
        <Button variant="primary" onClick={handleShow}>
          <img
            src="https://www.svgrepo.com/show/509382/menu.svg"
            alt="..."
            className="menuIcon"
            onClick={handleShow}
          />
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Contact with us</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvasBody">
            <div className="left">
              <div className="call">
                <IoIosCall className="callIcon" style={{ fontSize: "45px" }} />
                <div className="callFree">
                  <p>Call toll-free</p>
                  <b>+994 12 345 67 89</b>
                </div>
              </div>
              <div className="question">
                <p>Any questions</p>
                <b>hand@made.com</b>
              </div>
            </div>
            <div className="right">
              <div className="login">LOGIN / REGISTER</div>
              <div className="icons">
                <CiSearch style={{ fontSize: "25px" }} />
                <CiHeart style={{ fontSize: "25px" }} />
                <FaShoppingCart style={{ fontSize: "25px" }} />
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="left">
        <div className="call">
          <IoIosCall className="callIcon" style={{ fontSize: "45px" }} />
          <div className="callFree">
            <p>Call toll-free</p>
            <b>+994 12 345 67 89</b>
          </div>
        </div>
        <div className="question">
          <p>Any questions</p>
          <b>hand@made.com</b>
        </div>
      </div>
      <img
        src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/themes/woodmart/images/wood-logo-dark.svg"
        alt="woodmart"
      />
      <div className="right">
        <div className="login">LOGIN / REGISTER</div>
        <div className="icons">
          <CiSearch style={{ fontSize: "25px" }} />
          <CiHeart style={{ fontSize: "25px" }} />
          <FaShoppingCart style={{ fontSize: "25px" }} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
