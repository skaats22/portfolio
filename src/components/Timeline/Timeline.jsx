import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";


export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2012 – 2016"
      >
        <h3 className="vertical-timeline-element-title">B.A. Neuroscience</h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Southern California
        </h4>
        <p>Graduated May 2016</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 – 2022"
      >
        <h3 className="vertical-timeline-element-title">
          Enterprise Account Manager
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Epson America</h4>
        <p>
          Managed $30M of business through CDW and other large resellers. Led
          ecommerce initiatives and incentive programs.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 – 2023"
      >
        <h3 className="vertical-timeline-element-title">
          Manager, Business Development
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Oxford Economics
        </h4>
        <p>
          Sold economic advisory services into finance teams; translated
          technical insights into business outcomes.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023"
      >
        <h3 className="vertical-timeline-element-title">
          Enterprise Account Executive
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Gartner</h4>
        <p>
          Collaborated with CIOs at $1B+ companies to align on strategic tech
          priorities. Achieved 110% of quota.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Feb 2025"
      >
        <h3 className="vertical-timeline-element-title">
          Software Engineering Immersive
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          General Assembly
        </h4>
        <p>12-week full-time program focused on full-stack development.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2025"
      >
        <h3 className="vertical-timeline-element-title">
          Machine Learning Specialization
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Stanford Online (Coursera)
        </h4>
        <p>
          Completed 100-hour ML training including neural networks, tree
          methods, and model evaluation.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
