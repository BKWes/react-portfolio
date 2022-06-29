import React from "react";
import Nav from '../Navigation';

function Header() {
    return (
        <div>
            <Nav></Nav>
        <section className="header">
            <header>
                <h1 className="header-title">Hello there.</h1>
                <div className="header-box">
                    I'm Weston, a Full-Stack developer based in Tennessee, USA!
                </div>
            </header>
        </section>
        </div>
    )
}

export default Header;