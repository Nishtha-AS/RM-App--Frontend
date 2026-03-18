import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import "./button1-set.css";

const Button1Set: FunctionComponent = () => {
  return (
    <Box className="button-1">
      <Box className="property-1default">
        <Box className="button-wrapper">
          <Box className="button">Button</Box>
        </Box>
      </Box>
      <Box className="property-1variant2">
        <Box className="button-wrapper">
          <Box className="button">Button</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Button1Set;
