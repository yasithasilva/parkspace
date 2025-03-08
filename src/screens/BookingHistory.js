import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Majestic from "../assets/img/majestic-city.jpeg";
import Gangaramaya from "../assets/img/gangaramaya.jpg";
import Viharamahadevi from "../assets/img/viharamahadevi.jpg";
import GalleFace from "../assets/img/galleface.jpg";
import Navbar from "../components/Navbar.js";
import { Link } from "react-router-dom";

const BookingHistory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const ongoingBookings = [
    {
      id: 1,
      location: "Majestic City",
      time: "10 AM - 11 AM",
      duration: "25 hrs",
      address: "Station Road, Bambalapitiya",
      date: "04/03/2025 - 05/03/2025",
      image: Majestic,
    },
  ];

  const completedBookings = [
    {
      id: 1,
      location: "Galle Face",
      date: "Yesterday",
      duration: "10 hrs",
      image: GalleFace,
    },
    {
      id: 2,
      location: "Majestic City",
      date: "2 days ago",
      duration: "12 hrs",
      image: Majestic,
    },
    {
      id: 3,
      location: "Viharamahadevi",
      date: "3 days ago",
      duration: "10 hrs",
      image: Viharamahadevi,
    },
    {
      id: 4,
      location: "Gangaramaya",
      date: "3 days ago",
      duration: "10 hrs",
      image: Gangaramaya,
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "white",
        boxShadow: 2,
        borderRadius: "8px",
        overflow: "hidden",
      }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid #ddd",
        }}>
        <Link path="/home">
          <ArrowBackIcon sx={{ marginRight: "8px" }} />
        </Link>

        <Typography variant="h6" fontWeight="bold">
          Booking History
        </Typography>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        centered
        sx={{ borderBottom: "2px solid #ddd" }}>
        <Tab label="Ongoing" />
        <Tab label="Completed" />
      </Tabs>

      {/* Ongoing Bookings */}
      {tabIndex === 0 && (
        <Box sx={{ padding: "16px" }}>
          {ongoingBookings.map((booking) => (
            <Card key={booking.id} sx={{ marginBottom: "16px" }}>
              <CardMedia
                component="img"
                height="140"
                image={booking.image}
                alt={booking.location}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {booking.location}
                </Typography>
                <Typography>
                  {booking.time}{" "}
                  <span
                    style={{
                      backgroundColor: "#d4edda",
                      padding: "4px 8px",
                      borderRadius: "8px",
                      marginLeft: "8px",
                    }}>
                    {booking.duration}
                  </span>
                </Typography>
                <Typography color="textSecondary">{booking.address}</Typography>
                <Typography color="textSecondary">{booking.date}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "16px",
                  }}>
                  <Button variant="outlined" color="error">
                    Cancel
                  </Button>
                  <Button variant="contained" color="success">
                    Navigate
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Completed Bookings */}
      {tabIndex === 1 && (
        <Box sx={{ padding: "16px" }}>
          {completedBookings.map((booking) => (
            <Card
              key={booking.id}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
                padding: "8px",
              }}>
              <CardMedia
                component="img"
                sx={{ width: "80px", height: "80px", borderRadius: "8px" }}
                image={booking.image}
                alt={booking.location}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography fontWeight="bold">{booking.location}</Typography>
                <Typography color="textSecondary">{booking.date}</Typography>
                <Typography>{booking.duration}</Typography>
              </CardContent>
              <Button variant="contained" color="success">
                Book Again
              </Button>
            </Card>
          ))}
        </Box>
      )}

      {/* Bottom Navigation */}
      <Box>
        <Navbar /> {Navbar}
      </Box>
    </Box>
  );
};

export default BookingHistory;
