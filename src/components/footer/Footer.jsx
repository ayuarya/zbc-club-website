import React from "react";
import "./Footer.css";
import circle from "../../assets/footer-circle.svg";

import github from "../../assets/github-icon.png";
import instagram from "../../assets/instagram-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import youtube from "../../assets/youtube-icon.png";
import discord from "../../assets/discord-icon.png";

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
            <div className="footer-links">
              <img src={github} className="footer-icons" alt="github-icon" />
              <a href="https://github.com/Zero-Bugs-Club/">GitHub</a>
            </div>
            <div className="footer-links">
              <img
                src={linkedin}
                className="footer-icons"
                alt="linkedin-icon"
              />
              <a href="https://www.linkedin.com/company/zero-bugs-club/mycompany/">
                LinkedIn
              </a>
            </div>
            <div className="footer-links">
              <img
                src={instagram}
                className="footer-icons"
                alt="instagram-icon"
              />
              <a href="https://www.instagram.com/zbcvitc/">Instagram</a>
            </div>
            <div className="footer-links">
              <img src={discord} className="footer-icons" alt="discord-icon" />
              <a href="https://discord.gg/47r8MyTm">Discord</a>
            </div>
            <div className="footer-links">
              <img src={youtube} className="footer-icons" alt="youtube-icon" />
              <a href="https://www.youtube.com/@ZeroBugsClub">YouTube</a>
            </div>
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
