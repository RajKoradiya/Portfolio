import React from 'react'
import "./About.css"
import { FaHtml5, FaCss3, FaJs, FaGit, FaJava, FaReact } from "react-icons/fa";

function About() {
    return (
        <div id="about">
            {/* <!-- About Me Section --> */}
            <h1 id="about" class="about-me-text">About Me</h1>
            <div class="about-me-div container">
                <div class="about-me-left">
                    <p class="p1 pc">I'm enthusiastic to learn and explore new tools & technologies for continuous learning and growth in the field of software engineering, as well as excited to solve programming problems by analytical problem solving skillset & teamwork.
                    </p>
                    {/* <!-- <p class="p2 pc">As a beginner, I am eager to learn and grow in these fields and I hope to use this platform to document my progress and share my experiences.</p> --> */}
                    <p class="p3 pc">Through this website, I aim to showcase my projects and the skills I acquire along the way, as well as connect with other developers who can help me grow and improve.</p>
                    <p class="p4 pc">Let's embark on this exciting journey of discovery and growth together.</p>
                </div>
                <div class="about-me-right">
                    <div class="lang">
                        <FaHtml5 size={40}/>
                        <p>HTML</p>
                    </div>
                    <div class="lang">
                        <FaCss3 size={40}/>
                        <p>CSS</p>
                    </div>
                    <div class="lang">
                        <FaJs size={40}/>
                        <p>JavaScript</p>
                    </div>

                    <div class="lang">
                        <FaGit size={40}/>
                        <p>Git</p>
                    </div>
                    <div class="lang">
                        <FaJava size={40}/>
                        <p>Advanced Java</p>
                    </div>
                    <div class="lang">
                        <FaReact size={40}/>
                        <p>React</p>
                    </div>
                    <div class="lang">
                        <i class="fa-thin fa-dolphin"></i>
                        <p >MySQL</p>
                    </div>
                    <div class="lang">
                        <i class="fa-brands fa-figma fa-2xl"></i>
                        <p>Figma</p>
                    </div>

                    <div class="lang">
                        <i class="fa-duotone fa-brackets-square"></i>
                        <p >DSA</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
