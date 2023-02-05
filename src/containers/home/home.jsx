import React, { useEffect, useRef } from "react";

import "./home.css";
import Navbar from "../../components/navbar/navbar";
import homebg from "../../assets/homebg.svg";
import homebug from "../../assets/homebug.svg";
import zbchome from "../../assets/zbchome.svg";
import Accordion from "../../components/accordion/Accordion";

import Footer from "../../components/footer/Footer";

import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Coders", "Developers", "Innovators", "Engineers"],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-header">
        <img className="home-bg" src={homebg} alt="homebg" />
        <img className="home-bug" src={homebug} alt="" />
        <div className="home-flex">
          <img src={zbchome} className="home-section-img" alt="" />
          <h1 className="auto-type font-bold text-md md:text-4xl">
            We're <span ref={el}></span>
          </h1>
        </div>
      </div>
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
