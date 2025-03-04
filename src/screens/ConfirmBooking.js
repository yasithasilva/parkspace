import React from "react";
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import BackIcon from "../assets/icons/common/caret-left.svg";
import LocationMC from "../assets/img/locationmc.png";

const ConfirmBooking = () => {
  return (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "white",
        boxShadow: 2,
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", padding: "16px", borderBottom: "1px solid #ddd" }}>
        <img src={BackIcon} alt="Back Icon" style={{ width: "24px", marginRight: "8px" }} />
        <Typography variant="h6" fontWeight="bold">Confirm Booking</Typography>
      </Box>

      {/* Image */}
      <img src={LocationMC} alt="Location MC" style={{ width: "100%", height: "200px", objectFit: "cover" }} />

      {/* Info Section */}
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h5" fontWeight="bold">Majestic City</Typography>
        <Typography sx={{ color: "#777" }}>⭐ 4.5 Rating</Typography>
        <Typography sx={{ color: "#555", mt: 2 }}>Station Road, Bambalapitiya</Typography>
        <Typography sx={{ color: "#555", mt: 1 }}>04/03/2025 - 05/03/2025</Typography>
        <Typography sx={{ color: "#555", mt: 1 }}>10 AM - 11 AM <Box component="span" sx={{ backgroundColor: "#d4edda", padding: "4px 8px", borderRadius: "8px", ml: 1 }}>25 hrs</Box></Typography>

        {/* Amount Section */}
        <Typography variant="h6" mt={3}>Amount</Typography>
        <Typography sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <span>Net Amount (Rs.100 x 25)</span>
          <strong>Rs. 2500</strong>
        </Typography>
        <Typography sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <span>Loyalty Discount 5%</span>
          <strong style={{ color: "red" }}>-Rs. 125</strong>
        </Typography>
        <Typography sx={{ display: "flex", justifyContent: "space-between", mt: 2, fontWeight: "bold", color: "green" }}>
          <span>Total Amount</span>
          <span>Rs. 2375</span>
        </Typography>

        {/* Payment Method */}
        <Typography variant="h6" mt={3}>Select a Payment Method</Typography>
        <RadioGroup defaultValue="one-time" sx={{ mt: 1 }}>
          <FormControlLabel value="one-time" control={<Radio />} label="One Time Payment" />
          <FormControlLabel value="subscription" control={<Radio />} label="Subscription Plan" />
        </RadioGroup>

        {/* Proceed Button */}
        <Button variant="contained" fullWidth sx={{ mt: 3, backgroundColor: "#28a745", color: "white", fontSize: "16px", padding: "12px" }}>
          Proceed
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmBooking;
