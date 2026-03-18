import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import InputField from "components/input/input-set";
import AddStakeholderModal, { StakeholderData } from "components/modals/AddStakeholderModal";
import { useNavigate, useLocation } from "react-router-dom";
import "./review-customer-stakeholders.css";

const ReviewCustomerStakeholders: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [stakeholders, setStakeholders] = useState<StakeholderData[]>([
    {
      name: "Ramesh Sharma",
      pan: "AABC1234Q",
      mobile: "+91-9876543210",
      email: "ramesh@example.com",
      gender: "Male",
      dob: "01-Jan-1980",
      address: "123, Civil Lines, Delhi"
    },
    {
      name: "Sunita Mehta",
      pan: "BBMC4567P",
      mobile: "+91-9988776655",
      email: "sunita@example.com",
      gender: "Female",
      dob: "05-Feb-1985",
      address: "22B, MG Road, Mumbai"
    }
  ]);

  const handleAddStakeholder = (data: StakeholderData) => {
    setStakeholders((prev) => [...prev, data]);
  };

  const params = new URLSearchParams(location.search);
  const pan = params.get("pan")?.toUpperCase() || "";
  const gstin = params.get("gstin") || "";

  const handleNext = () => {
    const encodedStakeholders = encodeURIComponent(JSON.stringify(stakeholders));
    navigate(`/add-customer/review/summary?pan=${pan}&gstin=${gstin}&stakeholders=${encodedStakeholders}`);
  };

  return (
    <Box className="review-screen">
      <Header />
      <Box className="review-content">
        <SectionHeaderWithActions headingText="Review Customer Details" />
        <Box className="stakeholder-header">
          <Typography className="section-title">Stakeholder Details</Typography>
          <Button className="add-stakeholder-btn" variant="outlined" onClick={() => setShowModal(true)}>
            + Add Stakeholder
          </Button>
        </Box>

        {stakeholders.map((s, idx) => (
          <Box className="stakeholder-section" key={idx}>
            <Typography className="subsection-title">Stakeholder {idx + 1}</Typography>
            <InputField label="Name" value={s.name} disabled required onChange={() => {}} />
            <InputField label="PAN" value={s.pan} disabled required onChange={() => {}} />
            <InputField label="Phone" value={s.mobile} disabled required onChange={() => {}} />
            <InputField label="Email" value={s.email} disabled required onChange={() => {}} />
            <InputField label="Gender" value={s.gender} disabled required onChange={() => {}} />
            <InputField label="Date of Birth" value={s.dob} disabled required onChange={() => {}} />
            <InputField label="Address" value={s.address} disabled required onChange={() => {}} />
          </Box>
        ))}

        <Box className="review-buttons">
          <Button variant="outlined" onClick={() => navigate(-1)} className="review-back-btn">Back</Button>
          <Button variant="contained" className="review-next-btn" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
      <FooterMenuSet />

      <AddStakeholderModal open={showModal} onClose={() => setShowModal(false)} onSubmit={handleAddStakeholder} />
    </Box>
  );
};

export default ReviewCustomerStakeholders;
