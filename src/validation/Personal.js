export const validatePersonalInfo = (values) => {
  const errors = {};

  const nameMin = 3;
  const nameMax = 30;
  const emailMax = 50;
  const phoneMin = 9;
  const phoneMax = 10;

  if (!values.fullName) {
    errors.fullName = "Name required";
  } else if (values.fullName.length < nameMin) {
    errors.fullName = `Name must be at least ${nameMin} characters`;
  } else if (values.fullName.length > nameMax) {
    errors.fullName = `Name must be under ${nameMax} characters`;
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (values.email.length > emailMax) {
    errors.email = `Email must be under ${emailMax} characters`;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (values.phone.length < phoneMin) {
    errors.phone = `Phone must be at least ${phoneMin} digits`;
  } else if (values.phone.length > phoneMax) {
    errors.phone = `Phone must be under ${phoneMax} digits`;
  }

  return errors;
};
