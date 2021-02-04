import React from "react";
import "../BodyContent/BodyMain.css";
import { Carousel } from "react-bootstrap";

export const BodyMain = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src="1.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="2.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="3jpg.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
