import React from "react";
import Carousel from "react-bootstrap/Carousel";
import news1 from "./assets/news1.png";
import news2 from "./assets/news2.png";
import news3 from "./assets/news3.png";
const News = () => {
  return (
    <>
    <h1 style={{textAlign:"center",margin:"10px"}}>Actualités</h1>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          src={news1}
          alt="slide"
          text="First slide"
          style={{ width: "1500px", height: "650px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src={news2}
          alt="slide"
          text="2nd slide"
          style={{ width: "1500px", height: "650px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={news3}
          alt="slide"
          text="3rd slide"
          style={{ width: "1500px", height: "650px" }}
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default News;
