import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import { useNavigate, useLocation } from "react-router-dom";
import UploadIcon from "@mui/icons-material/UploadFile";
import "./document-upload.css";

const DocumentUploadIntro: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pan = params.get("pan") || "";
  const gstin = params.get("gstin") || "";

  const [bank, setBank] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const selected = e.target.files[0];
      if (selected.size > 100 * 1024 * 1024) {
        alert("File size must be under 100 MB");
        return;
      }
      const validTypes = ["application/pdf", "application/zip"];
      if (!validTypes.includes(selected.type)) {
        alert("Only PDF or ZIP files are allowed");
        return;
      }
      setFile(selected);
    }
  };

  const handleNext = () => {
    if (!file) {
      alert("Please upload a valid PDF or ZIP file");
      return;
    }
    navigate(`/add-customer/documents/progress?pan=${pan}&gstin=${gstin}&filename=${file.name}`);
  };

  return (
    <Box className="doc-upload-screen">
      <Header />
      <Box className="doc-upload-content">
        <SectionHeaderWithActions headingText="Upload" />

        <Typography className="upload-title">Browse and choose bank statements</Typography>
        <Typography className="upload-subtext">
          (Files will be deleted once processed)
        </Typography>

        <Box className="upload-form">
          <FormControl fullWidth className="bank-select-dropdown">
            <InputLabel>Select bank name</InputLabel>
            <Select
              value={bank}
              label="Select bank name"
              onChange={(e) => setBank(e.target.value)}
            >
              <MenuItem value="HDFC">HDFC</MenuItem>
              <MenuItem value="ICICI">ICICI</MenuItem>
              <MenuItem value="SBI">SBI</MenuItem>
              <MenuItem value="Axis">Axis</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            component="label"
            className="upload-btn"
            startIcon={<UploadIcon />}
          >
            Choose Bank Statement
            <input type="file" hidden onChange={handleFileChange} accept=".pdf,.zip" />
          </Button>

          {file && (
            <Typography className="uploaded-file-name">
              Selected File: {file.name}
            </Typography>
          )}

          <Box className="upload-instructions">
            <Typography variant="body2">
              • Files must be PDF or ZIP and no more than 100 MB. <br />
              • These should be for the account(s) where the majority of your business revenue is generated. <br />
              • Please ensure the statements display the business's name, sort code, account number, and the account balance. <br />
              • Only PDF or ZIP file upload is accepted.
            </Typography>
          </Box>

          <Box className="upload-button-row">
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
              Upload
            </Button>
          </Box>
        </Box>
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default DocumentUploadIntro;
