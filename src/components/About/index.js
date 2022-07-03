import React from "react";
import "./About.css"

function About() {
    return (
        <section className="about m-2">
          <div className="intro p-2">
            <h3>
                I'm Weston, and I am currently enrolled in the Michigan State University full-stack coding bootcamp. 
            </h3>
            <span>
                I have had an interest in technology and web applications for a good part of my personal life. I have spent the past year studying software and computer development along with schooling to transition my professional life towards this field.
            </span>
          </div>
          <div className="skills pt-3">
            <h3>Skills</h3>
                <div className="skillSection">
                    <p>HTML 5: 1 year</p>
                    <p>Advanced CSS: 6 months</p>
                    <p>JavaScript: 6 months</p>
                </div>
                <div className="skillSection">
                    <p>Node.js: 6 months</p>
                    <p>Express.js: 6 months</p>
                    <p>APIs: 6 months</p>
                </div>
                <div className="skillSection">
                    <p>SQL: 6 months</p>
                    <p>NoSQL: 6 months</p>
                    <p>MongoDB: 6 months</p>
                </div>
                <div className="skillSection">
                    <p>Object-Oriented Programming: 6 months</p>
                    <p>Object-Relational Mapping: 6 months</p>
                    <p>Customer Service/Retail: 7 years</p>
                </div>
          </div>
        </section>
    )
}

export default About;