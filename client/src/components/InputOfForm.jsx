import React from "react";

const InputOfForm = ({ value, handleChange, label, type = "text", name }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
};

export default InputOfForm;
