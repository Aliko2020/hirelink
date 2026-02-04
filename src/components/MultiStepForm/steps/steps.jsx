import PersonalInfo from "./PersonalInfo";
import ExperienceSkills from "./ExperienceSkills";
import ResumeUpload from "./ResumeUpload";

export const steps = [
  { title: "Personal Info", component: <PersonalInfo /> },
  { title: "Experience", component: <ExperienceSkills /> },
  { title: "Resume Upload", component: <ResumeUpload /> },
];
