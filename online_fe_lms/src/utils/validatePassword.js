export const validatePassword = (password = "", confirmPassword = "") => {
  const error = [];
  password.length < 8 &&
    error.push("Password must be at least 8 characters long");
  !/[A-Z]/.test(password) &&
    error.push("Password must contain at least one uppercase letter");
  !/[a-z]/.test(password) &&
    error.push("Password must contain at least one lowercase letter");
  !/[0-9]/.test(password) &&
    error.push("Password must contain at least one number");

  !/[!@#$%^&*(){}|]/.test(password) &&
    error.push("Password must contain at least one special character");
  password === confirmPassword &&
    error.push("Password and confirm password do not match");
  return error;
};
