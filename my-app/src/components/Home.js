import styles from "./main.module.css";
import React, { useState } from "react";
import NavBar from "./NavBar";
import email from "../images/email.png";
import linkedin from "../images/linked.png";
import git from "../images/git.png";
import calendar from "../images/calendar.png";
import phone from "../images/phone.png";
import stord from "../images/stord.png";
import ba from "../images/beachesapp.png";
import { Link } from "react-router-dom";
import ibm from "../images/ibm.png";
import news from "../images/newsflow.png";

function copyEmail() {
  const email = "ykim971@gatech.edu";

  // Create a temporary input element to copy the email text
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);

  // Select and copy the email text
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Provide some feedback to the user (optional)
  alert("Email address copied to clipboard: " + email);
}

function Home() {
  return (
    <div className={`${styles.main}`}>
      <NavBar className={styles.navbar}></NavBar>
      <div className={styles.margin1}>
        <div className={`${styles.center} ${styles.box1}`}>
          <div className={styles.t1}>Hey, it's Eric 👋</div>
          <div className={styles.t2}>
            studying cs + hci @<span className={styles.gt}> georgia tech</span>
          </div>
          <div className={styles.t3}>
            currently @ <span style={{ color: "#0057FF" }}>IBM</span> as a
            <span style={{ color: "#000000" }}>
              {" "}
              client engineering designer,
            </span>
            <br /> as an artist and ui/ux wizard, i am driven by a deep
            appreciation for the fusion of art and technology.
          </div>
        </div>
      </div>
      <section id="projects">
        {/* projects */}
        <div className={styles.projects}>
          <a>
            <div className={styles.projectContainer}>
              <img className={styles.thumbnail} src={ibm} alt="" />
              <div className={styles.textContainer}>
                <div className={styles.ptext1} style={{ color: "#0530AD" }}>
                  🔒 IBM{" "}
                </div>
                <div className={styles.ptext2}>
                  client engineering design · ux research · internship
                </div>
                <div className={styles.ptext3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quis feugiat turpis, id lacinia eros.
                </div>
              </div>
            </div>
          </a>
          <Link>
            <div className={styles.projectContainer}>
              <div className={styles.textContainer}>
                <div className={styles.ptext1} style={{ color: "#505050" }}>
                  📰 NewsFlow{" "}
                </div>
                <div className={styles.ptext2}>ux research · ux design</div>
                <div className={styles.ptext3}>
                  Led the ideation and prototyping of a news application
                  tailored for college students, enhancing engagement through
                  various user research methods.
                </div>
              </div>
              <img className={styles.thumbnail} src={news} alt="" />
            </div>
          </Link>
          {/* Beaches App */}
          <Link to={"/Beaches"}>
            <div className={styles.projectContainer}>
              <img className={styles.thumbnail} src={ba} alt="" />
              <div className={styles.textContainer}>
                <div className={styles.ptext1} style={{ color: "#00C2FF" }}>
                  🏖 Beaches App
                </div>
                <div className={styles.ptext2}>
                  ux design · ux research · internship
                </div>
                <div className={styles.ptext3}>
                  Refined and prototyped the user interface and user experience
                  of the Beaches App mobile application product, following the
                  roadmap for Q1 of 2024.
                </div>
              </div>
            </div>
          </Link>
          {/* ios calendar */}
          <Link to={"/Calendar"}>
            <div className={styles.projectContainer}>
              <div className={styles.textContainer}>
                <div className={styles.ptext1}>📅 iOS Calendar Case Study</div>
                <div className={styles.ptext2}>ux design · ux research</div>
                <div className={styles.ptext3}>
                  Investigated usability issues and gathered user feedback from
                  App Store reviews and designed solutions to improve navigation
                  and enhance visual consistency.
                </div>
              </div>
              <img className={styles.thumbnail} src={calendar} alt="" />
            </div>
          </Link>
          {/* Stord */}
          <Link to={"/Stord"}>
            <div className={styles.projectContainer}>
              <img className={styles.thumbnail} src={stord} alt="" />
              <div className={styles.textContainer}>
                <div className={styles.ptext1} style={{ color: "#3646F5" }}>
                  🚚 Stord TMS{" "}
                </div>
                <div className={styles.ptext2}>
                  product design · competitor research · internship
                </div>
                <div className={styles.ptext3}>
                  Developed competitive analyses to help identify areas of
                  competitive advantage and prototyped the UX of new features
                  and functionalities for Stord's Transportation Management
                  System.
                </div>
              </div>
            </div>
          </Link>
          {/* ios phone */}
          <Link to={"/Phone"}>
            <div className={styles.projectContainer}>
              <div className={styles.textContainer}>
                <div className={styles.ptext1}>📱iOS Phone App Redesign</div>
                <div className={styles.ptext2}>ux design · ux research</div>
                <div className={styles.ptext3}>
                  Identified user experience obstacles in the Apple Phone
                  application, such as accidental calls, and designed solutions.
                  Created a prototype that improves the user experience,
                  enhances clarity, and promotes ease of use.
                </div>
              </div>
              <img className={styles.thumbnail} src={phone} alt="" />
            </div>
          </Link>
        </div>
      </section>
      <div className={styles.footercnt}>
        <footer className={styles.footer}>
          <div className={styles.highlight}>
            © 2024 Yeonwook (Eric) Kim. Made from Scratch :)
          </div>
          <br />
          <div className={styles.highlight} style={{ fontSize: "24px" }}>
            Let's Connect!
          </div>
          <div className={styles.connect}>
            <a onClick={copyEmail}>
              <img className={styles.connectimg} src={email} alt="copy email" />
            </a>
            <a href="https://www.linkedin.com/in/yeonwook-kim/" target="_blank">
              <img
                className={styles.connectimg}
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/x4kUHD" target="_blank">
              <img className={styles.connectimg} src={git} alt="github" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

// className={`${styles.center} ${styles.box1}`}

export default Home;
