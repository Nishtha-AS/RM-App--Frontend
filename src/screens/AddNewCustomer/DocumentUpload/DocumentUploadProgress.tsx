import React, { useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress
} from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useLocation, useNavigate } from "react-router-dom";
import "./document-upload.css";

const DocumentUploadProgress: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const fileName = params.get("filename") || "document.pdf";
  const pan = params.get("pan") || "";
  const gstin = params.get("gstin") || "";

  // ⏱ Simulate 3-second upload before redirect
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/add-customer/documents/success?pan=${pan}&gstin=${gstin}`);
    }, 3000); // you can change duration if needed
  
    return () => clearTimeout(timer); // Clean up the timer on unmount or dependency change
  }, [navigate, pan, gstin]);

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
          <CloudUploadIcon sx={{ fontSize: 60, color: "#2d5497" }} />
          <Typography
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            Hold on, the file <strong>{fileName}</strong><br />
            is being uploaded...
          </Typography>
          <CircularProgress
            sx={{ mt: 4, color: "#2d5497" }}
            thickness={5}
            size={40}
          />
        </Box>
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default DocumentUploadProgress;
