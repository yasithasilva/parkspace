import React, { useState, useEffect } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import MajesticCity from "../assets/img/majestic-city.jpeg"
import GalleFace from "../assets/img/galleface.jpg"
import BackIcon from "../assets/icons/common/caret-left.svg";
import Gangaramaya from "../assets/img/gangaramaya.jpg"
import Viharamahadevi from "../assets/img/viharamahadevi.jpg"

const parkingData = [
  {
    id: 1,
    name: "Majestic City",
    rating: 4.5,
    price: "Rs. 100/hr",
    spots: 4,
    distance: "5 min away",     
    image: MajesticCity,
  },
  {
    id: 2,
    name: "Galle Face",
    rating: 4.5,
    price: "Rs. 100/hr",
    spots: 8,
    distance: "15 min away",
    image: GalleFace, 
  },
  {
  id: 3,
  name: "Gangaramaya",
  rating: 4.6,
  price: "Rs. 100/hr",
  spots: 4,
  distance: "17 min away",
  image: Gangaramaya, 
},

{
  id: 4,
  name: "Viharamahadevi",
  rating: 4.4,
  price: "Rs. 100/hr",
  spots: 4,
  distance: "25 min away",
  image: Viharamahadevi, 
},
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState(parkingData);

  useEffect(() => {
    const results = parkingData.filter((parking) =>
      parking.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  }, [searchTerm]);

  return (
    <Box sx={{ padding: "16px" }}>
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
      <img src={BackIcon} alt="Back Icon" style={{ width: "24px", marginRight: "8px" }} />   Search Parking
      </Typography>

      {/* Search Input */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <TextField
          variant="outlined"
          placeholder="Search parking..."
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: "#aaa", mr: 1 }} />,
            endAdornment: <MicIcon sx={{ cursor: "pointer", color: "#555" }} />,
          }}
        />
      </Box>

      {/* Parking List */}
      {filteredResults.map((parking) => (
        <Box
          key={parking.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            background: "#f8f8f8",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        >
          <img
            src={parking.image}
            alt={parking.name}
            style={{ width: "80px", height: "80px", borderRadius: "8px" }}
          />
          <Box>
            <Typography fontWeight="bold">{parking.name}</Typography>
            <Typography sx={{ color: "#777" }}>⭐ {parking.rating} Rating</Typography>
            <Typography sx={{ color: "#777" }}>🚗 {parking.spots} Spots</Typography>
            <Typography sx={{ color: "#777" }}>{parking.price}</Typography>
            <Typography sx={{ color: "green", fontWeight: "bold" }}>
              📍 {parking.distance}
            </Typography>
          </Box>
          <Button variant="outlined" color="success" sx={{ marginLeft: "auto" }}>
            Book Now
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Search;
