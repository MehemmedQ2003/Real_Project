/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SectionProducts.scss";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";

const SectionProducts = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="sectionProducts">
      <div className="title">
        <h5>Wooden Accessories</h5>
        <h3>Featured Products</h3>
        <p>Visit our shop to see amazing creations from our designers</p>
      </div>
      <ul className="productList">
        <li>
          <a href="#" className="active">
            Best Sellers
          </a>
        </li>
        <li>
          <a href="#">Featured</a>
        </li>
        <li>
          <a href="#">Sales</a>
        </li>
      </ul>

      <div className="slickSlider">
        <Slider {...settings} className="sliders">
          <div className="slider sld1">
            <div className="intoSlider">
              <div className="imgScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt-430x491.jpg"
                  alt="..."
                />
                <div className="overlay">
                  <div className="overlayIcons">
                    <a href="#" className="icons"><RiShoppingCartLine/></a>
                    <a href="#" className="icons"><CiSearch/></a>
                    <a href="#" className="icons"><DiGitCompare/></a>
                    <a href="#" className="icons"><CiHeart/></a>
                  </div>
                </div>
              </div>
              <div className="productPrice">
                <h5>Wall Photo</h5>
                <a href="#">Decor</a>
                <div className="icons">
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </div>
                <p className="price">$50.00</p>
              </div>
            </div>
          </div>
          <div className="slider sld2">
            <div className="intoSlider">
              <div className="imgScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-3-opt-430x491.jpg"
                  alt="..."
                />
                <div className="overlay">
                  <div className="overlayIcons">
                    <a href="#" className="icons"><RiShoppingCartLine/></a>
                    <a href="#" className="icons"><CiSearch/></a>
                    <a href="#" className="icons"><DiGitCompare/></a>
                    <a href="#" className="icons"><CiHeart/></a>
                  </div>
                </div>
              </div>
              <div className="productPrice">
                <h5>Mr Cactus</h5>
                <a href="#">Decor</a>
                <div className="icons">
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </div>
                <p className="price">$19.00</p>
              </div>
            </div>
          </div>
          <div className="slider sld3">
            <div className="intoSlider">
              <div className="imgScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-7-1-opt-430x491.jpg"
                  alt="..."
                />
                <div className="overlay">
                  <div className="overlayIcons">
                    <a href="#" className="icons"><RiShoppingCartLine/></a>
                    <a href="#" className="icons"><CiSearch/></a>
                    <a href="#" className="icons"><DiGitCompare/></a>
                    <a href="#" className="icons"><CiHeart/></a>
                  </div>
                </div>
              </div>
              <div className="productPrice">
                <h5>Decoration wooden wall</h5>
                <a href="#">Decor</a>
                <div className="icons">
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </div>
                <p className="price">$8.90</p>
              </div>
            </div>
          </div>
          <div className="slider sld4">
            <div className="intoSlider">
              <div className="imgScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-2-opt-430x491.jpg"
                  alt="..."
                />
                <div className="overlay">
                  <div className="overlayIcons">
                    <a href="#" className="icons"><RiShoppingCartLine/></a>
                    <a href="#" className="icons"><CiSearch/></a>
                    <a href="#" className="icons"><DiGitCompare/></a>
                    <a href="#" className="icons"><CiHeart/></a>
                  </div>
                </div>
              </div>
              <div className="productPrice">
                <h5>Hand bracelet</h5>
                <a href="#">Accessories</a>
                <div className="icons">
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </div>
                <p className="price">$40.00</p>
              </div>
            </div>
          </div>
          <div className="slider sld5">
            <div className="intoSlider">
              <div className="imgScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt-430x491.jpg"
                  alt="..."
                />
                <div className="overlay">
                  <div className="overlayIcons">
                    <a href="#" className="icons"><RiShoppingCartLine/></a>
                    <a href="#" className="icons"><CiSearch/></a>
                    <a href="#" className="icons"><DiGitCompare/></a>
                    <a href="#" className="icons"><CiHeart/></a>
                  </div>
                </div>
              </div>
              <div className="productPrice">
                <h5>Wall Clock</h5>
                <a href="#">Clocks</a>
                <div className="icons">
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </div>
                <p className="price">$32.00</p>
              </div>
            </div>
          </div>
          <div className="slider sld6">
            <div className="intoSlider">
              <div className="imgScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-4-opt-430x491.jpg"
                  alt="..."
                />
                <div className="overlay">
                  <div className="overlayIcons">
                    <a href="#" className="icons"><RiShoppingCartLine/></a>
                    <a href="#" className="icons"><CiSearch/></a>
                    <a href="#" className="icons"><DiGitCompare/></a>
                    <a href="#" className="icons"><CiHeart/></a>
                  </div>
                </div>
              </div>
              <div className="productPrice">
                <h5>Classic Bear</h5>
                <a href="#">Toys</a>
                <div className="icons">
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </div>
                <p className="price">$30.00</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default SectionProducts;
