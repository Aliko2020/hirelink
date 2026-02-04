import { useField } from "formik";

const FormField = ({ label, name, type = "text" }) => {
  const [field, meta] = useField(name);
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        {...field}
        id={name}
        type={type}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
      />
      {meta.touched && meta.error && (
        <p className="text-red-600 mt-1 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default FormField;
