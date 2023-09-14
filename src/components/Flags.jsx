import React from 'react'
import Col from "react-bootstrap/Col";
import goldRing from "../images/gold-ring.svg";

function Flags({flags}) {
  return flags.map((flag) => (
    <Col>
      <div className="flag-wrapper mx-auto">
        <img className="gold-ring-flag" src={goldRing} alt="gold-ring" />
        <img className="flag" src={flag} alt="flag1" />
      </div>
    </Col>
  ));
}

export default Flags