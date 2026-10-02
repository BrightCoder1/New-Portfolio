import React, { useState } from "react";
import "../index.css";

const tech = [
    // Frontend
    { name: "JavaScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "REST APIs", category: "Backend" },

    // Database
    { name: "MongoDB", category: "Database" },
    { name: "SQL Server", category: "Database" },

    // Tools
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },

    //Other
    { name: "Python", category: "Other" },
    { name: "C++", category: "Other" },
    { name: "C Language", category: "Other" },
    
];

const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Other",
];

const Skills = () => {
    const [active, setActive] = useState("All");

    const filteredSkills =
        active === "All"
            ? tech
            : tech.filter((item) => item.category === active);

    return (
        <section className="skills-section" id="skills">

            <div className="skills-container">

                <div className="skills-header">

                    <h1 className="skills-title CLR">
                        What I Work With
                    </h1>

                    <p className="skills-description">
                        Technologies I use to build full stack products, backend systems,
                        modern applications and AI-powered workflows.
                    </p>

                </div>

                <div className="skills-filter">

                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`skills-filter-btn ${active === category ? "skills-active" : ""
                                }`}
                            onClick={() => setActive(category)}
                        >
                            {category}
                        </button>
                    ))}

                </div>

                <div className="skills-grid">

                    {filteredSkills.map((skill) => (
                        <div className="skills-card" key={skill.name}>
                            <h3 className="skills-card-title">
                                {skill.name}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Skills;