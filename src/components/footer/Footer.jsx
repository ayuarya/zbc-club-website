import React from "react";
import "./Footer.css";
import circle from "../../assets/footer-circle.svg";

function Footer() {
  return (
    <div className="main-footer">
      <div className="left-footer">
        <h1>
          Want to work
          <br /> with us?
        </h1>
        <span>
          Stop thinking of something when you can have it! Contact us
          <br /> now and make your current dream your future reality!
        </span>
      </div>
      <div className="right-footer">
        <div className="footer-email">
          <h4>SEND US A NOTE</h4>
          <span>zbcvitc@gmail.com</span>
        </div>
        <div className="footer-accounts">
          <h4>FOLLOW US</h4>
          <div>
            <a href="https://www.google.com">GitHub</a>
            <a href="https://www.google.com">LinkedIn</a>
            <a href="https://www.google.com">Instagram</a>
            <a href="https://www.google.com">Discord</a>
            <a href="https://www.google.com">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-image">
        <img src={circle} alt="image" />
      </div>
    </div>
  );
}

export default Footer;
