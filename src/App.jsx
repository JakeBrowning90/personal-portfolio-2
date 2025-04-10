import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";
import HomeView from "./components/HomeView";
import ProjectsView from "./components/ProjectsView";
import ContactView from "./components/ContactView";
import Error404View from "./components/Error404View";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <Link to="/" className="text-light">
          Home
        </Link>
        <Link to="/projects" className="text-light">
          Projects
        </Link>
        <Link to="/contact" className="text-light">
          Contact
        </Link>
      </nav>
      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomeView />} />
          {/* Projects */}
          <Route path="/projects" element={<ProjectsView />} />
          {/* Contact */}
          <Route path="/contact" element={<ContactView />} />
          {/* Error handler */}
          <Route path="*" element={<Error404View />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
