import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import "./header.css";
import logo from "./logo.svg";
import Navigation from "../navigation/navigation";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <Box className="header-body">
      <Box className="header-content">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => (window.location.href = "/home")}
        />
        <Navigation />
        <Box className="icons">
          <IconButton
            className="cart"
            onClick={() => (window.location.href = "/home")}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            className="profile"
            onClick={() => (window.location.href = "/home")}
          >
            <AccountBoxIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
