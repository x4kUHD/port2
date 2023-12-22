import styles from "./main.module.css";
import React from "react";
import NavBar from "./components/NavBar";

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
    </div>
  );
}

export default App;
