export const validatePersonalInfo = (values) => {
  const errors = {};
  if (!values.fullName) errors.fullName = "Full name is required";
  
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) errors.phone = "Phone is required";

  return errors;
};
