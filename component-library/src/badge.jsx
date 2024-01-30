// Badge.jsx
import React from "react";
import { IconContext } from "react-icons";

const Badge = ({ color, size, icon }) => {
  const badgeStyle = {
    backgroundColor: color,
    padding: "8px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <IconContext.Provider value={{ color: "white", size: size }}>
      <div style={badgeStyle}>
        {icon}
        <span style={{ marginLeft: "5px" }}>Badge Content</span>
      </div>
    </IconContext.Provider>
  );
};

export default Badge;
