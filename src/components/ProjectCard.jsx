import React, { useState } from "react";
// import apiSource

function ProjectCard({ project }) {
  // State declarations
  // Functions
  // Render
  return (
    <div className="bg-secondary-subtle">
      <p>{project.title}</p>
      <p>{project.desc}</p>
      <a href={project.liveLink}>Live</a>
      <a href={project.repoLink}>Repo</a>
    </div>
  );
}

export default ProjectCard;
