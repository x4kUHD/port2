import React from "react";
import NavBar from "./NavBar";
import ogstyles from "./main.module.css";
import styles from "./beaches.module.css";
import bg from "../images/beachesbg.png";

function Beaches() {
  return (
    <div className={styles.main}>
      <NavBar className={ogstyles.navbar} />
      <img className={styles.bgi} src={bg} alt="" />
      <div className={styles.all}>
        <div className={styles.t1}>Beaches App</div>
        <div className={styles.t2}>UX Design · UX Research</div>
        <div className={styles.t3}>
          Refined and enhanced the user interface (UI) and user experience (UX)
          of the Beaches App main product
        </div>
        <div className={styles.spt}>
          {/* Summary */}
          <div className={styles.sptBox}>
            <div className={styles.sptTitle}>Summary</div>

            <ul className={styles.sptContent}>
              <li>Competitor Research</li>
              <li>Market Research</li>
              <li>Customer Personas</li>
              <li>Wireframing</li>
              <li>Low-Fidelity</li>
              <li>Mid-Fidelity</li>
              <li>High-Fidelity</li>
            </ul>
          </div>
          {/* Project Context */}
          <div className={styles.sptBox2}>
            <div className={styles.sptTitle}>Project Context</div>
            <ul className={styles.sptContent}>
              <li>Sept-Dec 2023</li>
              <li>Team: 4 People</li>
            </ul>
          </div>
          {/* Tools Used */}
          <div className={styles.sptBox2}>
            <div className={styles.sptTitle}>Tools Used</div>
            <ul className={styles.sptContent}>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Goodnotes</li>
            </ul>
          </div>
        </div>
        <div className={styles.title}>Onboarding</div>
      </div>
    </div>
  );
}

export default Beaches;
