import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import HeadingType2WithBackIcon from "components/heading2/heading-type2-with-back-icon";
import "./CustomersList.css";

interface Customer {
  id: string;
  name: string;
  crm: string;
  cbs: string;
  phone: string;
  modified: string;
}

// ✅ Customer list with PAN mapping
const dummy: Customer[] = [
  {
    id: "CTPT-1234", // Reliance Industries Ltd
    name: "Reliance Industries Ltd",
    crm: "CRM-5678",
    cbs: "CBS-9087",
    phone: "+91 98765 11111",
    modified: "10 Jun 2025",
  },
  {
    id: "CTPT-1111", // New Startup Pvt Ltd
    name: "New Startup Pvt Ltd",
    crm: "CRM-8765",
    cbs: "CBS-1023",
    phone: "+91 98765 22222",
    modified: "09 Jun 2025",
  },
  {
    id: "CTPT-3333", // Draft Infra LLP
    name: "Draft Infra LLP",
    crm: "CRM-7777",
    cbs: "CBS-3344",
    phone: "+91 98765 33333",
    modified: "08 Jun 2025",
  },
  {
    id: "CTPT-4444", // Mix Case Firm
    name: "Mix Case Firm",
    crm: "CRM-9090",
    cbs: "CBS-4567",
    phone: "+91 98765 44444",
    modified: "07 Jun 2025",
  },
];

// 🔁 Map CTPT ID → PAN (used by ViewMCADetails)
const ctptToPanMap: Record<string, string> = {
  "CTPT-1234": "AABCR0455M",
  "CTPT-1111": "AAECN2319Q",
  "CTPT-3333": "AADFD8342N",
  "CTPT-4444": "AACFM8823K",
};

export default function CustomersList() {
  const navigate = useNavigate();

  return (
    <Box className="customers-page">
      <Header />

      <Box className="customers-content">
        <HeadingType2WithBackIcon title="My Customers" />

        <Box className="customer-cards">
          {dummy.map((c) => (
            <Box
              key={c.id}
              className="customer-card"
              onClick={() =>
                navigate(`/add-customer/mca?pan=${ctptToPanMap[c.id]}`)
              }
            >
              <Box className="card-avatar">
                {c.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </Box>
              <Box className="card-info">
                <Typography className="info-label" sx={{ fontSize: "9px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
                  Name
                </Typography>
                <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
                  {c.name}
                </Typography>

                <Typography className="info-label" sx={{ fontSize: "9px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
                  CRM ID
                </Typography>
                <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
                  {c.crm}
                </Typography>

                <Typography className="info-label" sx={{ fontSize: "9px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
                  CBS ID
                </Typography>
                <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
                  {c.cbs}
                </Typography>

                <Typography className="info-label" sx={{ fontSize: "9px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
                  Phone
                </Typography>
                <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
                  {c.phone}
                </Typography>
              </Box>

              <Typography className="card-date" sx={{ fontSize: "9px", fontWeight: 300, fontFamily: "Poppins, sans-serif", textAlign: "right" }}>
                Modified {c.modified}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
}
