import React, { useState } from "react";
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
    <div>
      <h1>Projects</h1>
      {projectsList.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

export default ProjectsView;
