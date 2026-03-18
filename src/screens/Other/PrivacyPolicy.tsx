import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

import "./PrivacyPolicy.css";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="privacy-page">
      {/* Header Bar with Back Button */}
      <Box className="privacy-header-bar">
        <IconButton
          size="small"
          onClick={() => navigate(-1)}
          className="back-btn"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography className="header-title">
          Account &gt; Privacy Policy
        </Typography>
      </Box>

      {/* Content */}
      <Box className="privacy-content">
        <Typography paragraph>
          At Aadiswan Info Consultants, we are committed to safeguarding the
          privacy of our clients and website visitors. This document outlines
          how we collect, use, store, and protect your personal information.
        </Typography>

        <Typography variant="h2">1. Information We Collect</Typography>
        <Typography paragraph>
          We may collect name, email, phone, company details, browsing data,
          and other information you provide voluntarily.
        </Typography>

        <Typography variant="h2">2. How We Use Your Data</Typography>
        <Typography paragraph>
          Data is used to improve our services, personalize user experience,
          and communicate updates. We never sell your personal information to
          third parties.
        </Typography>

        <Typography variant="h2">3. Data Security</Typography>
        <Typography paragraph>
          We implement industry-standard safeguards (encryption, access
          controls) to protect your information.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
