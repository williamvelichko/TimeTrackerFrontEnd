import React from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import "./styles/Header.styles.scss";

const Header = () => {
  return (
    <header className="header sticky-top d-flex w-100 flex-row justify-content-between align-items-center p-2 ">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
