import React from "react";
import "./index.css";



const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                <p>
                    © {new Date().getFullYear()} | Made with <span>❤️</span> by{" "}
                    <strong>Vishal Kumar</strong>
                </p>

            </div>

        </footer>
    );
};

export default Footer;