import React from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Header = () => {
  return (
    <header className="header d-flex w-100 flex-row">
      <div className="w-50">
        <Logo />
      </div>
      <div className="w-50">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
