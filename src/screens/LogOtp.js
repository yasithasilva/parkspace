import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logotp1 from "../assets/img/Logotp1.png";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; 
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    console.log("Entered OTP:", otp.join(""));
  };

  return (
    <div
      className="full-height-box"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}>
      
      {/* Image LogOtp1 */}
      <img
        src={Logotp1}
        alt="OTP Verification"
        style={{
          width: "250px",  
          height: "auto",
          marginBottom: "20px", 
        }}
      />

      {/* OTP Form */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#484848",
          fontFamily: "Inter, sans-serif",
          marginBottom: "16px",
          fontSize: "24px",
          fontWeight: "bold",
        }}>
        Enter OTP
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#232323",
          fontFamily: "Inter, sans-serif",
          marginBottom: "24px",
          fontSize: "16px",
        }}>
        Check your text messages or email for authentication.
      </Typography>

      {/* OTP Input Fields */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
        {otp.map((digit, index) => (
          <TextField
            key={index}
            id={`otp-${index}`}
            variant="outlined"
            inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: "24px" } }}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            sx={{ width: "50px" }}
          />
        ))}
      </Box>

      {/* Resend OTP Link */}
      <Typography sx={{ textAlign: "center", color: "#484848", fontSize: "14px" }}>
        Didn’t receive?{" "}
        <NavLink to="/resend-otp" style={{ color: "#00A86B", textDecoration: "none" }}>
          Resend OTP
        </NavLink>
      </Typography>

      {/* Verify OTP Button */}
      <Button
        sx={{ marginTop: "16px", backgroundColor: "#00A86B", color: "white" }}
        variant="contained"
        fullWidth
        onClick={handleSubmit}>
        Verify OTP
      </Button>
    </div>
  );
};

export default OTPVerification;
