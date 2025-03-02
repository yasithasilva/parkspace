import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/styles/header.css";
import { ReactComponent as BackIcon } from "../assets/icons/common/caret-left-bold.svg";

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="parent-header">
      <a onClick={() => navigate(-1)}>
        <div className="backwrapper">
          <BackIcon />
        </div>
      </a>
      <h1>Homescreen</h1>
    </div>
  );
};

export default Header;
