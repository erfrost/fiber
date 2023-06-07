import { Box, Button, Checkbox, Link, TextField } from "@mui/material";
import React from "react";
import "./login.css";
import backToHome from "./backTohome.svg";
import rightColumnSvg from "./rightColumn.svg";

const LoginPage = () => {
  return (
    <Box className="login-body">
      <Box className="login-box">
        <Box className="login-columns">
          <Box className="column-left">
            <Box className="left-content">
              <Box className="texts">
                <Box className="texts-first">
                  <Box className="text-login">Login</Box>
                  <Box className="text-login-2">Login and have more fun</Box>
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
                <Box className="rememberMe">
                  <Checkbox defaultChecked />
                  <Box className="text-checkbox">Remember me</Box>
                </Box>
              </Box>

              <Button
                variant="contained"
                className="button-login"
                onClick={() => (window.location.href = "/home")}
              >
                Login
              </Button>

              <Box className="isHaveAccount">
                Dont have an account?
                <Link
                  onClick={() => (window.location.href = "/register")}
                  className="link"
                >
                  Register
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

export default LoginPage;
