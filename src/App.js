import Container from "react-bootstrap/Container";
import teamImg from "./images/emf-2022-jpegfull-120-copy-2.png";
import "./App.css";

function App() {
  return (
    <>
      <Container fluid>
        <section className="d-flex justify-content-center section-a">
          <div className="top-image-wrapper">
            <img src={teamImg} className="team-photo" alt="team" />
            <div className="rotated-text">
              <p>
                we are official PARTNER OF <br/> Austria Minifootball National Team
              </p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default App;
