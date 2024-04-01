import React from "react";
import "../styles/Login.styles.scss";

export const LoginForm = () => {
  return (
    <form className="login-form w-75">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
        />
        <div className="mb-3 text-end">
          <a className="btn btn-link fs-6" href="/reset-password">
            Forgot Password?
          </a>
        </div>
      </div>

      <button type="submit" className="btn login-btn w-100 mb-2">
        Login
      </button>
      <div className="text-center">
        <p className="mb-0">
          Don't have an account? <a href="#">Signup</a>
        </p>
      </div>
    </form>
  );
};
