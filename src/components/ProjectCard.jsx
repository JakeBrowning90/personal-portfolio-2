import React, { useState } from "react";
// import apiSource

function ProjectCard({ project }) {
  // State declarations
  // Functions
  // Render
  return (
    // <div className="container bg-secondary-subtle my-2">
    //   <p>{project.title}</p>
    //   <p>{project.desc}</p>
    //   <a href={project.liveLink}>Live</a>
    //   <a href={project.repoLink}>Repo</a>
    // </div>
    <div className="col card mw-25" >
      {/* <img src={project.thumbnail} alt="" className="card-img-top" /> */}
      <div className="card-body">
        <p className="card-title">{project.title}</p>
        {/* <p>{project.desc}</p> */}
        <a href={project.liveLink}>Live</a>
        <a href={project.repoLink}>Repo</a>
      </div>
    </div>
  );
}

export default ProjectCard;
