import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Map from "../screens/Map";
import Bookings from "../screens/Bookings";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Otp from "../screens/Otp";
import Search from "../screens/Search";
import ParkingInfo from "../screens/ParkingInfo";
import BookingInfo from "../screens/BookingInfo";
import ConfirmBooking from "../screens/ConfirmBooking";
import BookingPayment from "../screens/BookingPayment";
import Ticket from "../screens/Ticket";
import MyVehicles from "../screens/MyVehicles";
import Subscription from "../screens/Subscription";
import Favorites from "../screens/Favorites";
import Notifications from "../screens/Notifications";
import Splash from "../screens/Splash";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<BookingInfo/>} />


        {/* <Route path="/" element={<Home />} />
        <Route path="map" element={<Map />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="splash" element={<Splash />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="otp" element={<Otp />} />
        <Route path="search" element={<Search />} />
        <Route path="parkinginfo" element={<ParkingInfo />} />
        <Route path="bookinginfo" element={<BookingInfo />} />
        <Route path="confirmbooking" element={<ConfirmBooking />} />
        <Route path="bookingpayment" element={<BookingPayment />} />
        <Route path="ticket" element={<Ticket />} />
        <Route path="myvehicles" element={<MyVehicles />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="notifications" element={<Notifications />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
