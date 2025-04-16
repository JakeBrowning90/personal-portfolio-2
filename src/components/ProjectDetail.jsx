import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router";
import projectsList from "../projectList";

// import apiSource

function ProjectDetail(
  {
    // Props
  }
) {
  // State declarations
  // Functions
  let projectId = useParams();
  let targetProject = projectsList.find(
    (project) => project.id == projectId.id
  );

  // Render
  return (
    <div className="container px-4 py-5 shadow-lg">
      {/* <h1>Project Detail</h1> */}
      <div className="row flex-leg-row-reverse g-5 py-5">
        <div className="col-lg-6">
          <Link to="/projects">Back</Link>
          <h1>{targetProject.title}</h1>
          <p>{targetProject.desc}</p>

          <a
            href={targetProject.liveLink}
            target="_blank"
            className="mx-1 my-1 px-1 py-1 rounded bg-primary text-light"
          >
            Live Site
          </a>
          <a
            href={targetProject.repoLink}
            target="_blank"
            className="mx-1 my-1 px-1 py-1 rounded bg-primary text-light"
          >
            GitHub Repo
          </a>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={targetProject.thumbnail}
            alt=""
            className="mx-lg-auto img-fluid"
            width="700"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
