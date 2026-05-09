import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPython,
  FaReact,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

import "./App.css";

export default function Portfolio() {

  const skills = [
    { name: "Python", percent: 80 },
    { name: "ReactJS", percent: 75 },
    { name: "Javascript", percent: 85 },
    { name: "MySQL", percent: 70 },
    { name: "Bootstrap", percent: 90 },
    { name: "HTML", percent: 95 },
    { name: "Django REST Framework", percent: 78 },
  ];

  const projects = [
    {
      title: "Luminar Clone",
      link: "https://lnkd.in/gGMqsQMt",
    },
    {
      title: "Weather App",
      link: "https://w-eather-ap-p.netlify.app",
    },
    {
      title: "Dare To Travel",
      link: "https://github.com/AbhImanueMohan/demo-travel1.git",
    },
    {
      title: "Country Detailing App",
      link: "https://lnkd.in/gPUwnRyz",
    },
    {
      title: "Budget Assistant",
      link: "https://bud-getcal-culator.netlify.app",
    },
    {
      title: "Brew Beans Co",
      link: "https://coffee-beanz.netlify.app",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}

      <header className="navbar">

        <div className="logo">
          Abhimanue <span>Mohan</span>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>

      {/* HERO */}

      <section className="hero">

        <div className="glow one"></div>
        <div className="glow two"></div>
        <div className="glow three"></div>

        <div className="hero-content">

          <p className="intro">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="typing-text">
            Abhimanue <span>Mohan</span>
          </h1>

          <h2 className="fade-text">
            React & Python Full Stack Developer
          </h2>

          <p className="hero-desc">
            Passionate Full Stack Developer specialized in building
            modern, scalable and responsive web applications using
            ReactJS, Django and REST APIs with beautiful UI/UX designs.
          </p>

          <div className="hero-buttons">

            <button>
              Hire Me
            </button>

            <a
              href="/Abhimanue_Mohan_CV.pdf"
              download="Abhimanue_Mohan_CV.pdf"
              className="cv-btn"
            >
              Download CV
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="section">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-container">

          {/* LEFT */}

          <div className="about-left">

            <div className="about-card">

              <h3>Who Am I ?</h3>

              <p>
                I am a passionate React & Python Full Stack Developer
                focused on building high-quality modern web applications
                with clean UI/UX and scalable backend systems.
              </p>

              <p>
                Currently working as a Junior Python Developer at
                Strokx Technologies with experience in frontend
                and backend development.
              </p>

            </div>

            <div className="about-card">

              <h3>Experience</h3>

              <div className="timeline">

                <div className="timeline-item">

                  <h4>
                    Junior Python Developer
                  </h4>

                  <p>
                    Strokx Technologies
                  </p>

                  <span>
                    March 2026 - Present
                  </span>

                </div>

                <div className="timeline-item">

                  <h4>
                    Python-Django Intern
                  </h4>

                  <p>
                    Knovista Technologies
                  </p>

                  <span>
                    October 2025 - February 2026
                  </span>

                </div>

                <div className="timeline-item">

                  <h4>
                    MERN Stack Development Intern
                  </h4>

                  <p>
                    Luminar Technolab
                  </p>

                  <span>
                    February 2023 - October 2023
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="about-right">

            <div className="about-card">

              <h3>Skills</h3>

              {skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percent}
                />
              ))}

            </div>

            <div className="about-card">

              <h3>Education</h3>

              <div className="edu-card">

                <h4>
                  BCA (2019 - 2022)
                </h4>

                <p>
                  Bangalore North University
                </p>

              </div>

              <div className="edu-card">

                <h4>
                  Plus Two (2019)
                </h4>

                <p>
                  State Board Of Kerala
                </p>

              </div>

              <div className="edu-card">

                <h4>
                  SSLC (2017)
                </h4>

                <p>
                  State Board Of Kerala
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="section dark">

        <h2 className="section-title">
          Services
        </h2>

        <div className="service-grid">

          <div className="service-card">

            <FaLaptopCode className="service-icon" />

            <h3>
              Web Designing
            </h3>

            <p>
              Creative and responsive website designing
              with modern UI/UX concepts.
            </p>

          </div>

          <div className="service-card">

            <FaPython className="service-icon" />

            <h3>
              Python Full Stack Developer
            </h3>

            <p>
              Building scalable applications using
              Django, REST APIs and ReactJS.
            </p>

          </div>

          <div className="service-card">

            <FaReact className="service-icon" />

            <h3>
              Full Stack Developer
            </h3>

            <p>
              Developing complete frontend and backend
              web applications using modern technologies.
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="section">

        <h2 className="section-title">
          Projects
        </h2>

        <div className="project-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                Modern responsive web application project
                developed using frontend and backend
                technologies with clean UI/UX.
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >

                View Project
                <FaArrowRight />

              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="section dark">

        <h2 className="section-title">
          Contact Me
        </h2>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-item">

              <FaMapMarkerAlt />

              <p>
                Chooravelil House Chengara P.O,
                Pathanamthitta, Kerala, India
              </p>

            </div>

            <div className="info-item">

              <FaPhoneAlt />

              <p>
                7306396907
              </p>

            </div>

            <div className="info-item">

              <FaEnvelope />

              <p>
                abhimanuemohan5665@gmail.com
              </p>

            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Message"
            ></textarea>

            <button type="submit">
              Contact Me
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Abhimanue Mohan | Portfolio
        </p>

      </footer>

    </div>
  );
}

/* SKILL BAR */

function SkillBar({ name, percentage }) {

  const [width, setWidth] = useState(0);

  useEffect(() => {

    let current = 0;

    const interval = setInterval(() => {

      current += 1;

      if (current >= percentage) {
        current = percentage;
        clearInterval(interval);
      }

      setWidth(current);

    }, 15);

    return () => clearInterval(interval);

  }, [percentage]);

  return (
    <div className="skill">

      <div className="skill-header">

        <span>{name}</span>

        <span>{width}%</span>

      </div>

      <div className="skill-bar">

        <div
          className="skill-fill"
          style={{ width: `${width}%` }}
        ></div>

      </div>

    </div>
  );
}