import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function workOnClick() {
  const currentPath = window.location.pathname;
  // if current page == Home, scroll to section #projects
  if (currentPath === "/") {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    // else, Link to={"/"}
    window.location.href = "/";
  }
}

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>💻 Eric</Link>
      <ul>
        <li>
          <Link onClick={workOnClick}>work</Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1_VzwNXqNiGiURFOdbPaog9xMnz4cbjn2/view?usp=sharing"
            target="_blank"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
