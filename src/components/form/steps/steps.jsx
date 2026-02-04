import PersonalInfo from "./Personal";
import ExperienceSkills from "./Experience";
import ResumeUpload from "./Resume";

export const steps = [
  { title: "Personal Info", component: <PersonalInfo /> },
  { title: "Experience", component: <ExperienceSkills /> },
  { title: "Resume Upload", component: <ResumeUpload /> },
];
