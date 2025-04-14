import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";
import ProjectCard from "./ProjectCard";
import projectsList from "../projectList";
// import apiSource

function ProjectsView(
  {
    // Props
  }
) {
  // State declarations
  // Functions

  // Render
  return (
    <div className="px-5 py-5 ">
      <h1>Projects</h1>
      <div className="container-fluid row g-2 row-cols-1 row-cols-sm-2 row-cols-md-4">
        {projectsList.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsView;
