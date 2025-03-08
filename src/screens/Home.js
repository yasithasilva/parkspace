<<<<<<< Updated upstream
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header title="Homescreen" />
=======
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Search,
  Star,
  DirectionsCar,
  AttachMoney,
  AccessTime,
} from "@mui/icons-material";
import LocationMC from "../assets/img/majestic-city.jpeg";
import TwoWheelerIcon from "../assets/icons/vehicles/motorcycle.svg";
import ThreeWheelerIcon from "../assets/icons/vehicles/threewheeler-regular.svg";
import CarIcon from "../assets/icons/vehicles/car-profile.svg";
import VanIcon from "../assets/icons/vehicles/van.svg";
import BusIcon from "../assets/icons/vehicles/truck.svg";
import Navbar from "../components/Navbar.js";
import { useNavigate } from "react-router-dom";

const vehicleTypes = [
  { id: 1, icon: TwoWheelerIcon, label: "Bike" },
  { id: 2, icon: ThreeWheelerIcon, label: "Three Wheeler" },
  { id: 3, icon: CarIcon, label: "Car" },
  { id: 4, icon: VanIcon, label: "Van" },
  { id: 5, icon: BusIcon, label: "Bus" },
];

const parkingPlaces = [
  {
    id: 1,
    name: "Majestic City",
    rating: 4.5,
    price: "Rs. 100/hr",
    spots: 4,
    distance: "5 min away",
    image: LocationMC,
  },
  {
    id: 2,
    name: "Liberty Plaza",
    rating: 4.3,
    price: "Rs. 120/hr",
    spots: 6,
    distance: "7 min away",
    image: LocationMC,
  },
  {
    id: 3,
    name: "Odel Parking",
    rating: 4.7,
    price: "Rs. 150/hr",
    spots: 3,
    distance: "4 min away",
    image: LocationMC,
  },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const handleParkingInfo = () => {
    console.log("Parking Info Opened");
    navigate("/parkinginfo");
  };
 
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        padding: "16px",
        boxSizing: "border-box",
        overflowY: "auto",
      }}>
      <Typography variant="h6">Havelock City | 5km</Typography>

      <Card
        sx={{
          backgroundColor: "#E8F5E9",
          padding: "16px",
          borderRadius: "12px",
          marginY: 2,
        }}>
        <CardContent>
          <Typography variant="h6">Premium Plan</Typography>
          <Typography variant="body2">Valid until March 31, 2025</Typography>
          <Typography variant="body2">48 hours remaining</Typography>
          <Button variant="outlined" sx={{ marginTop: 1 }}>
            Renew
          </Button>
        </CardContent>
      </Card>

      <Typography variant="body1" fontWeight="bold">
        Select Vehicle Type
      </Typography>
      <Box display="flex" justifyContent="space-between" marginY={2}>
        {vehicleTypes.map((type) => (
          <Box
            key={type.id}
            onClick={() => setSelectedVehicle(type.id)}
            sx={{
              width: "18%",
              padding: "8px",
              backgroundColor:
                selectedVehicle === type.id ? "#cce5ff" : "#F5F5F5",
              border:
                selectedVehicle === type.id ? "2px solid #007bff" : "none",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "0.3s ease",
            }}>
            <img src={type.icon} alt={type.label} style={{ width: "70%" }} />
          </Box>
        ))}
      </Box>

      <TextField
        fullWidth
        placeholder="Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Typography variant="body1" fontWeight="bold" marginTop={2}>
        Nearby Parking Places
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          marginTop: 2,
          paddingBottom: 2,
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}>
        {parkingPlaces.map((place) => (
          <Card
            key={place.id}
            sx={{
              minWidth: "320px",
              display: "flex",
              alignItems: "center",
              borderRadius: "12px",
              padding: "12px",
            }}>
            <Box
              sx={{
                width: "90px",
                height: "90px",
                borderRadius: "8px",
                overflow: "hidden",
                marginRight: 2,
              }}>
              <img
                src={place.image}
                alt={place.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <CardContent sx={{ flex: 1, padding: "0" }}>
              <Typography variant="h6">{place.name}</Typography>

              <Box display="flex" alignItems="center" gap={1}>
                <Star sx={{ color: "gold", fontSize: "18px" }} />
                <Typography variant="body2">{place.rating} Rating</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <DirectionsCar sx={{ color: "green", fontSize: "18px" }} />
                <Typography variant="body2">{place.spots} Spots</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <AttachMoney sx={{ color: "green", fontSize: "18px" }} />
                <Typography variant="body2">{place.price}</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <AccessTime sx={{ color: "green", fontSize: "18px" }} />
                <Typography variant="body2">{place.distance}</Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={handleParkingInfo}
                sx={{
                  marginTop: 1,
                  textTransform: "none",
                  fontWeight: "bold",
                }}>
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
>>>>>>> Stashed changes
      <Navbar />
    </div>
  );
};

export default Home;
