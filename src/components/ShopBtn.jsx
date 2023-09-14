import React from "react";
import rightArrow from "../images/iconsax-linear-arrowright-2.svg";

function ShopBtn() {
  return (
    <a
      href="#"
      className="btn d-flex justify-content-around align-items-center shop-btn position-relative"
    >
      <div className="back-gold d-flex align-items-center ps-2">
        <img src={rightArrow} alt="right-arrow" />
      </div>
      <p className="shop-text">Shop now</p>
    </a>
  );
}

export default ShopBtn;
