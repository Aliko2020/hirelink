import { Formik, Form, useField } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, prevStep } from "../../../store/applicationSlice";
import { useNavigate } from "react-router-dom";
import validateResume from "../../../validation/validateResume";
import { toast } from "react-toastify";
import FileField from "../../FormFields/FileField";


const ResumeUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resume } = useSelector((state) => state.application);

  return (
    <Formik
      initialValues={{ resume }}
      validate={validateResume}
      onSubmit={(values, actions) => {
        dispatch(updateForm(values));

        toast.success("Submitted successfully!");

        actions.resetForm();

        setTimeout(() => {
          navigate("/");
        }, 1000);
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
