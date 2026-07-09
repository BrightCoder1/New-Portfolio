import React, { useState } from "react";
import "./app.css";
import "./css/nav.css";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const closeMenu = () => setMenu(false);

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        closeMenu();
    };

    return (
        <nav className="nav">

            <h1 className="nav-logo">Vishal Kumar</h1>

            <ul className={menu ? "nav-links active" : "nav-links"}>

                <li>
                    <a href="#home" onClick={(event) => handleNavClick(event, "home")}>Home</a>
                </li>

                <li>
                    <a href="#about" onClick={(event) => handleNavClick(event, "about")}>About</a>
                </li>

                <li>
                    <a href="#skills" onClick={(event) => handleNavClick(event, "skills")}>Skills</a>
                </li>

                <li>
                    <a href="#experience" onClick={(event) => handleNavClick(event, "experience")}>Experience</a>
                </li>

                <li>
                    <a href="#projects" onClick={(event) => handleNavClick(event, "projects")}>Projects</a>
                </li>

                <li>
                    <a href="#education" onClick={(event) => handleNavClick(event, "education")}>Education</a>
                </li>

                <li>
                    <a href="#contact" onClick={(event) => handleNavClick(event, "contact")}>Contact</a>
                </li>

            </ul>

            <div className="menu-icon" onClick={() => setMenu(!menu)}>
                {menu ? <HiX /> : <HiMenuAlt3 />}
            </div>

        </nav>
    );
};

export default Navbar;