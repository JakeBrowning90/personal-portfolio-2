import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ProjectsView from "./components/ProjectsView";
import ProjectDetail from "./components/ProjectDetail";
import ContactView from "./components/ContactView";
import Error404View from "./components/Error404View";

function App() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark px-2"
        data-bs-theme="dark"
      >
        <Link to="/" className="nav-link text-light">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/about" className="nav-item nav-link text-light">
              About
            </Link>
            <Link to="/projects" className="nav-item nav-link text-light">
              Projects
            </Link>
            <Link to="/contact" className="nav-item nav-link text-light">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomeView />} />
          {/* About */}
          <Route path="/about" element={<AboutView />} />
          {/* Projects Gallery*/}
          <Route path="/projects" element={<ProjectsView />} />
          {/* Project Detail*/}
          <Route path="/projects/*" element={<ProjectDetail />} />
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
