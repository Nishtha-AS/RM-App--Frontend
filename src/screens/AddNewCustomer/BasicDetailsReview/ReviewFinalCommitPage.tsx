import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import { useNavigate, useLocation } from "react-router-dom";
import "./review-final-commit.css";

const ReviewCustomerSummary: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const pan = params.get("pan") || "";
  const gstin = params.get("gstin") || "";

  const handleCommit = () => {
    navigate(`/add-customer/success?pan=${pan}&gstin=${gstin}`);
  };

  const handleBack = () => {
    navigate(`/add-customer/review/stakeholders?pan=${pan}&gstin=${gstin}`);
  };

  return (
    <Box className="review-final-screen">
      <Header />
      <Box className="review-final-content">
        <SectionHeaderWithActions headingText="Review Customer Details" />

        <Typography className="final-review-title">Final Review Summary</Typography>
        <Typography className="final-review-desc">
          Please ensure that all sections have been reviewed and verified.
        </Typography>

        <Box className="final-summary-box">
          <Typography className="summary-line">PAN: <strong>{pan}</strong></Typography>
          <Typography className="summary-line">Basic Details: ✔️</Typography>
          <Typography className="summary-line">GSTIN Verification: ✔️</Typography>
          <Typography className="summary-line">CIN/LLPIN Status: ✔️</Typography>
          <Typography className="summary-line">MCA Details: ✔️</Typography>
          <Typography className="summary-line">Stakeholders: ✔️</Typography>
          <Typography className="summary-line">Banking Document Upload: ✔️</Typography>
        </Box>

        <Box className="final-buttons">
          <Button
            variant="outlined"
            onClick={handleBack}
            className="final-back-btn"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="commit-button"
            onClick={handleCommit}
          >
            Commit & Proceed
          </Button>
        </Box>
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default ReviewCustomerSummary;
