import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/header.css";
import { ReactComponent as BackIcon } from "../assets/icons/common/caret-left-bold.svg";

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="parent-header">
      <a onClick={() => navigate(-1)} className="header-back-btn">
        <div className="backwrapper">
          <BackIcon />
        </div>
      </a>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
