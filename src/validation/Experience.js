export const validateExperience = (values) => {
  const errors = {};

  const minYears = 0;
  const maxYears = 50;

  if (!values.experience) {
    errors.experience = "Experience is required";
  } else {
    const experience = values.experience.toString().trim();

    if (!/^\d+(\.\d+)?$/.test(experience)) {
      errors.experience = "Experience must be a number";
    } else if (Number(experience) < minYears) {
      errors.experience = `Experience cannot be less than ${minYears}`;
    } else if (Number(experience) > maxYears) {
      errors.experience = `Experience cannot be more than ${maxYears}`;
    }
  }

  if (!values.skills || !values.skills.trim()) {
    errors.skills = "Skills are required";
  }

  if (values.portfolio) {
    const portfolio = values.portfolio.trim();
    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.*)?$/i;

    if (!urlPattern.test(portfolio)) {
      errors.portfolio = "Invalid URL";
    }
  }

  return errors;
};
