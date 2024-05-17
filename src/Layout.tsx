import React, { ReactNode } from "react";
import Header from "./components/Header/Header";

interface AuthProviderProps {
  children: ReactNode;
}

const Layout: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <div className="App vh-100">
      <Header />
      <div style={{ marginTop: "54px" }}>{children}</div>
    </div>
  );
};

export default Layout;
