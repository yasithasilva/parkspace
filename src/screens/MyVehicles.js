import React, { useState } from "react";
import { Card, CardContent, Typography, Button, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, DirectionsCar, TwoWheeler, AirportShuttle } from "@mui/icons-material";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "My Vazel Car", number: "CBI-2783", type: "car", favorite: true },
    { id: 2, name: "My Tuk", number: "AAB-2783", type: "tuk", favorite: false },
    { id: 3, name: "My Motorbike", number: "WD-2783", type: "bike", favorite: false },
    { id: 4, name: "My Allion Car", number: "KD-2783", type: "car", favorite: false },
  ]);

  // delete a vehicle
  const handleDelete = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  //  favorite status
  const toggleFavorite = (id) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, favorite: !vehicle.favorite } : vehicle
      )
    );
  };

  // get icon based on vehicle type
  const getVehicleIcon = (type) => {
    switch (type) {
      case "car":
        return <DirectionsCar style={{ color: "green" }} />;
      case "tuk":
        return <AirportShuttle style={{ color: "green" }} />;
      case "bike":
        return <TwoWheeler style={{ color: "green" }} />;
      default:
        return <DirectionsCar />;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" fontWeight="bold">My Vehicles</Typography>
      {vehicles.map((vehicle) => (
        <Card key={vehicle.id} style={{ margin: "10px 0", display: "flex", alignItems: "center" }}>
          <CardContent style={{ flexGrow: 1 }}>
            <Typography variant="h6">{vehicle.name}</Typography>
            <Typography color="textSecondary">{vehicle.number}</Typography>
          </CardContent>

          {getVehicleIcon(vehicle.type)}

          {/* Favorite Button */}
          <IconButton onClick={() => toggleFavorite(vehicle.id)}>
            {vehicle.favorite ? <Favorite color="success" /> : <FavoriteBorder />}
          </IconButton>

          {/* Delete Button */}
          <Button variant="outlined" color="error" onClick={() => handleDelete(vehicle.id)}>
            Delete
          </Button>
        </Card>
      ))}

      <Button variant="contained" color="success" fullWidth style={{ marginTop: "20px" }}>
        Add Vehicle
      </Button>
    </div>
  );
};

export default VehicleList;
