import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { Download, Share } from "@mui/icons-material";

const BookingSuccess = () => {
  
  const qrCodeUrl = "https://www.figma.com/design/cojol72CE7g8Mxrq8dguiA/ParkSpace?node-id=2-2&p=f&t=sD05AEN1WvnwV5rt-0";

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
        <Typography variant="h6" fontWeight="bold">Booking Successful!</Typography>
      </Box>

      {/* Booking Code */}
      <Box sx={{ backgroundColor: "#28a745", padding: "12px", borderRadius: "8px", margin: "16px" }}>
        <Typography variant="h5" fontWeight="bold" color="white">
          CBO-5556
        </Typography>
      </Box>

      {/* Parking Info */}
      <Box sx={{ padding: "16px", textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">Majestic City Car Parking</Typography>
        <Typography variant="body2" color="gray">📍 Station Road, Bambalapitiya</Typography>

        {/* Date & Time */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Typography variant="body1">📅 04/03/2025</Typography>
          <Typography variant="body1">⏰ 10 AM - 11 AM</Typography>
        </Box>
      </Box>

      {/* QR Code */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <QRCodeCanvas value={qrCodeUrl} size={180} />
      </Box>

      {/* Download & Share Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2, padding: "10px", backgroundColor: "#343a40" }}>
        <Download sx={{ color: "white", cursor: "pointer" }} />
        <Share sx={{ color: "white", cursor: "pointer" }} />
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "16px" }}>
        <Button variant="outlined" sx={{ flex: 1, marginRight: 1 }}>Extend Time</Button>
        <Button variant="contained" color="success" sx={{ flex: 1 }}>Navigate</Button>
      </Box>
    </Box>
  );
};

export default BookingSuccess;
