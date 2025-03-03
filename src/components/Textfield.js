import React from "react";

const Textfield = ({ label, type = "text", placeholder, value, onChange, name, className }) => {
  return (
    <div className={`textfield-container ${className}`}>
      {label && <label className="textfield-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="textfield-input"
      />
    </div>
  );
};

export default Textfield;
