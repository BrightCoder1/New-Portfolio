import React from "react";
import "../index.css";

const Contact = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText("vs035967@gmail.com");
    alert("Email copied successfully!");
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <h1>Let's Connect</h1>
        <p>
          Have an opportunity, project idea, or just want to connect?
          Reach out directly.
        </p>
      </div>

      <div className="contact-card">

        <span className="contact-badge">
          Available for Opportunities
        </span>

        <h2>
          Let's build something meaningful together.
        </h2>

        <p>
          Whether you're looking for a Full Stack Developer, discussing a
          freelance project, collaboration, internship, or a software
          engineering opportunity, I'd be happy to connect and bring your
          ideas to life.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:vs035967@gmail.com"
            className="primary-btn"
          >
            Send Email
          </a>

          <a
            href="https://wa.me/916398728427"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            WhatsApp
          </a>

          <button
            className="secondary-btn"
            onClick={copyEmail}
          >
            Copy Email
          </button>

        </div>

      </div>

    </section>
  );
};

export default Contact;