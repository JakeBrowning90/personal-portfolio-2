import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";
import techStackList from "../techStackList";
import ProjectCard from "./ProjectCard";
import projects from "../projectList";
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
          I love solving puzzles, simplifying complex concepts, and creating
          beautiful things.
        </p>
        {/* <p>
          I started my web development career with an elective course, and have
          since cultivated my skills through IT studies, professional
          networking, and self-teaching with online resources.
        </p> */}
        {/* <p>
          See more of my career experience on LinkedIn and my coding on GitHub.
        </p> */}
        <p>
          Check out the links below to learn more about my work, and how to get
          in touch!
        </p>
        {/* <Link
          to="/about"
          className="mx-1 my-1 px-1 py-1 rounded bg-primary text-light"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="mx-1 my-1 px-1 py-1 rounded bg-primary text-light"
        >
          Projects
        </Link> */}
        <Link
          to="/contact"
          className="mx-1 my-1 px-1 py-1 rounded bg-primary text-light"
        >
          Contact
        </Link>
      </div>
      <div className="px-5 py-5 my-5 text-center shadow-lg">
        <h1>Featured Projects</h1>
        <div className="row g-2 row-cols-1 row-cols-sm-2 row-cols-md-3">
          {projects.featured.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>

      <div className="text-center px-5 mx-5 my-5">
        <h2>Tech stack</h2>

        {techStackList.map((icon) => {
          return (
            <img src={icon} alt="" className="mx-1 my-1 rounded" key={icon} />
          );
        })}
      </div>
    </div>
  );
}

export default HomeView;
