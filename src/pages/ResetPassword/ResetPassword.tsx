import React from "react";
import { ResetForm } from "./components/ResetForm";

const ResetPassword = () => {
  return (
    <div className="container d-flex justify-content-center flex-column align-items-center h-100 w-100">
      <div className="w-100">
        <h3 className="reset-text fw-bold text-start mb-4">Forgot Password</h3>
      </div>
      <ResetForm />
    </div>
  );
};

export default ResetPassword;
