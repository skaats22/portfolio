import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

import uscLogo from "../../assets/usc-logo.png";
import galogo from "../../assets/galogo.webp";
import stanfordlogo from "../../assets/stanfordlogo.jpg";
import gcpLogo from "../../assets/gcpLogo.png";
import carpayLogo from "../../assets/carpayLogo.png";

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="May 2016"
        contentStyle={{ background: "#fce4ec", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #fce4ec" }}
      >
        <h3>B.A. Neuroscience</h3>
        <h4 className="timeline-subtitle">
          University of Southern California
          <img src={uscLogo} alt="USC" className="timeline-logo" />
        </h4>
        <p>Graduated May 2016</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2016 – Mar 2022"
        contentStyle={{ background: "#e3f2fd", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #e3f2fd" }}
      >
        <h3>Enterprise Account Manager</h3>
        <h4 className="timeline-subtitle">Epson America</h4>
        <p>
          Managed $30M of business through CDW and other large resellers. Led
          ecommerce initiatives and incentive programs.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Apr 2022 - Jan 2023"
        contentStyle={{ background: "#e3f2fd", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #e3f2fd" }}
      >
        <h3>Enterprise Account Executive</h3>
        <h4 className="timeline-subtitle">Gartner</h4>
        <p>
          Collaborated with CIOs at $1B+ companies to align on strategic tech
          priorities. Achieved 110% of quota.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jul 2023 – Nov 2024"
        contentStyle={{ background: "#e3f2fd", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #e3f2fd" }}
      >
        <h3>Manager, Business Development</h3>
        <h4 className="timeline-subtitle">Oxford Economics</h4>
        <p>
          Sold economic advisory services into finance teams; translated
          technical insights into business outcomes.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Feb 2025"
        contentStyle={{ background: "#fce4ec", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #fce4ec" }}
      >
        <h3>Software Engineering Immersive</h3>
        <h4 className="timeline-subtitle">
          General Assembly
          <img src={galogo} alt="GA" className="timeline-logo" />
        </h4>
        <p>12-week full-time program focused on full-stack development.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Mar 2025"
        contentStyle={{ background: "#fce4ec", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #fce4ec" }}
      >
        <h3>Machine Learning Specialization</h3>
        <h4 className="timeline-subtitle">
          Stanford Online
          <img src={stanfordlogo} alt="Stanford" className="timeline-logo" />
        </h4>
        <p>
          Completed 100-hour ML training including neural networks, tree
          methods, and model evaluation.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Jul 2025"
        contentStyle={{ background: "#fce4ec", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #fce4ec" }}
      >
        <h3>Google Cloud Certified</h3>
        <h4 className="timeline-subtitle">
          Google Cloud Digital Leader
          <img src={gcpLogo} alt="Google Cloud" className="timeline-logo" />
        </h4>
        <p>
          Learned core GCP services, IAM, and deployment strategies. Certified
          in cloud foundations and operations.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jul 2025 – Present"
        contentStyle={{ background: "#e3f2fd", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #e3f2fd" }}
      >
        <h3>Technical Product Manager</h3>
        <h4 className="timeline-subtitle">
          Carpay
          <img src={carpayLogo} alt="Carpay Logo" className="timeline-logo" />
        </h4>
        <p>
          1. Built and deployed an outbound AI voice agent using the Telnyx
          Voice API to automate borrower outreach, payment collection, and call
          logging.
          <br />
          2. Led the end-to-end launch of Upcharge, a new payment-processing
          add-on helping businesses eliminate credit-card fees and increase
          upfront revenue.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
