import React from "react";
import { useField } from "formik";
import PhoneInput from "react-phone-input-2";

const PhoneField = ({ label, name }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="mb-4">
      <PhoneInput
        country={"gh"}            
        value={field.value}
        onChange={helpers.setValue} 
        inputClass="w-full border border-gray-300 rounded px-3 py-2 "
      />
      {meta.touched && meta.error && (
        <p className="text-red-600 text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default PhoneField;
