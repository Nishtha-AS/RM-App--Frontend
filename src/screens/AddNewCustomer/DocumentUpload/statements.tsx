import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Tooltip,
} from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate, useLocation } from "react-router-dom";
import "./statements.css";
import cinData from "data/cinllpin-_status.json";

// Dummy statement data
const statements = [
  {
    id: 1,
    bank: "ICICI",
    maskedAccount: "xxxx-xxxx-xxx-9874",
    dateRange: "01 Jan 2023 - 31 Mar 2023",
    status: "processing",
    timeInfo: "2 min ago",
  },
  {
    id: 2,
    bank: "ICICI",
    maskedAccount: "xxxx-xxxx-xxx-9874",
    dateRange: "01 Jan 2022 - 31 Dec 2022",
    status: "processed",
    timeInfo: "3 months ago",
  },
  {
    id: 3,
    bank: "Axis",
    maskedAccount: "xxxx-xxxx-xxx-1075",
    dateRange: "01 Jan 2021 - 31 Dec 2022",
    status: "failed",
    timeInfo: "1 year ago",
  },
  {
    id: 4,
    bank: "IDFC",
    maskedAccount: "xxxx-xxxx-xxx-3210",
    dateRange: "01 Jan 2020 - 31 Dec 2021",
    status: "processed",
    timeInfo: "2 years ago",
  },
];

const StatementsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pan = params.get("pan") || "";
  const gstin = params.get("gstin") || "";

  const handleUploadClick = () => {
    navigate(`/add-customer/documents/intro?pan=${pan}`);
  };

  const handleNext = () => {
    const matchedEntity = cinData.find((e: any) => e.pan?.toUpperCase() === pan);
    if (!matchedEntity) return navigate(`/add-customer/manual-cin?pan=${pan}&gstin=${gstin}`);
    const isLLP = matchedEntity.entityType?.toLowerCase().includes("llp");
  
    if (matchedEntity.cin_status === "FOUND") {
      if (matchedEntity.cin && !isLLP)
        navigate(`/add-customer/cin?pan=${pan}&gstin=${gstin}`);
      else if (matchedEntity.llpin && isLLP)
        navigate(`/add-customer/llpin?pan=${pan}&gstin=${gstin}`);
      else
        navigate(`/add-customer/manual-cin?pan=${pan}&gstin=${gstin}`);
    } else {
      navigate(`/add-customer/manual-cin?pan=${pan}&gstin=${gstin}`);
    }
  };

  return (
    <Box className="statements-screen">
      <Header />

      <Box className="statements-content">
        <SectionHeaderWithActions headingText="Statements" />

        <Box className="upload-top-center" onClick={handleUploadClick}>
          <IconButton className="upload-icon-button">
            <CloudUploadIcon sx={{ color: "#2d5497", fontSize: 28 }} />
          </IconButton>
          <Typography className="upload-label">Upload New</Typography>
        </Box>

        <Box className="statement-list">
          {statements.map((item) => (
            <Box className="statement-item" key={item.id}>
              <Box className="statement-left">
                <Box className="bank-icon">
                  <Typography>{item.bank[0]}</Typography>
                </Box>
                <Box className="statement-info">
                  <Typography className="account-text">{item.maskedAccount}</Typography>
                  <Typography className="date-range">{item.dateRange}</Typography>
                </Box>
              </Box>

              <Box className="statement-right">
                <Box className={`status-badge ${item.status}`}>
                  {item.status}
                </Box>
                <Typography className="time-info">{item.timeInfo}</Typography>
                {item.status === "processed" && (
                  <IconButton className="download-btn">
                    <DownloadIcon sx={{ color: "#2d5497" }} />
                  </IconButton>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <Box className="statement-nav-buttons">
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            className="nav-btn-outline"
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            className="nav-btn-filled"
          >
            Next
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default StatementsPage;
