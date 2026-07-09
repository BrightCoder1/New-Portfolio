import React from "react";
import education from "./education.js";
import "../index.css";

const Education = () => {
    return (
        <section className="education" id="education">

            <div className="education-heading">
                <h1>Academics</h1>

                <p>
                    My academic journey that built my foundation in
                    software development and computer science.
                </p>
            </div>

            <div className="education-grid">

                {education.map((item, index) => (

                    <div className="education-card" key={index}>

                        <span className="year">
                            {item.year}
                        </span>

                        <h2>{item.degree}</h2>

                        <h4>{item.college}</h4>

                        <p>{item.description}</p>

                        {item.certificate && (
                            <a
                                href={item.certificate}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Certificate →
                            </a>
                        )}

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Education;