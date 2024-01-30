// Alert.jsx
import React from "react";

const Alert = ({ color, icon }) => {
  const alertStyle = {
    backgroundColor: color,
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    marginRight: "10px",
  };

  return (
    <div style={alertStyle}>
      <span style={iconStyle}>{icon}</span>
      This is an alert!
    </div>
  );
};

export default Alert;
