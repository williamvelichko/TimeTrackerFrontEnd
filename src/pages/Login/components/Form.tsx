import React, { useState } from "react";
import "../styles/Login.styles.scss";
import { validateForm, FormErrors } from "../services/formValidation";

export const LoginForm: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  };
  return (
    <form
      className="login-form needs-validation w-75"
      onSubmit={handleLogin}
      noValidate
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className={`form-control ${errors.email && "is-invalid"}`}
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className={`form-control ${errors.password && "is-invalid"}`}
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <div className="invalid-feedback">{errors.password}</div>
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
          Don't have an account? <a href="/register">Signup</a>
        </p>
      </div>
    </form>
  );
};
