// HomePage
import { NavLink, Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import profPic from "../../assets/linkedinprofpic.jpeg";

export default function HomePage() {
  return (
    <>
      <h1>Portfolio of Steve Kaats: From Sales to Tech</h1>
      <div>
        <img src={profPic} alt="profile picture" />
        <div>
          I’ve always been passionate about technology and how it can solve real
          business problems. With over 8 years of experience in enterprise sales
          and business development—managing $30M in annual revenue and working
          closely with Fortune 1000 CIOs—I bring a unique perspective that
          combines deep client understanding with technical fluency. To build on
          this passion and bridge the gap between business and technology, I
          completed a 12-week full-time software engineering bootcamp. Whether
          as a software engineer or in account management or client success
          roles supporting technical products, I’m driven to translate complex
          technical concepts into impactful solutions that align with strategic
          priorities. My hands-on experience with React, Django, and machine
          learning, paired with my client-focused mindset, equips me to deliver
          better outcomes faster.
        </div>
      </div>
    </>
  );
}
