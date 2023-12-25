import React from "react";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="" className={styles.logo}>
        💻 Eric
      </a>
      <ul>
        <li>
          <a href="#projects">work</a>
        </li>
        <li>
          <a href="">resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
