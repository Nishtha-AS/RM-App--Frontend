import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import { useLocation, useNavigate } from "react-router-dom";
import "./document-upload.css";

const DocumentUploadSuccess: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const pan = params.get("pan") || "";
    const gstin = params.get("gstin") || "";


    const handleDoneClick = () => {
        navigate(`/add-customer/documents/statements?pan=${pan}&gstin=${gstin}`);
      };

  return (
    <Box className="doc-upload-screen">
      <Header />
      <Box className="doc-upload-content">
        <SectionHeaderWithActions headingText="Upload" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 60, color: "#4caf50" }} />
          <Typography
            sx={{
              mt: 2,
              fontSize: 16,
              fontWeight: 600,
              color: "#2d5497",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            File uploaded successfully!
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: 13,
              fontWeight: 400,
              color: "#555",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            Your transactions are being processed.
          </Typography>

          <Button
  variant="contained"
  sx={{
    mt: 4,
    backgroundColor: "#2d5497",
    borderRadius: "8px",
    padding: "10px 32px",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Poppins, sans-serif",
  }}
  onClick={handleDoneClick}
>
  Done
</Button>

        </Box>
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default DocumentUploadSuccess;
