import React, { useState } from "react";
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
      <div className="px-4 py-5 my-5 text-center shadow">
        <h1>Jake Browning</h1>
        <h2>Web Developer</h2>
        <p>
          My name is Jake, and I love solving puzzles, simplifying complex
          concepts, and creating beautiful things.
        </p>
        <p>
          I started my web development career with an elective course, and have
          since cultivated my skills through IT studies, professional
          networking, and self-teaching with online resources.
        </p>
        <p>
          See more of my career experience on LinkedIn and my coding on GitHub.
        </p>
      </div>

      <p>Tech stack</p>
      {techStackList.map((icon) => {
        return <img src={icon} alt="" className="img-thumbnail" />;
      })}
    </div>
  );
}

export default HomeView;
