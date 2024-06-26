import React, { useState } from "react";
import "../styles/Register.styles.scss";
import { validateForm, FormErrors } from "../services/formValidation";
import { signUp } from "../../../services/auth.service";
import useAuth from "../../../hooks/useAuth";
export const RegisterForm: React.FC = () => {
  const { saveToken } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const credentials = {
    email: form.email,
    password: form.password,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm(form);
    const hasErrors = Object.values(formErrors).some((error) => error !== "");

    if (!hasErrors) {
      const result = await signUp(credentials);
      saveToken(result.access_token);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form
      className="register-form needs-validation w-75"
      onSubmit={handleRegister}
      noValidate
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className={`form-control ${errors.email && "is-invalid"}`}
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          className={`form-control ${errors.confirmPassword && "is-invalid"}`}
          id="confirmPassword"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <div className="invalid-feedback">{errors.confirmPassword}</div>
        )}
      </div>

      <button type="submit" className="btn signup-btn w-100 mb-2">
        Sign Up
      </button>

      <div className="text-center">
        <p className="mb-0">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </form>
  );
};
