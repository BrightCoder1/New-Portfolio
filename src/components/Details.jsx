import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../index.css";

const Details = () => {
  return (
    <section className="detail" id="home">

      <div className="detail-left">

        <div className="badge">
          ● SOFTWARE ENGINEER
        </div>

        <h1>
          Vishal <span>Kumar</span>
        </h1>

        <h2>
          I build{" "}
          <span className="typing">
            <Typewriter
              words={[
                "mobile apps",
                "web applications",
                "AI Projects",
                "Backend APIs",
                "MERN Stack Apps",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p>
          Full Stack Developer focused on building scalable web applications,
          modern UI, backend APIs and AI powered solutions using MERN Stack.
        </p>

        <div className="skills">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>API</span>
          <span>Python</span>
        </div>

      </div>

      <div className="detail-right">

        <div className="image-box">

          <div className="floating-tag top">
            {"</>"} Full Stack
          </div>

          <img
            src="./src/image/img1.png"
            alt="profile"
          />

        </div>
      </div>
    </section>
  );
};

export default Details;