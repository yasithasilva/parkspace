import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationImg from "../assets/img/OLnoti.png";
import { useNavigate } from "react-router-dom";

const LocationAccessPage = () => {
  const navigate = useNavigate(); 
  const handleAllowLocation = () => {
    console.log("Location access allowed");
    navigate("/home");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9F9",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <img
          src={LocationImg}
          alt="Location Access"
          style={{
            width: "250px",
            height: "auto",
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#484848",
          fontFamily: "Inter, sans-serif",
          marginBottom: "16px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Location
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#232323",
          fontFamily: "Inter, sans-serif",
          marginBottom: "24px",
          fontSize: "16px",
        }}
      >
        Allow location access for a better parking experience.
      </Typography>

      {/* Allow Location Button */}
      <Button
        sx={{
          backgroundColor: "#00A86B",
          color: "white",
          textTransform: "none",
          borderRadius: "8px",
          marginBottom: "36px",
        }}
        variant="contained"
        onClick={handleAllowLocation}
      >
        Allow Location Access
      </Button>
    </div>
  );
};

export default LocationAccessPage;
