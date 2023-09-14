import React from "react";
import Col from "react-bootstrap/Col";

import suitWrapper from "../images/suitWrapper.png";
import addIcon from "../images/iconsax-linear-add.svg";
import suitTitle from "../images/union.svg";

function SportSuit({ sportSuits }) {
  return (
  sportSuits.map((suit) => (
    <Col key={suit.id} className="d-flex justify-content-center">
      <div className="suit-div">
        <img src={suitWrapper} alt="suit-wrapper" />
        <img className="suit-title-wrapper" src={suitTitle} alt="suit-title" />
        <p className="suit-title">{suit.title}</p>
        <img className="suit" src={suit.image} />
        <p className="suit-name">{suit.name}</p>
        <p className="suit-price">{suit.price}</p>
        <button className="plus-btn d-flex justify-content-center align-items-center">
          <img src={addIcon} alt="add-icon" />
        </button>
      </div>
    </Col>
  ))
  )
}

export default SportSuit;
