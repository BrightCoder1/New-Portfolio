import React from "react";
import "../index.css";
import project from "./projects.js";

const Project = () => {
    return (
        <section className="projects-section" id="projects">

            <div className="project-heading">
                <h1>Things I've Built</h1>
                <p>
                    A collection of professional work and personal projects.
                </p>
            </div>


            <div className="project-grid">
                {project.map((item, index) => (
                    <div className="project-card" key={index}>

                        <div className="project-image">
                            <img src={item.projectimg} alt={item.projectName} />
                        </div>

                        <div className="card-top">

                            <span className="category">
                                {item.category || "Project"}
                            </span>

                        </div>

                        <h2>{item.projectName}</h2>

                        <p className="project-info">
                            {item.info}
                        </p>

                        <div className="tech-stack">
                            {(item.tech || []).map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>

                        <div className="project-links">

                            <a
                                href={item.sourcecode}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Source Code
                            </a>

                            {item.livelink && item.livelink !== "No Live Link" && (
                                <a
                                    href={item.livelink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="live"
                                >
                                    Live Demo
                                </a>
                            )}

                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Project;