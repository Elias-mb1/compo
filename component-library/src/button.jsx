// Button.jsx
import React from "react";

const Button = ({ size, color, disabled }) => {
  const buttonStyle = {
    padding: `${size === "large" ? "10px" : "5px"}`,
    backgroundColor: color,
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? "0.5" : "1",
  };

  return (
    <button style={buttonStyle} disabled={disabled}>
      Click me
    </button>
  );
};

export default Button;
