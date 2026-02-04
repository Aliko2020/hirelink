import { useField } from "formik";


const FileField = ({ label, name }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => helpers.setValue(e.currentTarget.files[0])}
        className="w-full border border-gray-300 px-3 py-2 rounded-md"
      />
      {meta.touched && meta.error && (
        <p className="text-red-600 text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default FileField