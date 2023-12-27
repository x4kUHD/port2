import React from "react";
import styles from "./main.module.css";
import NavBar from "./NavBar";
import transition from "../transition";

function Calendar() {
  return (
    <div className={styles.main}>
      <NavBar className={styles.navbar}></NavBar>
      <div>
        <iframe
          style={{
            width: "500px",
            height: "1300px",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbUDVhjtKruQzhKJchU4gii%2Fapple-calendar%3Fpage-id%3D0%253A1%26node-id%3D48-91%26starting-point-node-id%3D1%253A8%26scaling%3Dmin-zoom%26mode%3Ddesign%26t%3D1xyfsfD2H8NlB9YW-1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Calendar;
