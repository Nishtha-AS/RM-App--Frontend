import React, { FunctionComponent, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  Menu,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";

import calendarIcon from "assets/calender.svg";
import pdfIcon from "assets/pdf.svg";
import paperclipIcon from "assets/paperclip.svg";

import "./credit-check.css";

const CreditCheck: FunctionComponent = () => {
  const navigate = useNavigate();

  const [creditCheck, setCreditCheck] = useState("");
  const [status, setStatus] = useState("");
  const [checkDate, setCheckDate] = useState("");
  const [comments, setComments] = useState("");
  const [selectedRow, setSelectedRow] = useState("row1");

  const [showMatchSection, setShowMatchSection] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleAttachClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAttachClose = () => {
    setAnchorEl(null);
  };

  const handleCheckCredit = () => {
    if (creditCheck && status && checkDate) {
      setShowMatchSection(true);
    }
  };

  return (
    <Box className="credit-check-screen">
      <Header />
      <Box className="credit-check-content">
        <SectionHeaderWithActions headingText="Credit Check" />


        {/* Dropdowns */}
        <Box className="form-field-group">
          <Typography className="form-label">Credit Check</Typography>
          <Select
            fullWidth
            displayEmpty
            value={creditCheck}
            onChange={(e) => setCreditCheck(e.target.value)}
            className="custom-select"
            renderValue={(selected) => selected || "-select-"}
          >
            <MenuItem value="CFR">CRF</MenuItem>
            <MenuItem value="Highmark">Highmark</MenuItem>
            <MenuItem value="Google Search">Google Search</MenuItem>
          </Select>
        </Box>

        <Box className="form-field-group">
          <Typography className="form-label">Status</Typography>
          <Select
            fullWidth
            displayEmpty
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="custom-select"
            renderValue={(selected) => selected || "-select-"}
          >
            <MenuItem value="Match Found">Match Found</MenuItem>
            <MenuItem value="No Match">No Match</MenuItem>
          </Select>
        </Box>

        <Box className="form-field-group">
          <Typography className="form-label">Check Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={checkDate}
            onChange={(e) => setCheckDate(e.target.value)}
            className="custom-date"
            InputProps={{
              endAdornment: (
                <img
                  src={calendarIcon}
                  alt="calendar"
                  className="calendar-icon"
                />
              ),
            }}
          />
        </Box>

        {/* Check Credit Button */}
        <Box sx={{ mt: 2, mb: 3 }}>
          <Button
            variant="contained"
            className="btn-filled"
            onClick={handleCheckCredit}
            fullWidth
          >
            Check Credit
          </Button>
        </Box>

        {/* Matches */}
        {showMatchSection && (
          <Box className="matches-box">
            <Box className="matches-header">MATCHES FOUND</Box>
            <Box className="matches-list">
              <ol>
                <li>CFR</li>
                <li>CIRF Highmark</li>
                <li>AQ List</li>
              </ol>
              <a href="#" className="download-link">
                <img src={pdfIcon} alt="PDF" className="pdf-icon" />
                Download PDF
              </a>
            </Box>
          </Box>
        )}

        {/* Comments */}
        <Box className="form-field-group">
          <Typography className="form-label">Add Comments:</Typography>
          <Box className="comments-box" sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
            padding: "4px 8px",
          }}>
            <textarea
              placeholder="Comments/ Notes"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                resize: "none",
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                padding: "6px 8px",
              }}
              rows={3}
            />
            <IconButton onClick={handleAttachClick}>
              <img src={paperclipIcon} alt="Attach" className="edit-icon" />
            </IconButton>
          </Box>

          {/* Attach menu */}
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleAttachClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem onClick={handleAttachClose}>Attach Document</MenuItem>
            <MenuItem onClick={handleAttachClose}>Attach Image</MenuItem>
            <MenuItem onClick={handleAttachClose}>Attach PDF</MenuItem>
          </Menu>
        </Box>

        {/* Buttons */}
        <Box className="credit-buttons">
          <Button className="btn-outlined" variant="outlined" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button className="btn-filled" variant="contained">
            Save
          </Button>
        </Box>
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default CreditCheck;
