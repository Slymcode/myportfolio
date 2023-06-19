import React from "react";
import "./about.css";
import ME from "../../assets/me-about2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
        </div>
      </div>
      <div className="about__me__aux">
        <p>
          Full Stack Software Developer with 8+ years of work experience across
          technical, educational, commerce, health, logistics, construction, and
          finance sectors using a variety of technologies such as Javascript,
          Nodejs, TypeScript, and PHP with expertise in frontend and backend
          development. I’m a solution-driven web developer who has built and
          also led teams of very smart people in creating and delivering
          user-centric applications and solutions. I thrive in a fast-paced
          environment and I follow industry standards and best practices in all
          projects, implementing SOLID principles, CLEAN architecture, MVVM, MVI
          or MVC, Design patterns, Test Driven Development for scalability,
          Continuous Integration and Delivery, and Agile Best Practices. I also
          gained hands-on expertise in REST APIs.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
