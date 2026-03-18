import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "global.css";
import "./login-screen1.css";

import capIcon from "assets/cap.svg";
import wifiIcon from "assets/wifi.svg";
import cellularIcon from "assets/cellular-connection.svg";
import aadiswanLogo from "assets/aadiswan-logo@2x.png";
import geoTagIcon from "assets/geo-tag-icon.svg";
import downArrowIcon from "assets/down-arrow.svg";

const LoginScreen1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="login-screen-1">
      <Box className="rectangle-parent">
        <Box className="group-child" />

        {/* Status Bar */}
        <Box className="ios-status-bar">
          <Box className="time">
            <Box className="time1">9:41</Box>
          </Box>
          <Box className="time">
            <Box className="battery">
              <Box className="border" />
              <img className="cap-icon" alt="cap" src={capIcon} />
              <Box className="capacity" />
            </Box>
            <img className="wifi-icon" alt="wifi" src={wifiIcon} />
            <img className="cellular-connection-icon" alt="cellular" src={cellularIcon} />
          </Box>
        </Box>

        <Box className="center-content">
          <img className="aadiswan-logo-icon" alt="aadiswan logo" src={aadiswanLogo} />
          <Typography className="tag-line">
            Transform your <span className="lending">Lending</span> and <span className="lending">Monitoring</span> Process
          </Typography>
        </Box>

        <Box className="continue-section">
          <Box className="country-selector">
            <img className="geo-tag-icon" alt="geo" src={geoTagIcon} />
            <Box className="country">India</Box>
            <img className="down-arrow-icon" alt="down" src={downArrowIcon} />
          </Box>

          <Box className="continue-button" onClick={() => navigate("/login2")}>
            <Box className="continue">Continue</Box>
          </Box>

          <Box className="terms-and-conditions-container">
            By proceeding, I agree to the <span className="tc">T&C</span> and <span className="tc">Privacy Policy</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen1;
