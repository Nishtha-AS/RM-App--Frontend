import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import "./heading-type3-set.css";

import lineIcon from "assets/line-122.svg";

const HeadingType3Set: FunctionComponent<{ headingText?: string }> = ({ headingText = "Summary" }) => {
  return (
      <Box className="summary-heading-container">
         <Box className="summary-heading">
              Summary
                <Box className="summary-underline" />
               </Box>
          </Box>
  );
};

export default HeadingType3Set;
