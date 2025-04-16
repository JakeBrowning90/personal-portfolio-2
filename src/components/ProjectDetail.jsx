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
    <div>
      <Link to="/projects">Back</Link>
      <h1>Project Detail</h1>
      <h1>{targetProject.title}</h1>
      <p>{targetProject.desc}</p>
      <p>{targetProject.liveLink}</p>
      <p>{targetProject.repoLink}</p>
      <img src={targetProject.thumbnail} alt="" />
    </div>
  );
}

export default ProjectDetail;
