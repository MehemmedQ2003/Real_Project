/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SectionCategories.scss";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";

const SectionCategories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1120,
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
    <Container className="sectionCategories">
      <div className="title">
        <h5>Wooden Accessories</h5>
        <h3>Featured Categories</h3>
        <p>Visit our shop to see amazing creations from our designers</p>
      </div>

      <div className="slickSlider">
        <Slider {...settings} className="sliders">
          <div className="slider sld1">
            <div className="intoSlider">
              <div className="imgScreen">
                <div className="overlayScreen">
                  <img
                    src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-6-opt.jpg"
                    alt="..."
                  />
                  <button className="btnCategories">Toys</button>
                </div>
                <div className="overlay">4 Products</div>
              </div>
            </div>
          </div>
          <div className="slider sld2">
            <div className="intoSlider">
              <div className="imgScreen">
                <div className="overlayScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-4-opt.jpg"
                  alt="..."
                />
                  <button className="btnCategories">Clocks</button>
                </div>
                <div className="overlay">5 Products</div>
              </div>
            </div>
          </div>
          <div className="slider sld3">
            <div className="intoSlider">
              <div className="imgScreen">
                <div className="overlayScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-5-opt.jpg"
                  alt="..."
                />
                  <button className="btnCategories">Accessories</button>
                </div>
                <div className="overlay">15 Products</div>
              </div>
            </div>
          </div>
          <div className="slider sld4">
            <div className="intoSlider">
              <div className="imgScreen">
                <div className="overlayScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2021/09/handmade-category-4.jpg"
                  alt="..."
                />
                  <button className="btnCategories">Decor</button>
                </div>
                <div className="overlay">12 Products</div>
              </div>
            </div>
          </div>
          <div className="slider sld1">
            <div className="intoSlider">
              <div className="imgScreen">
                <div className="overlayScreen">
                  <img
                    src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-6-opt.jpg"
                    alt="..."
                  />
                  <button className="btnCategories">Toys</button>
                </div>
                <div className="overlay">4 Products</div>
              </div>
            </div>
          </div>
          <div className="slider sld2">
            <div className="intoSlider">
              <div className="imgScreen">
                <div className="overlayScreen">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-4-opt.jpg"
                  alt="..."
                />
                  <button className="btnCategories">Clocks</button>
                </div>
                <div className="overlay">5 Products</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default SectionCategories;
