import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../store/applicationSlice";
import { addCandidate } from "../../../store/candidatesSlice";
import { prevStep } from "../../../store/applicationSlice";
import { useNavigate } from "react-router-dom";
import validateResume from "../../../validation/Resume";
import FileField from "../inputs/FileField";

const ResumeUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const application = useSelector((state) => state.application);

  return (
    <Formik
      initialValues={{ resume: application.resume }}
      validate={validateResume}
      onSubmit={(values, actions) => {
  
        dispatch(updateForm(values));

        const candidate = {
          ...application,
          ...values,
          id: crypto.randomUUID(), 
          stage: "Applied",       
          notes: "",
          interview: null,
          offer: null,
        };
        dispatch(addCandidate(candidate));

        actions.resetForm();
        setTimeout(() => {
          navigate("/apply/success");
        }, 500);
      }}
    >
      <Form className="mx-auto p-4 px-8">
        <FileField label="Resume *" name="resume" />

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => dispatch(prevStep())}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ResumeUpload;
