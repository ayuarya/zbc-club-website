import React from "react";
import getaquotecircle from "../../assets/get-a-quote-circle.svg";
import { HiX } from "react-icons/hi";
import "./contact.css";
import { motion } from "framer-motion";

const Contact = ({ toggle }) => {
  return (
    <motion.div className="get-a-quote-contact" whileInView={{x: [300,0]}} transition={{duration: 0.75, ease: "easeInOut"}}>
      <HiX
        style={{ cursor: "pointer" }}
        className="absolute right-5 top-5 mb-10 text-3xl"
        onClick={() => toggle(false)}
        whileInView={{x: [300,0]}} transition={{duration: 0.75, ease: "easeInOut"}}
      />
      <div className="my-5">
        <div>
          <h2 className="font-bold text-xl md:text-3xl lg:text-5xl my-2">Get a Quote</h2>
          <p>
            Stop thinking of something when you can have it! contact us now and
            make a rocket out of your website.
          </p>
        </div>
        <form action="" className="flex flex-col contact-form">
          <input className="contact-input mt-5" type="text" placeholder="Your Name*" />
          <input className="contact-input" type="email" placeholder="Your Email*" />
          <textarea
            name="message"
            id="message"
            placeholder="Message*"
            cols="30"
            rows="5"
            className="contact-input"
          ></textarea>
          <div className="contact-submit">
            <p className="w-60 text-xs">
              By clicking send message you are agreeing to the <u>Privacy Policy</u>
            </p>
            <button type="submit" className="md:text-lg submit-btn">Send Message</button>
          </div>
        </form>
        <div>
          <h4 className="font-bold text-blue-500">OR SEND US A NOTE VIA EMAIL</h4>
          <p>zbcvitc@gmail.com</p>
        </div>
      </div>
      <img
        src={getaquotecircle}
        className="absolute right-0 bottom-0"
        alt="circle-img"
      />
    </motion.div>
  );
};

export default Contact;
