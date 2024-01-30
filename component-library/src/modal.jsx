// Modal.jsx
import React, { useState } from "react";

const Modal = ({ show, onClose, size, children }) => {
  const modalStyle = {
    display: show ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 999,
  };

  return (
    <div style={modalStyle}>
      {children}
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
};

const Header = ({ children }) => {
  return <div style={{ marginBottom: "10px" }}>{children}</div>;
};

const Body = ({ children }) => {
  return <div style={{ marginBottom: "10px" }}>{children}</div>;
};

const Footer = ({ children }) => {
  return <div>{children}</div>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
