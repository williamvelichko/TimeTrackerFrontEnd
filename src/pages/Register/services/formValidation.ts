export interface FormErrors {
  email: string;
  password: string;
  confirmPassword: string;
}

export const validateEmail = (email: string): string | undefined => {
  if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return "Please enter a valid email address";
  }
};

export const validatePassword = (password: string): string | undefined => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): string | undefined => {
  if (confirmPassword !== password) {
    return "Passwords do not match";
  }
};

export const validateForm = (formData: any): FormErrors => {
  const errors: FormErrors = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (!formData.email) {
    errors.email = "Email is required";
  } else {
    const emailError = validateEmail(formData.email);
    if (emailError) {
      errors.email = emailError;
    }
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else {
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      errors.password = passwordError;
    }
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else {
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );
    if (confirmPasswordError) {
      errors.confirmPassword = confirmPasswordError;
    }
  }

  return errors;
};
