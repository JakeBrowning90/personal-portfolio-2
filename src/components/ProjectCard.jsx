import React, { useState } from "react";
// import apiSource

function ProjectCard({ project }) {
  // State declarations
  // Functions
  // Render
  return (
    <div className="container bg-secondary-subtle my-2">
      <p>{project.title}</p>
      <p>{project.desc}</p>
      <a href={project.liveLink}>Live</a>
      <a href={project.repoLink}>Repo</a>
    </div>
  );
}

export default ProjectCard;
