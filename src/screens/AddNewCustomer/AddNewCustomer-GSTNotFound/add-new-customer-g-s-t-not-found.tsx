import { FunctionComponent, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import FooterMenu from "components/footermenu/footer-menu-set";
import { useNavigate, useLocation } from "react-router-dom";
import gstData from "data/gst-handling.json";
import rawData from "data/cinllpin-_status.json";
import "./add-new-customer-g-s-t-not-found.css";

// ✅ Define types
type CinLlpinRecord = {
  pan: string;
  name: string;
  entityType?: string;
  cin_status: string;
  cin: string | null;
  llpin: string | null;
  manual_type: string | null;
  manual_input: string | null;
  reason_if_not_found: string | null;
};

const cinllpinData = rawData as CinLlpinRecord[];

const AddNewCustomerGSTNotFound: FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState("A");
  const [selectedReason, setSelectedReason] = useState("");
  const [manualGSTIN, setManualGSTIN] = useState("");
  const [manualLocation, setManualLocation] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [nextRoute, setNextRoute] = useState("/add-customer/manual-cin");

  const navigate = useNavigate();
  const location = useLocation();

  const reasonOptions = [
    "GST not applicable in my Product/ Service.",
    "GST is not applicable in my State",
    "I am/we are not required to fill GST return as my/our sales are below required to GST registration.",
    "Enter reason for GST non Registration",
  ];

  const isCustomReason = selectedReason === reasonOptions[3];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pan = params.get("pan")?.toUpperCase() || "";

    const gstEntry = gstData.find((e) => e.PAN?.toUpperCase() === pan);
    const cinEntry = cinllpinData.find((e) => e.pan?.toUpperCase() === pan);

    if (gstEntry) {
      const status = gstEntry["GSTIN Status"];
      if (status === "NOT_FOUND") {
        setSelectedTab("A");
        const reason = gstEntry["Reason If Not Found"] || "";
        if (reasonOptions.includes(reason)) {
          setSelectedReason(reason);
        } else if (reason) {
          setSelectedReason(reasonOptions[3]);
          setCustomReason(reason);
        }
      } else if (status === "MANUAL_ENTRY") {
        setSelectedTab("B");
        setManualGSTIN(gstEntry["Manual GSTIN"] || "");
        setManualLocation(gstEntry["Manual Location"] || "");
      }
    }

  }, [location.search]);

  return (
    <Box className="gst-screen">
      <Header />
      <Box className="section-header-wrapper">
        <SectionHeaderWithActions headingText="Add New Customer" />
      </Box>

      <Box className="gst-content">
        <Box className="heading-container">
          <Typography className="main-heading">GSTIN Not Found</Typography>
          <Typography className="sub-heading">
            It seems you don’t have a GSTIN. Complete the applicable option to proceed.
          </Typography>
        </Box>

        <Box className="gst-tab-switch">
          <Box
            className={`gst-tab ${selectedTab === "A" ? "active" : ""}`}
            onClick={() => setSelectedTab("A")}
          >
            Option A: Select Reason
          </Box>
          <Box
            className={`gst-tab ${selectedTab === "B" ? "active" : ""}`}
            onClick={() => setSelectedTab("B")}
          >
            Option B: Enter Manually
          </Box>
        </Box>

        {selectedTab === "A" ? (
          <Box className="gst-options">
            {reasonOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Radio
                    checked={selectedReason === option}
                    onChange={() => setSelectedReason(option)}
                    className="custom-radio"
                  />
                }
                label={<Typography className="gst-option-text">{option}</Typography>}
              />
            ))}
            {isCustomReason && (
              <Box className="input-group">
                <Typography className="input-label">Reason:</Typography>
                <TextField
                  placeholder="Enter Input Text"
                  fullWidth
                  value={customReason}
                  onChange={(e) => setCustomReason(e.target.value)}
                  className="custom-input"
                  variant="outlined"
                />
              </Box>
            )}
          </Box>
        ) : (
          <Box className="gst-manual-fields">
            <TextField
              fullWidth
              label="Enter your GSTIN:"
              value={manualGSTIN}
              onChange={(e) => setManualGSTIN(e.target.value)}
              placeholder="Enter Input Text"
              className="custom-input"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Enter your Location:"
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              placeholder="Enter Input Text"
              className="custom-input"
              variant="outlined"
            />
          </Box>
        )}

        <Box className="gst-buttons">
          <Button
            variant="contained"
            className="nav-button"
            onClick={() => navigate("/add-customer/dedupe")}
          >
            Back
          </Button>
          <Button
  variant="contained"
  className="nav-button"
  onClick={() => {
    const pan = new URLSearchParams(location.search).get("pan")?.toUpperCase();
    const matchedEntity = cinllpinData.find((e) => e.pan?.toUpperCase() === pan);

    if (!matchedEntity) {
      navigate(`/add-customer/manual-cin?pan=${pan}`);
      return;
    }

    const isLLP = matchedEntity.entityType?.toLowerCase().includes("llp");

    if (matchedEntity.cin_status === "FOUND") {
      if (matchedEntity.cin && !isLLP) {
        navigate(`/add-customer/cin?pan=${pan}`);
      } else if (matchedEntity.llpin && isLLP) {
        navigate(`/add-customer/llpin?pan=${pan}`);
      } else {
        navigate(`/add-customer/manual-cin?pan=${pan}`);
      }
    } else {
      navigate(`/add-customer/manual-cin?pan=${pan}`);
    }
  }}
>
  Next
</Button>
        </Box>
      </Box>

      <FooterMenu />
    </Box>
  );
};

export default AddNewCustomerGSTNotFound;
