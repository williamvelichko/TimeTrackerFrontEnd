import React from "react";
import "./styles/Landing.styles.scss";

interface LandingProps {
  text: string;
}

const Landing: React.FC<LandingProps> = ({ text }) => {
  return (
    <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white landing-background">
      <h1 className="mb-0">{text}</h1>
    </div>
  );
};

export default Landing;
