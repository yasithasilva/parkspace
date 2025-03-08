<<<<<<< Updated upstream
import React from 'react'
=======
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import MajesticCity from "../assets/img/majestic-city.jpeg";
import Map from "../assets/img/map.png";
import BackIcon from "../assets/icons/common/caret-left.svg";
import { useNavigate } from "react-router-dom";
>>>>>>> Stashed changes

const ParkingInfo = () => {
  const navigate = useNavigate();
  const OpenBookingInfo = () => {
    console.log("booking Info Opened");
    navigate("/bookinginfo");
  };
  return (
    <div>ParkingInfo</div>
  )
}

<<<<<<< Updated upstream
export default ParkingInfo
=======
      {/* Image */}
      <img src={MajesticCity} alt="Majestic City" style={{ width: "100%", height: "200px", objectFit: "cover" }} />

      {/* Info Section */}
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h5" fontWeight="bold">
          Majestic City
        
    
        </Typography>
        <Typography sx={{ color: "#777" }} mt={1}>
          ⭐ 4.5 Rating
        </Typography>
        <Typography sx={{ color: "#555" }} mt={2}>
          Majestic City, a commercial and shopping complex in Bambalapitiya, Colombo.
        </Typography>

        {/* Parking Details */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
          <Box sx={{ backgroundColor: "#f1f1f1", padding: "6px 12px", borderRadius: "16px", fontSize: "12px" }}>
            🚗 4 Spots
          </Box>
          <Box sx={{ backgroundColor: "#f1f1f1", padding: "6px 12px", borderRadius: "16px", fontSize: "12px" }}>
            💰 Rs. 100/hr
          </Box>
          <Box sx={{ backgroundColor: "#e5ffe5", padding: "6px 12px", borderRadius: "16px", fontSize: "12px", fontWeight: "bold" }}>
            ⏳ 5 min away
          </Box>
        </Box>

        {/* Map */}
        <Box sx={{ mt: 4 }}>
          <iframe
            src={Map}
            width="100%"
            height="200"
            style={{ borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>

        {/* Address */}
        <Typography sx={{ color: "#555" }} mt={2}>
          10, Station Road, Bambalapitiya, Colombo 04, Sri Lanka
        </Typography>

        {/* Button */}
        <Button variant="contained" onClick={OpenBookingInfo} color="success" sx={{ mt: 4, width: "100%", py: 2, fontWeight: "bold" }}>
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default ParkingInfo;
>>>>>>> Stashed changes
