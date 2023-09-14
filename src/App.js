import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import teamImg from "./images/emf-2022-jpegfull-120-copy-2.png";
import "./App.css";

function App() {
  return (
    <>
      <section className="d-flex justify-content-center section-a">
        <Container className="golden-frame">
          <div className="top-image-wrapper">
            <Image src={teamImg} className="team-photo" alt="team" fluid />
          </div>          
            <p className="rotated-text">
              we are official PARTNER OF <br /> Austria Minifootball National
              Team
            </p>          
        </Container>
      </section>
    </>
  );
}

export default App;
