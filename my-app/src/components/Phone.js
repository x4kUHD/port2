import React from "react";
import ogstyles from "./main.module.css";
import NavBar from "./NavBar";
import styles from "./phone.module.css";
import tmp from "../images/tmp.png";
import prob from "../images/phoneprob.png";
import wf from "../images/phonewf.png";
import icons from "../images/phoneicons.png";
import vd from "../images/phonevd.png";
import bg from "../images/phonebg.png";

function Phone() {
  return (
    <div className={styles.main}>
      <NavBar className={ogstyles.navbar} />
      <img className={styles.bgi} src={bg} alt="" />
      <div className={styles.all}>
        <div className={styles.t1}>iOS Phone Application Redesign</div>
        <div className={styles.t2}>UX Design · UX Research · Prototyping</div>
        <div className={styles.t3}>
          Identified user experience obstacles in the Apple Phone application,
          such as accidental calls, and designed solutions.
        </div>
        <div className={styles.spt}>
          {/* Summary */}
          <div className={styles.sptBox}>
            <div className={styles.sptTitle}>Summary</div>

            <ul className={styles.sptContent}>
              <li>
                <span className={styles.bold}>User Research:</span> Identified
                problems within the app
              </li>
              <li>
                <span className={styles.bold}>Wireframing:</span> Wireframed a
                solution from the identified problems
              </li>
              <li>
                <span className={styles.bold}>UX Design and Prototype: </span>
                Crafted an iteration of a solution
              </li>
            </ul>
          </div>
          {/* Project Context */}
          <div className={styles.sptBox2}>
            <div className={styles.sptTitle}>Project Context</div>
            <ul className={styles.sptContent}>
              <li>July 2023</li>
              <li>Personal Project</li>
              <li>Team: Individual</li>
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
        <div className={styles.title}>Problem Identification</div>
        <div style={{ paddingTop: "50px" }}>
          My objective is to improve the user interface and experience of an iOS
          phone app, specifically focusing on the "favorites" and "recents"
          pages. I aim to address issues like accidental calls from single
          clicks and unclear icons on the "recents" page. By creating a more
          intuitive and user-friendly interface, I want to enhance my overall
          experience with the app. Through the design process, I'll develop
          solutions to prevent accidental calls on the "favorites" and "recents"
          pages. I'll also redesign icons for better clarity and ensure that
          these pages provide additional options and information beyond just
          making phone calls.
        </div>
        <div className={styles.problem}>
          <img src={prob} alt="" />
        </div>
        <div style={{ paddingTop: "50px" }}>
          <div>
            The elements in “favorites” and “recents” pages of the phone app are
            subject to numerous mistakes by the user since one click triggers a
            phone call.
          </div>
          <div style={{ paddingTop: "20px" }}>
            {" "}
            The icons of the “recents” page do not convey the information
            obviously -- it’s not clear what call was incoming or what call was
            outgoing.
          </div>
          <div style={{ paddingTop: "20px" }}>
            {" "}
            The top bar’s spacing of the text in the “favorites” tab is
            inconsistent with the other tabs
          </div>
        </div>
        <div className={styles.title}>Wireframing</div>
        <div className={styles.wfbox}>
          <img className={styles.wireframe} src={wf} alt="" />
        </div>
        <div>
          <div>
            The “Favorites” text spacing adjusted to be consistent with the rest
            of the tabs. Instead of triggering a call right away, tapping on a
            contact now provides a safeguard tab.
          </div>
          <div style={{ paddingTop: "20px" }}>
            The tab shows the contact’s phone number, and five options --
            message, call, FaceTime, mail, and view contact information.
          </div>
          <div style={{ paddingTop: "20px" }}>
            Tapping on a recent call now provides a safeguard tab.
          </div>
          <div style={{ paddingTop: "20px" }}>
            The tab shows the more specifications and five options -- message,
            call, FaceTime, mail, and view more.
          </div>
        </div>
        <div className={styles.title}>Icons and Colors</div>
        <img className={styles.iconsimg} src={icons} alt="" />
        <div className={styles.title}>Visual Design and Prototype</div>
        <img style={{ marginTop: "20px" }} src={vd} alt="" />

        <div className={styles.wfbox}>
          <iframe
            width="450"
            height="800"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRs1F9R6Z76gCizWGxgDqBs%2Fphone-case-study%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D299%252C318%252C0.54%26t%3DftMg8f4rB4hDNYzl-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.title}>Reflection</div>
        <div className={styles.ref} style={{ fontSize: "20px" }}>
          <div>
            Throughout the design process, I kept the user's perspective in
            mind, aiming to create a more intuitive and user-friendly interface
            for the iOS phone app. By mitigating accidental calls and improving
            icon clarity, users will have a smoother and more efficient
            experience with the app. The additional options and information in
            the "favorites" and "recents" pages will also provide users with
            more flexibility and control over their interactions.
          </div>
          <div>
            Ultimately, the design process allowed me to identify and address
            the issues in the existing UI/UX of the iOS phone application.
            Through thoughtful ideation and design, I was able to create a
            prototype that improves the user experience, enhances clarity, and
            promotes ease of use. By reflecting on the process, I can further
            refine the design and iterate on the prototype to ensure the final
            product meets the objectives and goals set for enhancing the UI/UX
            of the iOS phone app.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
