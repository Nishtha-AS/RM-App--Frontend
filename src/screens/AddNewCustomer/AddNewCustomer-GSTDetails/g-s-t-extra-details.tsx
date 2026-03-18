import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import "./g-s-t-extra-details.css";

import vectorIcon from "assets/vector.svg";
import vectorIcon1 from "assets/vector1.svg";

const GSTExtraDetails: FunctionComponent = () => {
  return (
    <Box className="gst-extra-details">
      <Box className="gst-extra-details-child" />
      <Box className="gst-additional-details">
        <Box className="frame-parent">
          <Box className="frame-wrapper">
            <Box className="info-parent">
              <Box className="info">
                <Box className="vector-parent">
                  <img className="vector-icon" alt="" src={vectorIcon} />
                  <img className="vector-icon1" alt="" src={vectorIcon1} />
                </Box>
              </Box>
              <Box className="gstin-24aaach7354kizh">
                GSTIN: 24AAACH7354KIZH
              </Box>
            </Box>
          </Box>
          <Box className="frame-group">
            <Box className="legal-name-godrej-properties-wrapper">
              <Box className="legal-name-container">
                <Typography
                  className="legal-name-godrej-properties"
                  variant="inherit"
                >
                  <Typography
                    className="legal-name"
                    variant="inherit"
                    component="span"
                  >
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >{`Legal Name `}</Typography>
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontWeight: "500" }}
                  >
                    <Typography
                      className="legal-name"
                      variant="inherit"
                      component="span"
                    >{`: `}</Typography>
                    <Typography variant="inherit" component="span">
                      GODREJ PROPERTIES LIMITED
                    </Typography>
                  </Typography>
                </Typography>
                <Typography
                  className="constitution-of-business-pub"
                  variant="inherit"
                >
                  <Typography variant="inherit" component="span">
                    <Typography variant="inherit" component="span">
                      Date of registration
                    </Typography>
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      :
                    </Typography>
                  </Typography>
                  <Typography variant="inherit" component="span">
                    <Typography
                      className="span3"
                      variant="inherit"
                      component="span"
                    >
                      {" "}
                      2017-07-01
                    </Typography>
                  </Typography>
                </Typography>
                <Typography
                  className="constitution-of-business-pub"
                  variant="inherit"
                >
                  <Typography variant="inherit" component="span">
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Constitution of business
                    </Typography>
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{ fontWeight: "500" }}
                    >
                      {" "}
                      :
                    </Typography>
                  </Typography>
                  <Typography variant="inherit" component="span">
                    <Typography
                      className="public-limited-company1"
                      variant="inherit"
                      component="span"
                    >
                      {" "}
                      Public Limited Company
                    </Typography>
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box className="ok-wrapper">
              <Box className="ok">OK</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GSTExtraDetails;
