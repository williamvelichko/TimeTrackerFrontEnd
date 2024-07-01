import React, { useState } from "react";
import "../styles/Header.styles.scss";
import Navbar from "../../Navbar/Navbar";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="menu d-flex justify-content-end align-items-center">
        <div
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        <Navbar />
      </div>
    </div>
  );
};

export default Menu;
