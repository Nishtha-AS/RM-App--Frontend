import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import "./heading-type1.css";

import groupIcon from "assets/group-2.svg"; // 🧠 Corrected import

const HeadingType1: FunctionComponent = () => {
  return (
    <Box className="heading-type-1">
      <img className="heading-type-1-icon" alt="Group Icon" src={groupIcon} />
      <Box className="heading-type-1-text">My Tasks - Customer Data</Box>
    </Box>
  );
};

export default HeadingType1;
