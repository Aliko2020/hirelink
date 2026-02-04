const validateResume = (values) => {
  const errors = {};
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!values.resume) {
    errors.resume = "Resume is required";
  } else if (!allowedTypes.includes(values.resume.type)) {
    errors.resume = "Only PDF or DOC/DOCX files are allowed";
  } else if (values.resume.size > 5 * 1024 * 1024) {
    errors.resume = "File size should be less than 5MB";
  }

  return errors;
};

export default validateResume