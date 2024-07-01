import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Nav className="flex-column bg-light p-3">
      <Link to="/projects" className="nav-link">
        Projects
      </Link>
      <Link to="/users" className="nav-link">
        Users
      </Link>
      <Link to="/timeTracker" className="nav-link">
        Dashboard
      </Link>
    </Nav>
  );
};

export default MyNavbar;
