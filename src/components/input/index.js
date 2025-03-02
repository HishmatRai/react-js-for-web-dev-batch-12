import React from "react";
const Input = ({ title, type = "text", placeholder, value, onChange,disabled }) => {
  return (
    <div>
      <p>{title}:</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
export default Input;
