import React from "react";
import "./Footer.css"
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer m-3 p-3">
            <a href="https://www.github.com/BKWes" target="_blank" rel="noreferrer" className="m-2 p-2"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/weston-barnes-202947149/" target="_blank" rel="noreferrer" className="m-2 p-2"><BsLinkedin /></a>
        </div>
    )
}

export default Footer;