import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import "./loader.css";
import logo from "assets/as-logo@2x.png";

const Loader: FunctionComponent = () => {
  return (
    <Box className="loader-overlay">
      <Box className="loader-container">
        <Box className="ripple" />
        <Box className="ripple delay" />
        <img src={logo} alt="AS Logo" className="loader-logo" />
      </Box>
    </Box>
  );
};

export default Loader;
