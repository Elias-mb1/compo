// Card.jsx
import React from "react";

const Card = ({ href, imgAlt, imgSrc, children }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    maxWidth: "300px",
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    marginBottom: "8px",
  };

  return (
    <a href={href} style={cardStyle}>
      <img src={imgSrc} alt={imgAlt} style={imgStyle} />
      {children}
    </a>
  );
};

export default Card;
