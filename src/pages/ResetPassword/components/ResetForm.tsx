import React from "react";
import "../styles/ResetPassword.styles.scss";

export const ResetForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., sending a request)
  };

  return (
    <form
      className=" reset-password-form w-100 w-md-50"
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
        />
      </div>
      <button type="submit" className="btn reset-btn w-100 color-white">
        Send Reset Link
      </button>
    </form>
  );
};
