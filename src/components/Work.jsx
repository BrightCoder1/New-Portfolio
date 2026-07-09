import React from "react";
import "../index.css";
import {
    FaBriefcase,
    FaCalendarAlt,
    FaCode,
    FaCloud,
} from "react-icons/fa";

const experience = [
    {
        icon: <FaCode />,
        title: "Full Stack Developer Intern",
        company: "Cognoscente Invnted Pvt. Ltd.",
        duration: "July 2024 - August 2024",
        description:
            "Completed a Full Stack Web internship with hands-on experience in MERN Stack and real-world projects.",
        points: [
            "Developed an Employee Management System using React.js, Node.js, Express.js, and MongoDB.",
            "Worked on backend APIs and database integration.",
            "Collaborated with team members to implement new features and improve performance.",
        ],
    },
    {
        icon: <FaCloud />,
        title: "Data Structures & Algorithms Trainee",
        company: "Wave Techtronics",
        duration: "June 2025 - July 2025",
        description:
            "Worked on Data Structures and Algorithms with a focus on problem-solving and coding efficiency.",
        points: [
            "Completed intensive training in Data Structures and Algorithms.",
            "Solved real-world coding problems and improved problem-solving skills.",
            "Learned optimization techniques and algorithm design.",
        ],
    },
];

const Work = () => {
    return (
        <section className="work-section" id="experience">

            <p className="work-subtitle">MY EXPERIENCE</p>

            <h1 className="work-title">
                Work <span>Experience</span>
            </h1>

            <div className="work-line"></div>

            <div className="work-container">

                {experience.map((item, index) => (
                    <div className="work-card" key={index}>

                        <div className="work-icon">
                            {item.icon}
                        </div>

                        <div className="work-content">

                            <h3>{item.title}</h3>

                            <h4>
                                <FaBriefcase />
                                {item.company}
                            </h4>

                            <span>
                                <FaCalendarAlt />
                                {item.duration}
                            </span>

                            <p>{item.description}</p>

                            <ul>
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Work;