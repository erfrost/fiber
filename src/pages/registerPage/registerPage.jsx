import { Box, Button, Link, TextField } from "@mui/material";
import React from "react";
import "../loginPage/login.css";
import backToHome from "../loginPage/backTohome.svg";
import rightColumnSvg from "../loginPage/rightColumn.svg";

const RegisterPage = () => {
  return (
    <Box className="login-body">
      <Box className="login-box">
        <Box className="login-columns">
          <Box className="column-left">
            <Box className="left-content">
              <Box className="texts">
                <Box className="texts-first">
                  <Box className="text-login">Register</Box>
                  <Box className="text-login-2" sx={{ fontSize: "15px" }}>
                    Register and help us help you
                  </Box>
                </Box>
                <Box className="left-block-1-second">
                  <img src={backToHome} alt="backToHome" />
                  <Link
                    onClick={() => (window.location.href = "/home")}
                    className="link-toHome"
                  >
                    Back to home
                  </Link>
                </Box>
              </Box>

              <Box className="inputs">
                <TextField
                  className="textField"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  inputProps={{ style: { color: "rgba(0, 0, 0, 0.6)" } }}
                />
                <TextField
                  className="textField"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  inputProps={{ style: { color: "rgba(0, 0, 0, 0.6)" } }}
                />
                <TextField
                  className="textField"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  inputProps={{ style: { color: "rgba(0, 0, 0, 0.6)" } }}
                />
                <Box className="rememberMe" sx={{ margin: "0 !important" }}>
                  <Box className="text-checkbox" sx={{ fontSize: "14px" }}>
                    With registering your accepting our{" "}
                    <span className="link">terms</span> and{" "}
                    <span className="link">privacy policy</span>
                  </Box>
                </Box>
              </Box>

              <Button
                variant="contained"
                className="button-login"
                onClick={() => (window.location.href = "/login")}
              >
                Register
              </Button>

              <Box className="isHaveAccount">
                Already have an account?
                <Link
                  onClick={() => (window.location.href = "/login")}
                  className="link"
                >
                  Login
                </Link>
              </Box>
            </Box>
          </Box>

          <Box className="column-right">
            <img src={rightColumnSvg} alt="rightColumnSvg" className="image" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
