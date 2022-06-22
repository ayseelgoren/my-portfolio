import React, { useContext, useRef, useState } from "react";
import { themeContext } from "../../Context";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b8yeazn",
        "template_7o5brim",
        form.current,
        "LP_5junhyX8JzF24q"
      )
      .then((result) => {
        setDone(true);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        setTimeout(() => {
          setDone(false);
        }, 2000);
      });
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="user"
            name="user_name"
            placeholder="Name"
          />
          <input
            type="email"
            className="user"
            name="user_email"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for connection me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
