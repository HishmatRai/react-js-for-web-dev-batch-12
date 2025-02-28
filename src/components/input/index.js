import React from "react";
const Input = ({ title, type = "text", placeholder, value, onChange }) => {
  return (
    <div>
      <p>{title}:</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
