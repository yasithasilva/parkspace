import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import GoogleIcon from "../assets/icons/login/google.png";
import AppleIcon from "../assets/icons/login/mac-os-logo.png";
import { Box, Typography } from "@mui/material";
import { ReactComponent as BasementPark } from "../assets/img/Parking-bro.svg";

const Login = () => {
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    console.log("Mobile Number Submitted:", mobile);
  };

  return (
    <>
      <div class="full-height-box">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          <BasementPark width="300px" height="300px" />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "#484848",
            fontFamily: "Inter, sans-serif",
            marginBottom: "72px",
            fontSize: "48px",
            fontWeight: "bold",
          }}>
          Welcome to Parkspace!
        </Typography>

        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#232323",
              fontFamily: "Inter, sans-serif",
              margin: "16px",
              color: "#484848",
            }}>
            Or Use
          </Typography>
        </Box>

        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "1rem",
            width: "100%",
          }}>
          <NavLink to="/signup" className="nav-link">
            <div className="login-icon-box">
              <img src={GoogleIcon} alt="Google Icon" />
            </div>
          </NavLink>

          <NavLink to="/forgot-password" className="nav-link">
            <div className="login-icon-box">
              <img src={AppleIcon} alt="Apple Icon" />
            </div>
          </NavLink>
        </div>

        <Button
          sx={{ marginTop: "36px" }}
          variant="contained"
          color="primary"
          className="btn-primary"
          fullWidth
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Login;
