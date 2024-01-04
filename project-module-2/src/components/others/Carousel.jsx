import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/images/banner/carousel1.png";
import carousel2 from "../../assets/images/banner/carousel2.jpg";
import carousel3 from "../../assets/images/banner/carousel3.png";
import carousel4 from "../../assets/images/banner/carousel4.jpg";
import carousel5 from "../../assets/images/banner/carousel5.jpg";
import carousel6 from "../../assets/images/banner/carousel6.jpg";
import carousel7 from "../../assets/images/banner/carousel7.png";
import carousel8 from "../../assets/images/banner/carousel8.png";
import carousel9 from "../../assets/images/banner/carousel9.png";
import carousel10 from "../../assets/images/banner/carousel10.jpg";

function UncontrolledExample() {
  return (
    <Carousel data-bs-theme="dark" className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel8}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={carousel10}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
