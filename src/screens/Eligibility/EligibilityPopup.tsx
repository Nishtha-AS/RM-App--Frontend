import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import Loader from "components/loader/loader";
import "./EligibilityPopup.css";

const customerMap: Record<string, any> = {
  "AABCR0455M": { initials: "RI", name: "Reliance Industries Ltd", region: "Maharashtra", score: 82 },
  "AAECN2319Q": { initials: "NS", name: "New Startup Pvt Ltd", region: "Karnataka", score: 59 },
  "AADFD8342N": { initials: "DI", name: "Draft Infra LLP", region: "Gujarat", score: 45 },
  "AACFM8823K": { initials: "MC", name: "Mix Case Firm", region: "Delhi", score: 70 },
};

const getStatusColor = (score: number) => {
  if (score >= 75) return { label: "Eligible", color: "#23a04d" };
  if (score >= 60) return { label: "Risky", color: "#f7b500" };
  return { label: "Not Eligible", color: "#d92d20" };
};

const EligibilityPopup: React.FC = () => {
  const { customerId } = useParams();
  const [searchParams] = useSearchParams();
  const returnPan = searchParams.get("returnPan");

  const navigate = useNavigate();

  const panKey = customerId?.toUpperCase() ?? "";
  const customer = customerMap[panKey];
  const result = customer ? getStatusColor(customer.score) : { label: "-", color: "#999" };

  const [program, setProgram] = useState("");
  const [facilityType, setFacilityType] = useState("");
  const [amount, setAmount] = useState("");
  const [collateral, setCollateral] = useState("No");
  const [collateralType, setCollateralType] = useState("");

  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  const handleClose = () => {
    navigate(`/applications/new?pan=${returnPan}&eligibilityDone=true&score=${customer?.score}`);
  };

  return (
    <Box className="elig-popup-page">
      <Header />

      <Box className="popup-container">
        {loading && <Loader />}

        {!loading && !showResult && (
          <>
            <Typography className="popup-title">Check Eligibility</Typography>

            <FormControl fullWidth className="form-field">
              <InputLabel>Program</InputLabel>
              <Select value={program} onChange={(e) => setProgram(e.target.value)} label="Program">
                <MenuItem value="GST">GST</MenuItem>
                <MenuItem value="Banking">Banking</MenuItem>
                <MenuItem value="Normal Business Banking">Normal Business Banking</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth className="form-field">
              <InputLabel>Facility Type</InputLabel>
              <Select value={facilityType} onChange={(e) => setFacilityType(e.target.value)} label="Facility Type">
                <MenuItem value="Term Loan">Term Loan</MenuItem>
                <MenuItem value="Overdraft">Overdraft</MenuItem>
                <MenuItem value="DLOD">DLOD</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Facility Amount (in Lakhs)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-field"
            />

            <FormControl component="fieldset" className="form-field">
              <Typography className="form-label">Collateral Available?</Typography>
              <RadioGroup row value={collateral} onChange={(e) => setCollateral(e.target.value)}>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            {collateral === "Yes" && (
              <FormControl fullWidth className="form-field">
                <InputLabel>Collateral Type</InputLabel>
                <Select value={collateralType} onChange={(e) => setCollateralType(e.target.value)} label="Collateral Type">
                  <MenuItem value="SOCP">SOCP</MenuItem>
                  <MenuItem value="SORP">SORP</MenuItem>
                  <MenuItem value="Residential Land">Residential Land</MenuItem>
                  <MenuItem value="Commercial Land">Commercial Land</MenuItem>
                </Select>
              </FormControl>
            )}

            <Button variant="contained" fullWidth onClick={handleSubmit} className="submit-btn" sx={{ mt: 2 }}>
              Check Eligibility
            </Button>
          </>
        )}

        {!loading && showResult && (
          customer ? (
            <>
              <Typography className="popup-title">Eligibility Result</Typography>
              <Box className="avatar-circle">{customer.initials}</Box>
              <Typography className="info-label">Counterparty Name</Typography>
              <Typography className="info-value">{customer.name}</Typography>
              <Typography className="info-label">Region</Typography>
              <Typography className="info-value">{customer.region}</Typography>
              <Typography className="info-label">Eligibility Score</Typography>
              <Typography className="info-value">{customer.score}</Typography>
              <Typography className="info-label">Status</Typography>
              <Typography className="info-value" sx={{ color: result.color }}>{result.label}</Typography>

              <Button variant="contained" fullWidth onClick={handleClose} className="submit-btn" sx={{ marginTop: "16px" }}>
                Back to Application
              </Button>
            </>
          ) : (
            <Typography sx={{ color: "red", fontWeight: 500 }}>
              No data found for this customer. Please check the PAN or customer ID.
            </Typography>
          )
        )}
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default EligibilityPopup;
