import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, nextStep, prevStep } from "../../../store/applicationSlice";
import FormField from "../inputs/FormField";
import { validateExperience } from "../../../validation/Experience";

const ExperienceSkills = () => {
  const dispatch = useDispatch();
  const { experience, skills, portfolio } = useSelector(
    (state) => state.application
  );

  return (
    <Formik
      initialValues={{ experience, skills, portfolio }}
      validate={validateExperience}
      onSubmit={(values) => {
        dispatch(updateForm(values));
        dispatch(nextStep());
      }}
    >
      <Form className="mx-auto p-4 ">
        <FormField label="Years of Experience *" name="experience" />
        <FormField label="Skills *" name="skills" />
        <FormField label="Portfolio Link" name="portfolio" type="url" />

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => dispatch(prevStep())}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ExperienceSkills;
