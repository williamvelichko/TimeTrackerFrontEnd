import React from "react";
import { LoginForm } from "./components/Form";
import "./styles/Login.styles.scss";
import Landing from "../../components/Landing/Landing";

const Login: React.FC = () => {
  return (
    <div className="login-page d-flex flex-column justify-content-center align-items-center h-100 ">
      <div className="row w-100 h-100">
        <Landing text="Hello" />
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
