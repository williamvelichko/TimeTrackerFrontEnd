import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="App vh-100">{children}</div>;
};

export default AuthLayout;
