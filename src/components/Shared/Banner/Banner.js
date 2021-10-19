import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner-img"
          src={'https://i.ibb.co/KbFvRXn/banner-1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption className="banner-details">
          <h3>Critical Care Center</h3>
          <h1>
            Eye Care Specialist <br /> Services That You <br /> Can Trust
          </h1>
          <button className="btn mt-4">
            <Link to="aboutUs" className="banner-btn">
              More About Us
            </Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 banner-img"
          src={'https://i.ibb.co/p4TbgDM/banner-3.jpg'}
          alt="Second slide"
        />
        <Carousel.Caption className="banner-details">
          <h3>Critical Care Center</h3>
          <h1>
            Eye Care Specialist <br /> Services That You Can Trust
          </h1>
          <button className="btn mt-4">
            <Link to="aboutUs" className="banner-btn">
              More About Us
            </Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={'https://i.ibb.co/sbHcRCb/banner-2.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption className="banner-details">
          <h3>Critical Care Center</h3>Ba
          <h1>
            Eye Care Specialist <br /> Services That You <br /> Can Trust
          </h1>
          <button className="btn mt-4">
            <Link to="aboutUs" className="banner-btn">
              More About Us
            </Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
