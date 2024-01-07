import React from "react";
import ogstyles from "./main.module.css";
import NavBar from "./NavBar";
import styles from "./cal.module.css";
import tmp from "../images/tmp.png";
import wf from "../images/calwireframe.png";
import one from "../images/ogcal1.png";
import two from "../images/ogcal2.png";
import bg from "../images/calbg.png";
import cm from "../images/cm.png";
import icons from "../images/calicons.png";
import vd from "../images/calvd.png";

function Calendar() {
  return (
    <div className={styles.main}>
      <NavBar className={ogstyles.navbar} />
      <img className={styles.bgi} src={bg} alt="" />
      <div className={styles.all}>
        <div className={styles.t1}>iOS Calendar Application Case Study</div>
        <div className={styles.t2}>UX Design · UX Research · Prototyping</div>
        <div className={styles.t3}>
          Redesigned the Apple iOS Calendar Application by investigating
          usability issues and gathering user feedback from App Store reviews.
          Developed wireframes and mock-ups to design solutions to improve
          navigation, enhance visual consistency, etc.
        </div>
        <div className={styles.spt}>
          {/* Summary */}
          <div className={styles.sptBox}>
            <div className={styles.sptTitle}>Summary</div>

            <ul className={styles.sptContent}>
              <li>
                <span className={styles.bold}>User Research:</span> Utilized a
                comparison matrix and secondary user research
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
              <li>April 2023</li>
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
        <div>
          <div className={styles.title}>Comparison Matrix</div>
          <div style={{ paddingTop: "50px" }} className={styles.wf}>
            <img
              className={`${styles.dropshadow}, ${styles.cm}`}
              width="50%"
              height="50%"
              src={cm}
              alt=""
            />
          </div>
        </div>
        <div className={styles.title}>Secondary User Research</div>
        <div className={styles.sur}>
          <div>
            <span style={{ fontStyle: "normal" }}>🙍🏻‍♂️</span> “It’s{" "}
            <span className={ogstyles.highlight}>
              difficult to view my month or week at a glance{" "}
            </span>{" "}
            and see my general business status. Makes it twice as difficult to
            balance work and life if you can’t view what’s happening in an
            overview.”
          </div>
          <div>
            <span style={{ fontStyle: "normal" }}>🙍🏻</span> “When I open my
            calendar, I want to see a{" "}
            <span className={ogstyles.highlight}>quick view of my month.</span>{" "}
            All you provide is a bunch of dots that tell me I might have
            something planned that day.”
          </div>
          <div>
            <span style={{ fontStyle: "normal" }}>🙍🏻‍♀️</span> “Once upon a time I
            was able to{" "}
            <span className={ogstyles.highlight}>
              choose whether the default display was a month, week, or day
            </span>{" "}
            and it would stay that way. I could tap on a day of the month and
            that day would open. Now when I tap on an empty date in preparation
            to enter an appointment the empty date doesn't show up.”
          </div>
          <div>
            <span style={{ fontStyle: "normal" }}>🙍🏻</span> “All the separate
            calendars have a color to identify it. But when you're looking at
            the page that shows the entire month,{" "}
            <span className={ogstyles.highlight}>
              {" "}
              there's only a dot (.) to indicate there is an entry
            </span>{" "}
            for that date - that's it.”
          </div>
          <div>
            <span style={{ fontStyle: "normal" }}>🙍🏻‍♀️</span>   "...
            <span className={ogstyles.highlight}>
              add a monthly view that will show what the day's event
            </span>{" "}
            is by looking at the monthly calendar instead of necessitating
            clicking on the event.”
          </div>
          <div className={styles.surcnt} style={{ fontStyle: "normal" }}>
            <div className={styles.wf}>
              <img className={`${styles.surimg}`} src={one} alt="" />
              <img className={styles.surimg} src={two} alt="" />
              <div className={styles.surtxt}>
                The current design of the month view makes it difficult for
                users to quickly and easily identify events, as they are
                represented only as grey dots.
                <div styles={{ marginTop: "5px" }}>
                  Furthermore, navigating between different views (such as Week,
                  Day, and Year) is not intuitive and requires a cumbersome
                  action, such as rotating the entire phone.
                </div>
                <div styles={{ marginTop: "5px" }}>
                  The buttons located on both the bottom and top bars lack
                  visual consistency and do not seem to belong to a unified
                  design system.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.title}>Wireframing</div>
        <div className={styles.wf}>
          <img
            className={`${styles.dropshadow}, ${styles.wire}`}
            src={wf}
            alt=""
          />
          <div className={styles.vdpText}>
            <div>1. Improved Month and Week view</div>
            <div>2. Made switching views more obvious</div>
            <div>
              3. The bottom bar focuses on viewing and locating events (changing
              views/search), which is usually the primary usage for a mobile
              calendar app, thus closer to the thumb.
            </div>
            <div>
              4. The top bar focuses on modifying the calendar (accepting
              invitations, changing event colors, calendar titles, adding an
              event, etc.).
            </div>
          </div>
        </div>

        <div className={styles.title}>Icons and Colors</div>
        <div>
          <img className={styles.iconsimg} src={icons} alt="" />
        </div>
        <div className={styles.title}>Visual Design and Prototype</div>
        <div className={styles.wf}>
          <img className={styles.vd} src={vd} alt="" />
        </div>
        <div className={styles.wf}>
          <div className={styles.iframeCnt}>
            <iframe
              width="450"
              height="800"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbUDVhjtKruQzhKJchU4gii%2Fapple-calendar%3Fpage-id%3D0%253A1%26node-id%3D69-48%26starting-point-node-id%3D1%253A8%26scaling%3Dcontain%26mode%3Ddesign%26t%3DtuEZuKoWxfUV1u0w-1"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className={styles.title}>Reflection</div>
        <div className={styles.ref} style={{ fontSize: "20px" }}>
          <div>
            This project aimed to improve the Apple Calendar iOS app based on
            user feedback. Key issues identified were difficulties in viewing
            events in the month view, navigating between different views, and
            inconsistencies in UI components.
          </div>
          <div>
            The design process involved research, ideation, and prototyping.
            Wireframes were created to enhance the month view, introduce a
            weekly view, and establish visual consistency. Apple's design
            guidelines were followed for a cohesive experience.
          </div>
          <div>
            Tools like Goodnotes, Photoshop, and Figma were utilized for
            wireframing, design iterations, and prototyping. This project
            emphasizes user-centered design principles, addressing user needs,
            and enhancing UI/UX skills to improve the Apple Calendar app.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
