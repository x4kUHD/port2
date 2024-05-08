import React from "react";
import ogstyles from "./main.module.css";
import NavBar from "./NavBar";
import styles from "./stord.module.css";
import bg from "../images/stordbg.png";
import otw from "../images/otw.png";
import tam from "../images/tam.png";
import cusp from "../images/cusp.png";
import stordwf from "../images/stordwf.png";
import stordlow from "../images/stordlow.png";
import stordmid from "../images/stordmid.png";

function Stord() {
  return (
    <div className={styles.main}>
      <NavBar className={ogstyles.navbar} />
      <img className={styles.bgi} src={bg} alt="" />
      <div className={styles.all}>
        <div className={styles.t1}>Stord TMS</div>
        <div className={styles.t2}>Product Design · Competitor Research</div>
        <div className={styles.t3}>
          Developed the UX of new functionalities for Stord's Transportation
          Management System.
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
        <div className={styles.title}>Stord</div>
        <div style={{ paddingTop: "50px" }}>
          Stord is a Third Party Logistics Firm (3PL) that orchestrate
          end-to-end fulfillment for both D2C and B2B customers.​ They operate a
          cloud-based platform that connects shippers with a network of
          warehouses and carriers, offering a scalable and flexible logistics
          infrastructure.​ Stord’s Order Management System (OMS) that is used to
          receive orders, automate order updates and determine the optimal
          facility to fulfill the order​. Stord also hosts clients inventory and
          handles fulfillment at their facilities. Warehouse operation is
          enabled by their Warehouse Management System (WMS) to pick, pack, and
          ship the orders​
        </div>
        <div className={styles.title}>Interplay Between TMS, OMS, and WMS</div>
        <div className={styles.center}>
          <img className={styles.ot} src={otw} alt="" />
        </div>

        <div className={styles.title}>Market Research</div>
        <div className={styles.center}>
          <a
            href="https://drive.google.com/file/d/1QIRInug075g2fyn0I7PzsoUP2Oz9Hg5g/view?usp=sharing"
            target="_blank"
          >
            <div className={styles.link}>View market research</div>
          </a>
        </div>

        <div className={styles.title}>Total Addressable Market</div>
        <div className={styles.center}>
          <img className={styles.tam} src={tam} alt="" />
        </div>
        <div className={styles.title}>Competitor Analysis</div>
        <div className={styles.center}>
          <a
            href="https://drive.google.com/file/d/1IYZsZNvuVK9aPrzl8GL758qM1qsWXRpG/view?usp=sharing"
            target="_blank"
          >
            <div className={styles.link}>View competitor analysis</div>
          </a>
        </div>

        <div className={styles.title}>Customer Personas</div>
        <div className={styles.center}>
          <img className={styles.cusp} src={cusp} alt="" />
        </div>
        <div className={styles.title}>User Flow and Wireframing</div>
        <div className={styles.wf}>
          <img src={stordwf} alt="" />
        </div>

        <div className={styles.title}>Low-Fidelity</div>
        <div className={styles.wf}>
          <img src={stordlow} alt="" />
        </div>

        <div className={styles.title}>Mid-Fidelity</div>
        <div className={styles.wf}>
          <img src={stordmid} alt="" />
        </div>

        <div className={styles.title}>High-Fidelity</div>
        <div className={styles.wf}>
          <iframe
            width="1600"
            height="900"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FKReLaTQfbNNzue3vhMKNnF%2FStord-TMS%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D39-515%26viewport%3D538%252C116%252C0.12%26t%3D0ySAv4Wi1antcgQe-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D9%253A57%26show-proto-sidebar%3D1%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Stord;
