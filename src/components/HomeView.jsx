import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";
import techStackList from "../techStackList";
// import apiSource

function HomeView(
  {
    // Props
  }
) {
  // State declarations
  // Functions
  // Render
  return (
    <div>
      <div className="px-5 py-5 my-5 text-center shadow-lg">
        <h1>Jake Browning</h1>
        <h2>Web Developer</h2>
        <p>
          My name is Jake, and I love solving puzzles, simplifying complex
          concepts, and creating beautiful things.
        </p>
        {/* <p>
          I started my web development career with an elective course, and have
          since cultivated my skills through IT studies, professional
          networking, and self-teaching with online resources.
        </p> */}
        <p>
          See more of my career experience on LinkedIn and my coding on GitHub.
        </p>
        <Link>About Me</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </div>

      <p>Tech stack</p>
      {techStackList.map((icon) => {
        return <img src={icon} alt="" className="mx-1 my-1 rounded" />;
      })}
    </div>
  );
}

export default HomeView;
