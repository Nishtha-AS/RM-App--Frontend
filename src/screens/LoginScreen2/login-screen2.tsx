import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "global.css";
import "./login-screen2.css";

import InputSet from "components/input/input-set";
import aadiswanLogo from "assets/aadiswan-logo@2x.png";

const LoginScreen2: React.FC = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validUsers = [
    { loginId: "test@1", password: "1111" },
    { loginId: "test@2", password: "2222" }
  ];

  const handleLogin = () => {
    setSubmitted(true);
    const user = validUsers.find(
      (u) => u.loginId === loginId.trim() && u.password === password.trim()
    );
    if (user) {
      navigate("/home");
    }
  };

  return (
    <Box className="login-screen-2">
      <Box className="design-logo-parent">
        <Box className="design-logo">
          <Box className="logo-and-tag-line">
            <img className="aadiswan-logo-icon" alt="Aadiswan Logo" src={aadiswanLogo} />
            <Typography className="tag-line" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
              Transform your <span className="lending">Lending</span> and <span className="lending">Monitoring</span> Process
            </Typography>
          </Box>
        </Box>

        <Box className="login-form">
          <Box className="welcome-text-parent">
            <Typography className="welcome" sx={{ fontSize: "14px", fontWeight: 800, fontFamily: "Poppins, sans-serif" }}>Welcome!</Typography>
            <Typography className="please-enter-your" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
              Please enter your valid user ID and password to proceed
            </Typography>
          </Box>

          <InputSet
            label="Login ID"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            placeholder="Enter login ID"
            showError={submitted && !loginId}
            required
          />

          <InputSet
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            showError={submitted && !password}
            required
          />

          <Typography className="forgot-password" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
            Forgot Password?
          </Typography>

          <Box className="button-1" onClick={handleLogin}>
            <Typography className="button">Login</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen2;
