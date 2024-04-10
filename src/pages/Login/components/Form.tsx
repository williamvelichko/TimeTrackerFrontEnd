import React, { useState } from "react";
import "../styles/Login.styles.scss";

export const LoginForm: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please fill in both fields.");
      return;
    }
  };

  return (
    <form className="login-form w-75">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
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
          value={form.password}
          onChange={handleChange}
        />
        <div className="mb-3 text-end">
          <a className="btn btn-link fs-6" href="/reset-password">
            Forgot Password?
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="btn login-btn w-100 mb-2"
        onSubmit={handleLogin}
      >
        Login
      </button>
      <div className="text-center">
        <p className="mb-0">
          Don't have an account? <a href="/register">Signup</a>
        </p>
      </div>
    </form>
  );
};
