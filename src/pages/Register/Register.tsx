import React from "react";
import { RegisterForm } from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="register-page d-flex flex-column justify-content-center align-items-center h-100 ">
      <div className="row w-100 h-100">
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white background">
          <h1 className="mb-0">HELLO</h1>
        </div>
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
