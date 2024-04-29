export interface FormErrors {
  email?: string;
  password?: string;
}
export const validateEmail = (email: string): string | undefined => {
  if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return "Please enter a valid email address";
  }
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return "Password is required";
  }
};

export const validateForm = (formData: any): FormErrors => {
  const errors: FormErrors = {
    email: "",
    password: "",
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

  return errors;
};
