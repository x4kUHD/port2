import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>💻 Eric</Link>
      <ul>
        <li>
          <Link to={"/#projects"}>work</Link>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank">
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
