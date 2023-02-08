import React from "react";
import "./Missions.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
function Missions() {
  return (
    <React.Fragment>
      <Navbar className="missions-navbar" />
      <div className="content-head">
        <span className="tagline">Our Story</span>
        <p>
          This club was formed in 2020 as a small group of enthusiastic coders
          who wanted to defy expectations and push the limits of their
          potential. Now this club has over _ members, has finished more than _
          projects and successfully conducted more than _ events. This club
          stands as a symbol of passion and dedication of students who wish to
          make an impactful difference.
        </p>
      </div>
      <div className="shape-rect1"></div>
      <div className="shape-rect2"></div>
      <div className="shape-rect3"></div>
      <div className="shape-rect4"></div>
      <div className="shape-rect5"></div>
      <div className="shape-rect6"></div>
      <div className="content-foot">
        <span className="tagger">Our Mission</span>
        <p>
          We are dedicated to learn and create new things at every single
          opportunity we get. We are passionate about our goals and are ready to
          help any enthusiastic coder who is ready to work with the club. We
          consistently organize fresh and interesting events to engage ourselves
          in many different ways as well as to build our community. We are
          committed to design and build innovative projects using modern and
          sophisticated tools and frameworks.
        </p>
      </div>
      <div className="content">
        <span className="value">Values We Respect</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <span className="col_title">VALUE NO.1</span>
            <br></br>
            <span className="col_subtitle">Respecting each other</span>
            <br></br>
            <p>
              We shoulder the happiness of our employees and clients by treating
              everyone with dignity.
            </p>
          </div>

          <div className="column">
            <span className="col_title">VALUE NO.2</span>
            <br></br>
            <span className="col_subtitle">Growing Together</span>
            <p>
              We are just like trees in the forest, our professional and
              personal growth is fast thanks to the positive competition.
            </p>
          </div>

          <div className="column">
            <span className="col_title">VALUE NO.3</span>
            <br></br>
            <span className="col_subtitle">No one is fighting alone</span>
            <br></br>
            <p>
              We never leave our teammates to address a challenge by their own.
              We help each other and act as a team.
            </p>
          </div>

          <div className="column">
            <span className="col_title">VALUE NO.4</span>
            <br></br>
            <span className="col_subtitle">Clear communication</span>
            <br></br>
            <p>
              With the team and the clients, we speak about the objectives and
              expectations and never leave a room for misconceptions.
            </p>
          </div>

          <div className="column">
            <span className="col_title">VALUE NO.5</span>
            <br></br>
            <span className="col_subtitle">Eliminating Chaos</span>
            <br></br>
            <p>
              We defeat the chaos through well-regulated and tailored project
              execution processes.
            </p>
          </div>

          <div className="column">
            <span className="col_title">VALUE NO.6</span>
            <br></br>
            <span className="col_subtitle">Teamwork, not man-hours</span>
            <br></br>
            <p>
              Our value is team's knowledge and experience. We deliver
              full-service webdesign and don't accept an outstanding business
              model.
            </p>
          </div>
        </div>
        <Footer />
      </div>
      a
    </React.Fragment>
  );
}
export default Missions;
