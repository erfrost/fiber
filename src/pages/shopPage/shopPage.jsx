import React from "react";
import "./shopPage.css";
import Header from "../../components/header/header";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./shopPage.css";
import filter from "./filter.svg";
import sort from "./sort.svg";

const ShopPage = () => {
  return (
    <>
      <Header />
      <Box className="shop">
        <Box className="filterBox">
          <Box className="text-filter">
            <img src={filter} alt="backToHome" />
            <span>Filtering</span>
          </Box>

          <FormControl className="formControl" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    disabled
                    sx={{ color: "black !important" }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Box className="text-filter">
            <img src={sort} alt="backToHome" />
            <span>Cheep</span>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShopPage;
