import React from "react";
import { RegisterForm } from "./components/RegisterForm";
import Landing from "../../components/Landing/Landing";

const Register: React.FC = () => {
  return (
    <div className="register-page d-flex flex-column justify-content-center align-items-center h-100 ">
      <div className="row w-100 h-100">
        <Landing text="Hello" />
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <h1 className="register-text fw-bold text-start mb-4">SignUp</h1>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
