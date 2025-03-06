import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Box, Switch, FormControlLabel } from "@mui/material";
import { WorkspacePremium } from "@mui/icons-material";
import Bg119 from "../assets/img/Frame 118.png"
import Bg118 from "../assets/img/Frame 119.png"
import Navbar from "../components/Navbar.js";

const initialPasses = [
  {
    id: 1,
    usedHours: 180,
    totalHours: 200,  
    expiresIn: " Days",
    type: "car",
    autoRenew: true,
    backgroundImage: Bg118,
   
  },
  {
    id: 2,
    usedHours: 80,
    totalHours: 100,
    expiresIn: "28 Days",
    type: "bike",
    autoRenew: false,
    backgroundImage: Bg119,

  },
];

const MonthlyPass = () => {
  const [passes, setPasses] = useState(initialPasses);

  // Toggle Auto-Renew 
  const handleToggle = (id) => {
    setPasses((prevPasses) =>
      prevPasses.map((pass) =>
        pass.id === id ? { ...pass, autoRenew: !pass.autoRenew } : pass
      )
    );
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h5" fontWeight="bold">
        Monthly Pass
      </Typography>

      {passes.map((pass) => (
        <Card
          key={pass.id}
          sx={{
            backgroundImage: `url(${pass.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            marginTop: "20px",
            color: "white",
          }}
        >
          <CardContent sx={{ backgroundColor: "rgba(0, 128, 0, 0.8)", borderRadius: "15px" }}>
            <Typography variant="h6" fontWeight="bold">
              <span style={{ color: "#FFD700" }}>{pass.usedHours}</span>/{pass.totalHours} Hrs
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <WorkspacePremium style={{ color: "#FFD700" }} />
              <Typography variant="body2">Premium</Typography>
            </Box>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              You have full parking access to any government parking area within Colombo at a discounted rate.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px", color: "#90EE90" }}>
              Expires in {pass.expiresIn}!
            </Typography>

            {/* Auto Renew Switch*/}
            <FormControlLabel
              control={
                <Switch
                  checked={pass.autoRenew}
                  onChange={() => handleToggle(pass.id)}
                  sx={{
                    "& .MuiSwitch-switchBase": {
                      color: "white", 
                    },
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "green", 
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: "white", 
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "white", 
                    },
                  }}
                />
              }
              label="Auto Renew"
            />
          </CardContent>
        </Card>
      ))}

      <Button variant="contained" color="success" fullWidth sx={{ marginTop: "20px" }}>
        Change Plan
      </Button>

      {/* Bottom Navigation */}
      <Box>
        <Navbar />
      </Box>
    </Box>
  );
};

export default MonthlyPass;