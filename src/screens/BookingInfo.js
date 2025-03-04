  import React, { useState } from "react";
  import { Box, Typography, Select, MenuItem, Button } from "@mui/material";
  import BackIcon from "../assets/icons/common/caret-left.svg";
  import LocationMC from "../assets/img/locationmc.png";
  import TwoWheelerIcon from "../assets/icons/vehicles/motorcycle.svg";
  import ThreeWheelerIcon from "../assets/icons/vehicles/threewheeler-regular.svg";
  import CarIcon from "../assets/icons/vehicles/car-profile.svg";
  import VanIcon from "../assets/icons/vehicles/van.svg";
  import BusIcon from "../assets/icons/vehicles/truck.svg";
  import { TextField } from "@mui/material";

  const BookingInfo = () => {
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);
    const [selectedPlate, setSelectedPlate] = useState("");

    // Define vehicleTypes with plates
    const vehicleTypes = [
      { type: "Bike", plates: ["BAC5685", "BCD1234"], icon: TwoWheelerIcon },
      { type: "Three Wheeler", plates: ["CAD4545", "CAD6767"], icon: ThreeWheelerIcon },
      { type: "Car", plates: ["GK3520", "GK1234"], icon: CarIcon },
      { type: "Van", plates: ["GY4852", "GY6721"], icon: VanIcon },
      { type: "Bus", plates: ["GDK4521", "GDK8921"], icon: BusIcon },
    ];

    // Handle vehicle type selection
    const handleVehicleTypeChange = (vehicle) => {
      setSelectedVehicleType(vehicle);
      setSelectedPlate(""); // Reset plate when changing vehicle type
    };

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
          <Typography variant="h6" fontWeight="bold">Booking Info</Typography>
        </Box>

        {/* Image */}
        <img src={LocationMC} alt="Location MC" style={{ width: "100%", height: "200px", objectFit: "cover" }} />

        {/* Info Section */}
        <Box sx={{ padding: "16px" }}>
          <Typography variant="h5" fontWeight="bold">Majestic City</Typography>
          <Typography sx={{ color: "#777" }} mt={1}>⭐ 4.5 Rating</Typography>
          <Typography sx={{ color: "#555" }} mt={2}>
            Majestic City, a commercial and shopping complex in Bambalapitiya, Colombo.
          </Typography>

        {/* Select Vehicle Type */}
  <Typography variant="h6" mt={3}>Select Vehicle Type</Typography>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 2,
    }}
  >
    {vehicleTypes.map((vehicle) => (
      <Box
        key={vehicle.type}
        onClick={() => handleVehicleTypeChange(vehicle)}
        sx={{
          flexGrow: 1, 
          maxWidth: "20%",  
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: selectedVehicleType?.type === vehicle.type ? "#cce5ff" : "#f9f9f9",
          border: selectedVehicleType?.type === vehicle.type ? "2px solid #007bff" : "2px solid transparent",
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
      >
        <img src={vehicle.icon} alt={vehicle.type} style={{ width: "40px", height: "40px" }} />
      </Box>
    ))}
  </Box>


          {/*  Vehicle Plate Dropdown with Add Button */}
          <Typography variant="h6" mt={3}>Select Vehicle Plate</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
            <Select
              fullWidth
              value={selectedPlate || ""}
              displayEmpty
              onChange={(e) => setSelectedPlate(e.target.value)}
            >
              <MenuItem value="" disabled>Select Vehicle Plate</MenuItem>

              {/* If no vehicle type is selected, show an empty plate dropdown */}
              {selectedVehicleType &&
                selectedVehicleType.plates.map((plate) => (
                  <MenuItem key={plate} value={plate}>
                    {plate}
                  </MenuItem>
                ))}
            </Select>
            <Button
    variant="outlined"
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #007bff",
      color: "#007bff",
      height: "56px",
      minWidth: "80px",
      "&:hover": {
        backgroundColor: "#e0f0ff", 
      },
    }}
    onClick={() => alert("Add new vehicle plate functionality here")}
  >
    Add
  </Button>
          </Box>

          {/* Reservation Time */}
          <Typography variant="h6" mt={3}>
            Reservation Time
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField type="date" fullWidth label="From Date" InputLabelProps={{ shrink: true }} />
            <TextField type="time" fullWidth label="From Time" InputLabelProps={{ shrink: true }} />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField type="date" fullWidth label="To Date" InputLabelProps={{ shrink: true }} />
            <TextField type="time" fullWidth label="To Time" InputLabelProps={{ shrink: true }} />
          </Box>

          {/* Confirm Button */}
          <Button variant="contained" fullWidth sx={{ mt: 3, backgroundColor: "#28a745", color: "white", fontSize: "16px", padding: "12px" }}>
            Confirm
          </Button>
        </Box>
      </Box>
    );
  };

  export default BookingInfo;
