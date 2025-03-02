import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/nav-icons/house.svg";
import { ReactComponent as MapIcon } from "../assets/icons/nav-icons/map-trifold.svg";
import { ReactComponent as BookingsIcon } from "../assets/icons/nav-icons/notebook.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/nav-icons/user-circle.svg";
import { ReactComponent as HomeIconFilled } from "../assets/icons/nav-icons/house-fill.svg";
import { ReactComponent as MapIconFilled } from "../assets/icons/nav-icons/map-trifold-fill.svg";
import { ReactComponent as BookingsIconFilled } from "../assets/icons/nav-icons/notebook-fill.svg";
import { ReactComponent as ProfileIconFilled } from "../assets/icons/nav-icons/user-circle-fill.svg";
import "../assets/styles/navbar.css";

const NavbarIcons = () => {
  const location = useLocation(); // Get the current location object

  const getActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav>
      <div className="parent-navbar">
        <div className="child">
          <Link to="/" className={getActiveLink("/")}>
            {location.pathname === "/" ? (
              <div className="icon-wrap">
                <HomeIconFilled className="icon" />
              </div>
            ) : (
              <div className="icon-wrap">
                <HomeIcon className="icon" />
              </div>
            )}
            <div className="nav-text">Home</div>
          </Link>
        </div>
        <div className="child">
          <Link to="/map" className={getActiveLink("/map")}>
            {location.pathname === "/map" ? (
              <div className="icon-wrap">
                <MapIconFilled className="icon" />
              </div>
            ) : (
              <div className="icon-wrap">
                <MapIcon className="icon" />
              </div>
            )}
            <div className="nav-text">Map</div>
          </Link>
        </div>

        <div className="child">
          <Link to="/bookings" className={getActiveLink("/bookings")}>
            {location.pathname === "/bookings" ? (
              <div className="icon-wrap">
                <BookingsIconFilled className="icon" />
              </div>
            ) : (
              <div className="icon-wrap">
                <BookingsIcon className="icon" />
              </div>
            )}
            <div className="nav-text">Bookings</div>
          </Link>
        </div>
        <div className="child">
          <Link to="/profile" className={getActiveLink("/profile")}>
            {location.pathname === "/profile" ? (
              <div className="icon-wrap">
                <ProfileIconFilled className="icon" />
              </div>
            ) : (
              <div className="icon-wrap">
                <ProfileIcon className="icon" />
              </div>
            )}
            <div className="nav-text">Profile</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarIcons;
