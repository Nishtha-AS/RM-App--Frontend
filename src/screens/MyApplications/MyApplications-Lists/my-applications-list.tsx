// src/screens/MyApplications/MyApplications-List/my-applications-list.tsx

import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./my-applications-list.css";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import ApplicationCard from "components/applicationcards/application-card";

// Dummy dataset filtered for approved PANs
const approvedApplications = [
  {
    pan: "AABCR0455M",
    name: "Reliance Industries Ltd",
    ctptId: "CTPT-1234",
    status: "Application Approved",
    date: "11 June 2025",
  },
  {
    pan: "AAECN2319Q",
    name: "New Startup Pvt Ltd",
    ctptId: "CTPT-1111",
    status: "Application Approved",
    date: "10 June 2025",
  },
];

const MyApplicationsList: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (pan: string) => {
    navigate(`/applications/summary?pan=${pan}`);
  };

  return (
    <Box className="my-applications-list-screen">
      <Header />

      {/* ✅ Scrollable main content */}
      <Box className="my-applications-content">
        {/* ✅ Section heading with Search/Sort */}
        <SectionHeaderWithActions headingText="My Applications" />

        {/* ✅ Cards */}
        <Box className="application-list">
          {approvedApplications.map((app) => (
            <ApplicationCard
              key={app.pan}
              ctptId={app.ctptId}
              name={app.name}
              status={app.status}
              date={app.date}
              onClick={() => handleCardClick(app.pan)}
            />
          ))}
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default MyApplicationsList;
