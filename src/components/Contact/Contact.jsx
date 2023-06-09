import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x9r0gxi",
        "template_k10uodz",
        form.current,
        "uo3dZqhqmvE_Egr8N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container">
        <div className="contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>mcjerry73@gmail.com</h5>
              <a href="mailto:mcjerry73@gmail.com" target="_blank">
                Send a message
              </a>
            </article>

            <article className="contact__option">
              <BsLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>Jeremiah Uzoma .C</h5>
              <a
                href="https://www.linkedin.com/in/jeremiah-chike/"
                target="_blank"
              >
                Send a message
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>mcjerry73@gmail.com</h5>
              <a
                href="https://api.whatsapp.com/send?phone=2347066340970"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Your message"
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
