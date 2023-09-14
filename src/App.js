import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SportSuit from "./components/SportSuit";

import teamImg from "./images/emf-2022-jpegfull-120-copy-2.png";
import goldenCircle from "./images/ellipse-80.svg";
import rightArrow from "./images/iconsax-linear-arrowright-2.svg";
import redSuit from "./images/red-suit.png";
import yellowShirt from "./images/yellow-shirt.png";
import whiteShirt from "./images/white-shirt.png";
import blueShirt from "./images/blue-shirt.png";
import greenShirt from "./images/green-shirt.png";
import "./App.css";

function App() {
  const [suits, setSuits] = useState([
    {
      id: 1,
      title: "New Collection",
      image: redSuit,
      name: "TKG-2203",
      price: "€389.00 - €939.00",
    },
    {
      id: 2,
      title: "New Collection",
      image: yellowShirt,
      name: "TKG-2203",
      price: "€389.00 - €939.00",
    },
    {
      id: 3,
      title: "New Collection",
      image: whiteShirt,
      name: "TKG-2203",
      price: "€389.00 - €939.00",
    },
    {
      id: 4,
      title: "New Collection",
      image: blueShirt,
      name: "TKG-2203",
      price: "€389.00 - €939.00",
    },
    {
      id: 5,
      title: "New Collection",
      image: greenShirt,
      name: "TKG-2203",
      price: "€389.00 - €939.00",
    },
  ]);
  
  
  return (
    <>
      <section className="section-a">
        <Container className="golden-frame">
          <div className="top-image-wrapper">
            <Image src={teamImg} className="team-photo" alt="team" fluid />
          </div>
          <p className="rotated-text">
            we are official PARTNER OF <br /> Austria Minifootball National Team
          </p>
        </Container>
        <Container className="d-flex flex-column align-items-center">
          <div className="site-title">
            <h1 className="m-0">GOLDENSHOP</h1>
            <h3 className="text-end">
              makes your club <span>shine!</span>
            </h3>
            <img
              className="golden-circle"
              src={goldenCircle}
              alt="golden-circle"
            />
          </div>
          <a
            href="#"
            className="btn d-flex justify-content-around align-items-center shop-btn"
          >
            <div className="back-gold d-flex justify-content-center align-items-center">
              <img src={rightArrow} alt="right-arrow" />
            </div>
            <p className="shop-text">Shop now</p>
          </a>
        </Container>
        <Container className="p-0">
          <hr className="line" />
        </Container>
      </section>
      <section className="section-b">
        <Container className="mb-5">
          <h2>2022 COLLECTION</h2>
          <Row className="row-gap-5" xs={1} md={2} lg={4} xxl={5}>
            <SportSuit sportSuits={suits} />
          </Row>
        </Container>
        <Container className="p-0">
          <hr className="line" />
        </Container>
      </section>
    </>
  );
}

export default App;
