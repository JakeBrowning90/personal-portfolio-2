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
        <div className="container-fluid collapse navbar-collapse">
          <Link to="/" className="nav-link text-light">
            Home
          </Link>
          <Link to="/projects" className="nav-link text-light">
            Projects
          </Link>
          <Link to="/contact" className="nav-link text-light">
            Contact
          </Link>
        </div>
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
