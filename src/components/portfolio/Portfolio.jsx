import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p1.jpg";
import IMG2 from "../../assets/p2.jpg";
import IMG3 from "../../assets/p3.jpg";
import IMG4 from "../../assets/p4.jpg";
import IMG5 from "../../assets/p5.jpg";
import IMG6 from "../../assets/p6.jpg";

/*
Welcome to my UI/UX portfolio, built with React.js. This portfolio showcases my skills in 
user-centered design and front-end development. 
It includes a selection of projects that demonstrate my ability to create intuitive and 
visually appealing interfaces.  The portfolio is built using React, a JavaScript library 
for building user interfaces. It is fully responsive and optimized for performance. 
It also includes accessibility features to ensure that it is inclusive for all users.  
Please feel free to explore the code and leave any feedback or suggestions. 
Thank you for visiting and I hope you enjoy my portfolio! If you have any feedback or suggestions, 
please don't hesitate to reach out to me via email at rejoiceoedokpayi@gmail.com or by connecting with 
me on LinkedIn https://www.linkedin.com/in/rejoicedokpayi/
*/
const data = [
  {
    id: 1,
    image: IMG1,
    title: "HooBank App",
    github: "https://github.com/Slymcode/hoobank",
    demo: "https://hoobank-jade.vercel.app/",
    desc: "HooBank is  reactjs based responsive payment and invoicing website. It is built with vite, a fast build tool and development server often used with React to create modern web applications.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Youtube Clone App",
    github: "https://github.com/Slymcode",
    demo: "https://mtube-web.onrender.com/",
    desc: "Youtube clone using React, Node, MongoDB and Firebase. MERN stack video app tutorial with Redux Toolkit, JWT Cookies and Firebase Storage.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Responosive Restaurant Website with  Modern UI",
    github: "https://github.com/Slymcode/Gericht",
    demo: "https://gericht-rho.vercel.app/",
    desc: "Modern Restaurant website that features reactjs components, flex, grid layout and animation",
  },
  {
    id: 4,
    image: IMG4,
    title: "Realtor",
    github: "https://github.com/Slymcode/realestateapp",
    demo: "https://realestateapp-pied.vercel.app/",
    desc: "Realtor - an amazing Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page with an image carousel, and much more, built with react and nextjs and rapidApi.",
  },
  {
    id: 5,
    image: IMG5,
    title: "GPT-3 OpenAI",
    github: "https://github.com/Slymcode/GPT-3",
    demo: "https://gpt-3-nine-ashy.vercel.app/",
    desc: "A GPT-3 OpenAI modern looking and fully responsive website built with reactjs",
  },
  {
    id: 6,
    image: IMG6,
    title: "Portfolio App",
    github: "https://github.com/Slymcode/portfolio",
    demo: "https://portforlio-62zo.onrender.com",
    desc: "Portfolio app is a modern responsive personal resume built using React and NextJS.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, desc }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__flex">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} sty />
                </div>
                <div>
                  <div className="content-wrap">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div
                      className="portfolio__item-cta"
                      style={{ marginTop: "20px" }}
                    >
                      <a href={github} className="btn" target="_blank">
                        Source
                      </a>
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
