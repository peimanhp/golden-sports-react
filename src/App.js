import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import teamImg from "./images/emf-2022-jpegfull-120-copy-2.png";
import goldenCircle from "./images/ellipse-80.svg";
import rightArrow from "./images/iconsax-linear-arrowright-2.svg";
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
          <a className="btn d-flex justify-content-around align-items-center shop-btn">
            <div className="back-gold d-flex justify-content-center align-items-center">
              <img src={rightArrow} />
            </div>
            <p className="shop-text">Shop now</p>
          </a>
        </Container>
        <Container className="p-0">
          <hr className="line"/>
        </Container>
      </section>
    </>
  );
}

export default App;
