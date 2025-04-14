import React, { useState } from "react";
import { Link, useParams } from "react-router";

// import apiSource

function ProjectDetail(
  {
    // Props
  }
) {
  // State declarations
  const [project, setProject] = useState("")
  // Functions
  const { projectId } = useParams();
  
  // Render
  return (
    <div>
      <h1>Project Detail</h1>
      <p>{projectId}</p>
    </div>
  );
}

export default ProjectDetail;
