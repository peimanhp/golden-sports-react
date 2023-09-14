import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import teamImg from "./images/emf-2022-jpegfull-120-copy-2.png";
import goldenCircle from "./images/ellipse-80.svg";
import rightArrow from "./images/iconsax-linear-arrowright-2.svg";
import suitWrapper from "./images/suitWrapper.png";
import addIcon from "./images/iconsax-linear-add.svg";
import suitTitle from "./images/union.svg";
import redSuit from "./images/red-suit.png";
import "./App.css";

function App() {
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
        <Container>
          <h2>2022 COLLECTION</h2>
          <Row xs={1} md={2} lg={4} xxl={5}>
            <Col className="d-flex justify-content-center">
              <div className="suit-div">
                <img src={suitWrapper} alt="suit-wrapper" />
                <img
                  className="suit-title-wrapper"
                  src={suitTitle}
                  alt="suit-title"
                />
                <p className="suit-title">new collection</p>
                <img className="suit" src={redSuit} />
                <p className="suit-name">TKG-2203</p>
                <p className="suit-price">€389.00 - €939.00</p>
                <button className="plus-btn d-flex justify-content-center align-items-center">
                  <img src={addIcon} alt="add-icon" />
                </button>
              </div>
            </Col>
            <Col className="text-center bg-danger">2 of 5</Col>
            <Col className="text-center bg-danger">3 of 5</Col>
            <Col className="text-center bg-danger">4 of 5</Col>
            <Col className="text-center bg-danger">5 of 5</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default App;
