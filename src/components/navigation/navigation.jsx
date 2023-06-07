import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import "./navigation.css";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: "450px" });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="button-group">
      {isMobileDevice ? (
        <div>
          <IconButton
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="mobileMenu-button"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="mobileMenu"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => (window.location.href = "/home")}>
              Home
            </MenuItem>
            <MenuItem onClick={() => (window.location.href = "/shop")}>
              Shop
            </MenuItem>
            <MenuItem onClick={() => (window.location.href = "/home")}>
              Blog
            </MenuItem>
            <MenuItem onClick={() => (window.location.href = "/home")}>
              About
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <>
          <Button
            variant="text"
            className="button"
            onClick={() => (window.location.href = "/home")}
          >
            Home
          </Button>
          <Button
            variant="text"
            className="button"
            onClick={() => (window.location.href = "/shop")}
          >
            Shop
          </Button>
          <Button
            variant="text"
            className="button"
            onClick={() => (window.location.href = "/home")}
          >
            Blog
          </Button>
          <Button
            variant="text"
            className="button"
            onClick={() => (window.location.href = "/home")}
          >
            About
          </Button>
        </>
      )}
    </Box>
  );
};

export default Navigation;
