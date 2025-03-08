import React from "react";
import { Avatar, Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { DirectionsCar, Subscriptions, AccountBalanceWallet, LocalOffer, Settings, ExitToApp, Favorite } from "@mui/icons-material";
import ProPic from "../assets/img/propic.png";
import Navbar from "../components/Navbar.js";


const menuItems = [
  { text: "My Favorite Spots", icon: <Favorite color="success" /> },
  { text: "My Vehicles", icon: <DirectionsCar color="success" /> },
  { text: "My Subscription Plan", icon: <Subscriptions color="success" /> },
  { text: "My Wallet", icon: <AccountBalanceWallet color="success" /> },
  { text: "Offers", icon: <LocalOffer color="success" /> },
  { text: "Settings", icon: <Settings color="success" /> },
  { text: "Log Out", icon: <ExitToApp color="error" /> },
];

const Profile = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#F8F9FA" }}>
      {/* Profile Header */}
      <Box sx={{ width: "100%", padding: "16px", display: "flex", alignItems: "center", bgcolor: "#fff", boxShadow: 1 }}>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}>Profile</Typography>
      </Box>

      
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
      <Avatar src={ProPic} sx={{ width: 80, height: 80 }} />
        <Typography variant="h6" sx={{ mt: 1 }}>Chirath Kavindu</Typography>
        <Button variant="contained" sx={{ bgcolor: "#FFD700", mt: 1, textTransform: "none" }} disableElevation>
          Premium User
        </Button>
      </Box>


      <List sx={{ width: "90%", mt: 2, bgcolor: "#fff", borderRadius: 2, boxShadow: 1 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            {index !== menuItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      
      <Navbar />
    </Box>
  );
};



export default Profile;
