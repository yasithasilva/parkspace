import React, { useState } from "react";
import { Box, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio, Card, CardContent } from "@mui/material";
import { ArrowBack} from "@mui/icons-material";
import TwoWheelerIcon from "../assets/icons/vehicles/motorcycle.svg";
import ThreeWheelerIcon from "../assets/icons/vehicles/threewheeler-regular.svg";
import CarIcon from "../assets/icons/vehicles/car-profile.svg";
import VanIcon from "../assets/icons/vehicles/van.svg";
import BusIcon from "../assets/icons/vehicles/truck.svg";
const vehicleTypes = [
  { id: 1, icon: <img src={TwoWheelerIcon} alt="Bike" width={30} />, label: "Bike" },
  { id: 2, icon: <img src={ThreeWheelerIcon} alt="Three Wheeler" width={30} />, label: "Three Wheeler" },
  { id: 3, icon: <img src={CarIcon} alt="Car" width={30} />, label: "Car" },
  { id: 4, icon: <img src={VanIcon} alt="Van" width={30} />, label: "Van" },
  { id: 5, icon: <img src={BusIcon} alt="Bus" width={30} />, label: "Bus" },
];


const AddVehicle = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleName, setVehicleName] = useState("");
  const [passType, setPassType] = useState("oneTime");

  return (
    <Box sx={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1}>
        <ArrowBack />
        <Typography variant="h6" fontWeight="bold">Add Vehicle</Typography>
      </Box>
      
      {/* Vehicle Type Selection */}
      <Box display="flex" gap={2} marginTop={2}>
        {vehicleTypes.map((type) => (
          <Box
            key={type.id}
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              backgroundColor: selectedType === type.id ? "#4CAF50" : "#E0E0E0",
              cursor: "pointer",
            }}
            onClick={() => setSelectedType(type.id)}
          >
            {type.icon}
          </Box>
        ))}
      </Box>
      

      <TextField fullWidth label="Vehicle Number" margin="normal" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} />
      <TextField fullWidth label="Vehicle Name" margin="normal" value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} />
      
      {/* Pass Selection */}
      <Typography variant="body1" marginTop={2}>Select a Vehicle Pass</Typography>
      <RadioGroup value={passType} onChange={(e) => setPassType(e.target.value)}>
        <FormControlLabel value="oneTime" control={<Radio />} label="One Time Vehicle" />
        <FormControlLabel value="subscription" control={<Radio />} label="Subscription Plan" />
      </RadioGroup>
      
      {/* Pass Card 1*/}
      <Card sx={{ display: "flex", alignItems: "center", padding: "10px", marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6">Galle Face</Typography>
          <Typography variant="body2">Yesterday</Typography>
          <Typography variant="body2">10 hrs</Typography>
        </CardContent>
        <Button variant="outlined" sx={{ marginLeft: "auto" }}>Activate</Button>
      </Card>


            {/* Pass Card 2*/}
            <Card sx={{ display: "flex", alignItems: "center", padding: "10px", marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6">Galle Face</Typography>
          <Typography variant="body2">Yesterday</Typography>
          <Typography variant="body2">10 hrs</Typography>
        </CardContent>
        <Button variant="outlined" sx={{ marginLeft: "auto" }}>Activate</Button>
      </Card>
      
      {/* Confirm Button */}
      <Button fullWidth variant="contained" color="success" sx={{ marginTop: "20px" }}>Confirm</Button>
    </Box>
  );
};

export default AddVehicle;
