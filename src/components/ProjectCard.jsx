import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";
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
    <div className="col">
      <div className="card h-100">
        <img src={project.thumbnail} alt="" className="card-img-top h-100" />
        <div className="card-body text-center">
          <Link to={`/projects/${project.id}`}>
            <p className="card-title fw-bold">{project.title}</p>
          </Link>
          {/* <p>{project.desc}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
