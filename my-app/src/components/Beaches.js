import React from "react";
import NavBar from "./NavBar";
import ogstyles from "./main.module.css";
import styles from "./beaches.module.css";
import bg from "../images/beachesbg.png";
import oblow from "../images/oblow.png";
import obhigh from "../images/obhigh.png";
import freetrial from "../images/freetrial.png";
import pi from "../images/pi.png";
import bauxr1 from "../images/bauxr1.png";
import bauxr2 from "../images/bauxr2.png";
import personas from "../images/bapersonas.png";
import babrain1 from "../images/babrain1.png";
import babrain2 from "../images/babrain2.png";
import babrain3 from "../images/babrain3.png";
import babrain4 from "../images/babrain4.png";
import bamid1 from "../images/bamid1.png";
import bamid2 from "../images/bamid2.png";
import babusi1 from "../images/babusi1.png";
import babusi2 from "../images/babusi2.png";
import baidea1 from "../images/baidea1.png";
import baidea2 from "../images/baidea2.png";
import bah1 from "../images/bah1.png";
import bah2 from "../images/bah2.png";
import bah3 from "../images/bah3.png";

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
              <li>Onboarding</li>
              <li>Subscription Screen</li>
              <li>Beach Screen</li>
              <li>Widgets</li>
            </ul>
          </div>
          {/* Project Context */}
          <div className={styles.sptBox2}>
            <div className={styles.sptTitle}>Project Context</div>
            <ul className={styles.sptContent}>
              <li>Jan-May 2023</li>
              <li>Team: 2 People</li>
            </ul>
          </div>
          {/* Tools Used */}
          <div className={styles.sptBox2}>
            <div className={styles.sptTitle}>Tools Used</div>
            <ul className={styles.sptContent}>
              <li>Figma</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
        <div className={styles.title}>Onboarding</div>
        <div className={styles.wf}>
          <img className={styles.oblow} src={oblow} alt="" />
        </div>
        <div style={{ margin: "50px" }}>
          I revamped the onboarding process for the Beaches App during my
          internship, aiming to enhance{" "}
          <span className={ogstyles.highlight}>
            user engagement and subscription rates.
          </span>
          Using Figma, I analyzed and redesigned the registration process,
          simplifying it by{" "}
          <span className={ogstyles.highlight}>
            reducing form fields and clarifying benefits.
          </span>{" "}
          Through this, since about a month after launch, we were able to obtain
          around <span className={ogstyles.highlight}>200+ users</span>{" "}
          registered with their email.
        </div>
        <div className={styles.wf}>
          <img className={styles.oblow} src={obhigh} alt="" />
        </div>
        <div className={styles.title}>Onboarding - Prototype</div>
        <div className={styles.obp}>
          <iframe
            width="450"
            height="800"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOZhHNu8E321ZvdKKZUKgIf%2FBA-onboarding%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-99%26viewport%3D694%252C538%252C0.33%26t%3D4rBjbZPJhJlsitrw-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A99%26show-proto-sidebar%3D1%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.title}>Free Trial Screen</div>
        <div style={{ marginTop: "30px" }}>
          I spearheaded a crucial project during my internship:{" "}
          <span className={ogstyles.highlight}>
            revamping the subscription interface{" "}
          </span>{" "}
          for the Beaches App. This interface is pivotal for converting users to
          our premium service, Beaches+. The initial design lacked finesse, so I
          led a redesign to streamline the user journey from interest to
          commitment.
        </div>
        <div className={styles.wf}>
          <img style={{ width: "80%" }} src={freetrial} alt="" />
        </div>

        <div style={{ marginTop: "30px " }}>
          Inspired by a case study done in growth.design, the goal of these
          iterations were to address the{" "}
          <span className={ogstyles.highlight}>
            customer’s fear of getting charged after the trial.
          </span>{" "}
          In addition to presenting the product’s core premium feature,
          notifications based on beach conditions, I made sure to tackle the
          pain and fear of the user wasting money due to forgetting to cancel
          their subscription.
        </div>

        <div className={styles.title}>Beach Screen Problem Identification</div>
        <div className={styles.wf}>
          <img style={{ width: "25%" }} src={pi} alt="" />
        </div>
        <div style={{ margin: "50px" }}>
          This was the initial beach screen UI. We identified that users were
          having issues with{" "}
          <span className={ogstyles.highlight}>
            accessing valuable information{" "}
          </span>{" "}
          such as amenities, pictures, and directions, which are all in the{" "}
          <span className={ogstyles.highlight}> “More Info”</span> tab. 
        </div>

        <img style={{ width: "80%" }} src={bauxr1} alt="" />

        <img className={styles.uxr2} src={bauxr2} alt="" />

        <div className={styles.title}>User Personas</div>
        <div className={styles.wf}>
          <img style={{ width: "90%" }} src={personas} alt="" />
        </div>
        <div className={styles.title}>Brainstorming and Low-Fidelity</div>
        <div className={styles.wf}>
          <img className={styles.babrain1} src={babrain1} alt="" />
        </div>
        <div className={styles.wf}>
          <span className={ogstyles.highlight}>🧠 Brainstorm #1: </span>
          This iteration consists of simple tabs which also does a good job of
          making the features more obvious.
        </div>
        <div className={styles.wf}>
          <img style={{ width: "70%" }} src={babrain2} alt="" />
        </div>
        <div className={styles.wf}>
          <span className={ogstyles.highlight}>🧠 Brainstorm #2: </span> This
          iteration consists of simple tabs which also does a good job of making
          the features more obvious.
        </div>
        <div className={styles.wf}>
          <img style={{ width: "20%" }} src={babrain3} alt="" />
        </div>
        <div className={styles.wf}>
          <span className={ogstyles.highlight}>🧠 Brainstorm #3: </span> The
          last iteration puts everything into one page so that the user can’t
          miss the features.{" "}
        </div>
        <div className={styles.wf}>
          <img style={{ width: "70%" }} src={babrain4} alt="" />
        </div>
        <div className={styles.wf}>
          This is a more fleshed out version of Brainstorm #1.
        </div>
        <div className={styles.title}>Mid-Fidelity</div>
        <div className={styles.wf}>
          <iframe
            width="450px"
            height="800px"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxyMD2CmUETZKxKZ7WQAS8l%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-35%26viewport%3D609%252C470%252C0.37%26t%3Dn8MzInO0wPNxMzgK-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A35%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
          <img className={styles.mid} src={bamid1} alt="" />
        </div>
        <div style={{ margin: "20px" }}>
          <span className={ogstyles.highlight}>✨ Iteration 1:</span> In this
          iteration, I displayed images similar to the fleshed out version of
          brainstorm #2. I focused on displaying the forecast in a more
          intuitive way, with a chart that shows an overlay with a graph. The
          overlay also makes it easy to change which day to view.
        </div>
        <div className={styles.wf}>
          <iframe
            width="450px"
            height="800px"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfQiVHClkpczHhye5oHXVcZ%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-1247%26viewport%3D495%252C647%252C0.45%26t%3Da7l8cvvGnuUVmnhj-1%26scaling%3Dscale-down%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
          <img className={styles.mid} src={bamid2} alt="" />
        </div>
        <div style={{ margin: "20px" }}>
          <span className={ogstyles.highlight}>✨ Iteration 2:</span> This
          iteration displays the forecast in a list, with a chart for the
          current day’s conditions as it was in the initial design.
          Additionally, it has tabs for the different functions, which was
          explored in the brainstorm.
          <br />
          <br />
          <br />
          <br />
          <br />
          Eventually, it was internally decided to go with the{" "}
          <span className={ogstyles.highlight}>tabs idea.</span> We were also
          tasked to change up how nearby{" "}
          <span className={ogstyles.highlight}>businesses</span> were displayed.
          <div className={styles.wf}>
            <img className={styles.babusi} src={babusi1} alt="" />
            <img className={styles.babusi} src={babusi2} alt="" />
          </div>
          <div className={styles.center}>
            Initial Version: "Businesses" button with an overlay that pops-up
            with only 1 business nearby.
          </div>
          <div className={styles.wf}>
            <img style={{ width: "50%" }} src={baidea1} alt="" />
          </div>
          <div className={styles.wf}>
            <span className={ogstyles.highlight}>💡 Idea #1:</span> Having a tab
            with a map overlay when a business is clicked.
          </div>
          <div className={styles.wf}>
            <img style={{ width: "50%" }} src={baidea2} alt="" />
          </div>
          <div className={styles.wf}>
            <span className={ogstyles.highlight}>💡 Idea #2:</span> Keeping the
            button which opens an overlay, which consists of a tab that shows
            nearby businesses and another tab showing the map for the businesses
            nearby.
          </div>
          <div className={styles.title}>High-Fidelity</div>
          <div className={styles.wf}>
            <iframe
              width="500px"
              height="900px"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJiRfdA10MmwC0ENNPv3hT0%2FBeaches---2.0-Design%3Fpage-id%3D15%253A16535%26type%3Ddesign%26node-id%3D819-607%26viewport%3D-1679%252C-1335%252C0.23%26t%3D8NccibSMmX2yoqo5-1%26scaling%3Dscale-down%26starting-point-node-id%3D819%253A607%26show-proto-sidebar%3D1%26mode%3Ddesign"
              allowfullscreen
            ></iframe>
            <img style={{ height: "900px" }} src={bah1} alt="" />
          </div>
          <div style={{ margin: "20px" }}>
            <span className={ogstyles.highlight}>✨ Iteration 1:</span>
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Live: </span> The "Live" tab
            shows current conditions of the beach. It also has small buttons to
            save conditons the user wants more details on.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Forecast: </span> The
            "Forecast" tab shows the forecast for the day the user chooses using
            the controller at the bottom of the screen. Moreover, it shows the
            graphs for the conditions that the user has chosen in the "Live"
            tab.
          </div>
          <div style={{ marginTop: "200px" }}></div>
          <div className={styles.wf}>
            <iframe
              width="500px"
              height="900px"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1YE8702peksLQaqxUy8nOW%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D0-14%26viewport%3D497%252C438%252C0.45%26t%3D6C7FHM75VpffGBXN-1%26scaling%3Dscale-down%26starting-point-node-id%3D0%253A14%26mode%3Ddesign"
              allowfullscreen
            ></iframe>
            <img style={{ height: "900px" }} src={bah2} alt="" />
          </div>
          <div style={{ margin: "20px" }}>
            <span className={ogstyles.highlight}>✨ Iteration 2:</span>
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Forecast: </span> The
            "Forecast" tab shows the condtions for the current day. Similar to
            iteration 1, the user can choose which feature to view in more
            detail, and the graph for that conditon will be shown below.
          </div>
          <div style={{ marginTop: "200px" }}></div>
          <div className={styles.wf}>
            <iframe
              width="500px"
              height="900px"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FO2FK0FTzCt3E6vQiwQbUZP%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-3%26viewport%3D581%252C685%252C0.29%26t%3DPlWYzRQm1cTuScQv-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A3%26show-proto-sidebar%3D1%26mode%3Ddesign"
              allowfullscreen
            ></iframe>
            <img style={{ height: "900px" }} src={bah3} alt="" />
          </div>
          <div style={{ margin: "20px" }}>
            <span className={ogstyles.highlight}>✨ Iteration 3:</span>
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Forecast: </span> Similar to
            iteration 2, the forecast tab shows the current conditons. This
            iteration presents relevant information to the user in a widget
            view. When a widget is clicked, more detailed information pops-up as
            an overlay.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Details: </span> This tab shows
            beach amenities and prohibited activities.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beaches;
