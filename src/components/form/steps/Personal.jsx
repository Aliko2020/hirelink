import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, nextStep } from "../../../store/applicationSlice";
import FormField from "../inputs/FormField";
import { validatePersonalInfo } from "../../../validation/Personal";
import PhoneField from "../inputs/PhoneField";



const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { fullName, email, phone } = useSelector((state) => state.application);

  return (
    <Formik
      initialValues={{ fullName, email, phone }}
      validate={validatePersonalInfo}
      onSubmit={(values) => {
        dispatch(updateForm(values));
        dispatch(nextStep());
      }}
    >
      <Form className="mx-auto p-4 ">
        <FormField label="Full Name *" name="fullName" />
        <FormField label="Email *" name="email" type="email" />
        <PhoneField label="Phone *" name="phone" />

        <div className="flex justify-end mt-4">
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

export default PersonalInfo;
