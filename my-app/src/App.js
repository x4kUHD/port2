import styles from "./main.module.css";
import React from "react";
import NavBar from "./components/NavBar";
import tmp from "./images/tmp.png";

function App() {
  return (
    <div className={`${styles.main}`}>
      <NavBar className={styles.navbar}></NavBar>

      <div className={styles.margin1}>
        <div className={`${styles.center} ${styles.box1}`}>
          <div className={styles.t1}>Hey, it's Eric 👋</div>
          <div className={styles.t2}>
            studying cs + interaction design @
            <span className={styles.gt}> georgia tech</span>
          </div>
          <div className={styles.t3}>
            currently a <span style={{ color: "black" }}> ux intern </span> @{" "}
            <span style={{ color: "#00C2FF", textDecoration: "underline" }}>
              {" "}
              beaches app, inc.
            </span>{" "}
            previously an associate
            <span style={{ color: "black" }}> product designer</span> @{" "}
            <span style={{ color: "#0057FF", textDecoration: "underline" }}>
              stord.
            </span>
            <br /> as an artist and ui/ux enthusiast, i am driven by a deep
            appreciation for the fusion of art and technology.
          </div>
        </div>
      </div>
      {/* projects */}
      <div className={styles.projects}>
        {/* Beaches App */}
        <a href="">
          <div className={styles.projectContainer}>
            <img className={styles.thumbnail} src={tmp} alt="" />
            <div className={styles.textContainer}>
              <div className={styles.ptext1} style={{ color: "#00C2FF" }}>
                🏖 Beaches App, inc.
              </div>
              <div className={styles.ptext2}>
                ux design · ux research · internship
              </div>
              <div className={styles.ptext3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
            </div>
          </div>
        </a>
        {/* Stord */}
        <a href="">
          <div className={styles.projectContainer}>
            <div className={styles.textContainer}>
              <div className={styles.ptext1} style={{ color: "#3646F5" }}>
                🚚 Stord TMS{" "}
              </div>
              <div className={styles.ptext2}>
                product design · competitor research · internship
              </div>
              <div className={styles.ptext3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
            </div>
            <img className={styles.thumbnail} src={tmp} alt="" />
          </div>
        </a>
        {/* ios calendar */}
        <a href="">
          <div className={styles.projectContainer}>
            <img className={styles.thumbnail} src={tmp} alt="" />
            <div className={styles.textContainer}>
              <div className={styles.ptext1}>📅 iOS Calendar Case Study</div>
              <div className={styles.ptext2}>ux design · ux research</div>
              <div className={styles.ptext3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
            </div>
          </div>
        </a>
        {/* ios phone */}
        <a href="">
          <div className={styles.projectContainer}>
            <div className={styles.textContainer}>
              <div className={styles.ptext1}>📱iOS Phone App Redesign</div>
              <div className={styles.ptext2}>ux design · ux research</div>
              <div className={styles.ptext3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
            </div>
            <img className={styles.thumbnail} src={tmp} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
