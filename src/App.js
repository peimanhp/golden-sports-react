import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SportSuit from "./components/SportSuit";

import teamImg from "./images/emf-2022-jpegfull-120-copy-2.png";
import goldenCircle from "./images/ellipse-80.svg";
import redSuit from "./images/red-suit.png";
import yellowShirt from "./images/yellow-shirt.png";
import whiteShirt from "./images/white-shirt.png";
import blueShirt from "./images/blue-shirt.png";
import greenShirt from "./images/green-shirt.png";
import tenPercentImg from "./images/10pic.png";
import "./App.css";
import ShopBtn from "./components/ShopBtn";

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
          <ShopBtn />
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
      <section className="section-c">
        <Container>
          <Row className="row-gap-4" xs={1} md={1} lg={2}>
            <Col className="text-center">
              <Image src={tenPercentImg} alt="10percent" fluid />
            </Col>
            <Col className="text-section-c px-5">
              <h2 className="title-section-c">NICHT VERPASSEN !</h2>
              <p className="dec-section-c">
                Vereine erhalten einen Nachlass von 10% vom Listenpreis.
                Ausrüsterverträge können einen höheren Rabatt beinhalten.
              </p>
              <ShopBtn />
            </Col>
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
