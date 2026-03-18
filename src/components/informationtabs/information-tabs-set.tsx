import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import "./information-tabs-set.css";

import progressBarIcon from "assets/progress-bar.svg";
import checkCircleIcon from "assets/check-circle.svg";
import arrowRightIcon1 from "assets/arrowright1.svg";

type Props = {
  variant: "Applications";
};

const InformationTabsSet: FunctionComponent<Props> = ({ variant }) => {
  return (
    <Box className="information-tabs-wrapper">
      {variant === "Applications" && (
        <>
          {/* Pending Application */}
          <Box className="application-card pending">
            <Box className="application-info">
              <Box className="application-text">
                <Typography className="application-title">Application Pending</Typography>
                <Typography className="application-subtitle">Counterparty: Full Name</Typography>
                <Typography className="application-subtitle">CTPT-ID: CTPT-2344</Typography>
                <Typography className="application-subtitle">APP-ID: APP-2344</Typography>
                <Typography className="application-subtitle">Region: Delhi</Typography>
              </Box>
              <Box className="application-status">
                <Typography className="application-date">Date modified: 19 Feb 2025</Typography>
                <Box className="progress-indicator">
                  <Typography className="progress-text">50% done</Typography>
                  <img className="progress-bar-icon" src={progressBarIcon} alt="Progress" />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Completed Application */}
          <Box className="application-card completed">
            <Box className="application-info">
              <Box className="application-text">
                <Typography className="application-title">Application Completed</Typography>
                <Typography className="application-subtitle">Counterparty: Full Name</Typography>
              </Box>
              <Box className="application-status">
                <Box className="completed-badge">
                  <img className="completed-icon" src={checkCircleIcon} alt="Verified" />
                  <Typography className="completed-text">Completed and Verified</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Draft Application */}
          <Box className="application-card draft">
            <Box className="application-info">
              <Box className="application-text">
                <Typography className="application-title">Draft Application</Typography>
                <Typography className="application-subtitle">Counterparty: Draft Entity</Typography>
              </Box>
              <Box className="application-action">
                <Typography className="view-more">Resume Editing</Typography>
                <img className="view-more-icon" src={arrowRightIcon1} alt="Arrow" />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default InformationTabsSet;
