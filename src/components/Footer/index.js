import React from "react";

function Footer() {
    return (
        <div className="footer">
            <p className="footerText">
                You can find my work on <a href="https://www.github.com/BKWes" target="_blank" rel="noreferrer"><span className="footerLink"> Github. </span></a>         
                <span style={{fontWeight: 700}}> | </span>
                Lets connect on <a href="https://www.linkedin.com/in/weston-barnes-202947149/" target="_blank" rel="noreferrer"><span className="footerLink"> LinkedIn </span></a>
            </p>
        </div>
    )
}

export default Footer;