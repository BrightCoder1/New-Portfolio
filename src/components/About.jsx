import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
} from "react-icons/fa";

import { IoIosCall } from "react-icons/io";


const About = () => {
    return (
        <section className="about" id="about">

            <div className="about-content">

                <span className="section-title">ABOUT ME</span>

                <h1>
                    Who <span>Am I?</span>
                </h1>

                <p className="intro">
                    I'm <strong>Vishal Kumar</strong>, a passionate Full Stack Developer
                    who enjoys building modern, scalable and responsive web applications.
                    I specialize in the MERN Stack and love creating beautiful user
                    interfaces with powerful backend systems.
                </p>

                <p>
                    My expertise includes React.js, Node.js, Express.js, MongoDB,
                    JavaScript, Python and REST APIs. I also have a strong interest in AI,
                    Machine Learning and Data Analytics.
                </p>

                <div className="info">

                    <div className="info-row">
                        <span>Name</span>
                        <p>Vishal Kumar</p>
                    </div>

                    <div className="info-row">
                        <span>Location</span>
                        <p>Sudhowala, Dehradun, Uttarakhand</p>
                    </div>

                    <div className="info-row">
                        <span>Role</span>
                        <p>Full Stack Developer</p>
                    </div>

                    <div className="info-row">
                        <span>Experience</span>
                        <p>Web Development & AI Projects</p>
                    </div>

                </div>

                {/* <div className="buttons">

                    <button className="resume">
                        <FaDownload /> Resume
                    </button>

                    <button className="contact">
                        Contact Me
                    </button>

                </div> */}

                <div className="social">

                    <a href="https://github.com/BrightCoder1" target="new_page">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/vishal-kumar-797437297" target="new_page">
                        <FaLinkedin />
                    </a>
                    {/* call */}
                    <a href="tel:+916398728427" target="new_page">
                        <IoIosCall />
                    </a>

                </div>

            </div>

            <div className="about-image">

                {/* <div className="floating-tag">
                    {"</>"} Full Stack Developer
                </div> */}

                <img className="aboutImg" src="./img1.png" alt="profile" />

                <div className="focus-card">

                    <h3>Current Focus</h3>

                    <div className="chips">

                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>Python</span>
                        <span>AI</span>
                        <span>Data Analytics</span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;