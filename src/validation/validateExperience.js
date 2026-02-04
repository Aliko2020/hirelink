export const validateExperience = (values) => {
  const errors = {};

  if (!values.experience) errors.experience = "Experience is required";
  if (!values.skills) errors.skills = "Skills are required";

  if (values.portfolio) {
    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.*)?$/i;
    if (!urlPattern.test(values.portfolio)) {
      errors.portfolio = "Invalid URL";
    }
  }

  return errors;
};
