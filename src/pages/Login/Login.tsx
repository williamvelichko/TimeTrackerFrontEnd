import React from "react";
import { LoginForm } from "./components/Form";
import "./styles/Login.styles.scss"; // Assuming you have a SCSS file for custom styles

const Login = () => {
  return (
    <div className="login-page d-flex flex-column justify-content-center align-items-center h-100 ">
      <div className="row w-100 h-100">
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white background">
          <h1 className="mb-0">HELLO</h1>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <h1 className="login-text fw-bold text-start mb-4">Login</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
