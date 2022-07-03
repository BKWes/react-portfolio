import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.github.com/BKWes" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/weston-barnes-202947149/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
    )
}

export default Footer;