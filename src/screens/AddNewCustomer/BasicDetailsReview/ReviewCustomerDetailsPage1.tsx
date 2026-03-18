import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import InputField from "components/input/input-set";
import Dropdown from "components/dropdown/dropdown";
import FooterMenuSet from "components/footermenu/footer-menu-set";

import mcaData from "data/MCA-Details.json";
import "./review-customer-details.css";

const ReviewCustomerDetailsPage1: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [record, setRecord] = useState<any>(null);
  const [msmeApplicable, setMsmeApplicable] = useState("Yes");
  const [gstin, setGstin] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pan = params.get("pan")?.toUpperCase();
    if (!pan) return;

    const matched = mcaData.find((e: any) => e.pan?.toUpperCase() === pan);
    if (matched) {
      setRecord(matched);
      const extractedGstin = matched?.taxation_regulatory?.["GST Number"] || "";
      setGstin(extractedGstin);
    }
  }, [location.search]);

  const handleNext = () => {
    const pan = record?.pan || "";
    const ctptId = `CTPT-${pan.slice(-4)}`;
    navigate(
      `/add-customer/review/page2?pan=${pan}&ctpt=${ctptId}&msme=${msmeApplicable}&gstin=${gstin}`
    );
  };

  return (
    <Box className="review-page">
      <Header />
      <Box className="review-content">
        <SectionHeaderWithActions headingText="Add Customer" />

        <Box className="review-heading-box">
          <Typography className="review-heading">Basic Details</Typography>
          <Typography className="review-subtitle">
            All <span className="mandatory">*</span> fields are mandatory
          </Typography>
        </Box>

        {record && (
          <Box className="review-form">
            <InputField
              label="Entity Name"
              value={record?.basic_details?.["Company Name"] || ""}
              disabled
              required
              onChange={() => {}}
            />
            <InputField
              label="Legal Constitution"
              value={record?.basic_details?.["Company Type"] || ""}
              disabled
              required
              onChange={() => {}}
            />
            <InputField
              label="CIN"
              value={record?.basic_details?.CIN || ""}
              disabled
              required
              onChange={() => {}}
            />
            <InputField
              label="Date of Incorporation"
              value={record?.basic_details?.["Incorporation Date"] || ""}
              disabled
              required
              onChange={() => {}}
            />
            <Dropdown
              label="Is MSME Applicable?"
              required
              options={["Yes", "No"]}
              selectedValue={msmeApplicable}
              onSelect={(val: string) => setMsmeApplicable(val)}
            />
            <InputField
              label="Address"
              value={record?.basic_details?.Address || ""}
              disabled
              required
              onChange={() => {}}
            />
          </Box>
        )}

        <Box className="review-buttons">
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            className="review-back-btn"
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            className="review-next-btn"
          >
            Next
          </Button>
        </Box>
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default ReviewCustomerDetailsPage1;
