// HomePage
import { NavLink, Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Timeline from "../../components/Timeline/Timeline";
import profPic from "../../assets/linkedinprofpic.jpeg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <h1>Portfolio of Steve Kaats</h1>
      <h3>Leveraging Technology to Solve Business Problems</h3>
      <div className="body">
        <div className="biopicContainer">
          <img src={profPic} alt="profile picture" />
          <div className="bio">
            <div>
              I blend product, engineering, and GTM experience to turn ideas
              into ship-ready solutions. Before moving into software
              development, I spent 8+ years in enterprise sales and business
              development managing $30M in annual revenue as well as partnering with
              Fortune 1000 technology leaders. That background gives me a strong
              understanding of customer pain points and how technical products
              drive measurable outcomes.
              <br />
              <br />
            </div>
            <div>
              To deepen my technical foundation, I completed a full-time
              software engineering immersive and expanded into AI, cloud, and
              full-stack development. Since then, I’ve built production systems
              ranging from React and Django applications to autonomous voice
              agents and payment workflows.
              <br />
              <br />
            </div>
            <div>
              Today, I focus on using technology to streamline operations,
              improve user experience, and support teams with tools that
              actually move the business forward.
            </div>
          </div>
        </div>
      </div>
      <div className="timelineWrapper">
        <h2 className="sectionSubtitle">Career & Learning Timeline</h2>
        <Timeline />
      </div>
    </>
  );
}
