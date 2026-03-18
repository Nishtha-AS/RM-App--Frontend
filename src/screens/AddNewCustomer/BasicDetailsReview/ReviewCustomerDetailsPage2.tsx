import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import InputField from "components/input/input-set";
import Dropdown from "components/dropdown/dropdown";
import FooterMenuSet from "components/footermenu/footer-menu-set";

import mcaData from "data/MCA-Details.json";
import "./review-customer-details.css";

const ReviewCustomerDetailsPage2: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [record, setRecord] = useState<any>(null);
  const [pan, setPan] = useState("");
  const [msmeApplicable, setMsmeApplicable] = useState("No");
  const [gstin, setGstin] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const panParam = params.get("pan")?.toUpperCase() || "";
    const msme = params.get("msme") || "No";
    const gstParam = params.get("gstin") || "";

    setPan(panParam);
    setMsmeApplicable(msme);
    setGstin(gstParam);

    const matched = mcaData.find((e: any) => e.pan?.toUpperCase() === panParam);
    if (matched) {
      setRecord(matched);
    }
  }, [location.search]);

  const handleNext = () => {
    navigate(`/add-customer/review/stakeholders?pan=${pan}&gstin=${gstin}`);
  };

  return (
    <Box className="review-page">
      <Header />
      <Box className="review-content">
        <SectionHeaderWithActions headingText="Add Customer" />

        <Box className="review-heading-box">
          <Typography className="review-heading">Contact & Regulatory Details</Typography>
          <Typography className="review-subtitle">
            All <span className="mandatory">*</span> fields are mandatory
          </Typography>
        </Box>

        {record && (
          <Box className="review-form">
            <InputField
              label="Email ID"
              value={record?.basic_details?.["Email"] || "info@company.com"}
              disabled
              required
              onChange={() => {}}
            />
            <InputField
              label="Mobile Number"
              value={record?.basic_details?.["Mobile"] || "9999999999"}
              disabled
              required
              onChange={() => {}}
            />
            <InputField
              label="GST Number"
              value={gstin || ""}
              disabled
              required
              onChange={() => {}}
            />
            <InputField
              label="PAN Number"
              value={record?.pan || ""}
              disabled
              required
              onChange={() => {}}
            />

            {/* MSME-specific fields only */}
            <Dropdown
              label="Activity"
              required
              options={["Manufacturing", "Services"]}
              selectedValue="Manufacturing"
              onSelect={() => {}}
            />
            <Dropdown
              label="MSME Classification"
              required
              options={["Micro", "Small", "Medium"]}
              selectedValue="Medium"
              onSelect={() => {}}
            />
            <Dropdown
              label="PEP"
              required
              options={["Yes", "No"]}
              selectedValue="No"
              onSelect={() => {}}
            />
            <Dropdown
              label="Originating Branch"
              required
              options={["Delhi", "Mumbai", "Bangalore"]}
              selectedValue="Mumbai"
              onSelect={() => {}}
            />
            
          </Box>
        )}

        <Box className="review-buttons">
          <Button variant="outlined" onClick={() => navigate(-1)} className="review-back-btn">Back</Button>
          <Button variant="contained" onClick={handleNext} className="review-next-btn">Next</Button>
        </Box>
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default ReviewCustomerDetailsPage2;
