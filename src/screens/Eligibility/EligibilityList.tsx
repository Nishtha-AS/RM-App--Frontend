import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
} from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import HeadingType2WithBackIcon from "components/heading2/heading-type2-with-back-icon";
import "./EligibilityList.css";

interface Customer {
  id: string;
  initials: string;
  name: string;
  appId: string;
  region: string;
  modified: string;
  score: number;
}

const customers: Customer[] = [
  {
    id: "CTPT-1234",
    initials: "RI",
    name: "Reliance Industries Ltd",
    appId: "APP-1234",
    region: "Maharashtra",
    modified: "10 Jun 2025",
    score: 82,
  },
  {
    id: "CTPT-1111",
    initials: "NS",
    name: "New Startup Pvt Ltd",
    appId: "APP-1111",
    region: "Karnataka",
    modified: "09 Jun 2025",
    score: 59,
  },
  {
    id: "CTPT-3333",
    initials: "DI",
    name: "Draft Infra LLP",
    appId: "APP-3333",
    region: "Gujarat",
    modified: "08 Jun 2025",
    score: 45,
  },
  {
    id: "CTPT-4444",
    initials: "MC",
    name: "Mix Case Firm",
    appId: "APP-4444",
    region: "Delhi",
    modified: "07 Jun 2025",
    score: 70,
  },
];

const getStatusColor = (score: number) => {
  if (score >= 75) return { label: "Eligible", color: "#23a04d" };
  if (score >= 60) return { label: "Risky", color: "#f7b500" };
  return { label: "Not Eligible", color: "#d92d20" };
};

export default function EligibilityList() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleOpen = (customer: Customer) => {
    setSelectedCustomer(customer);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedCustomer(null);
  };

  return (
    <Box className="elig-page">
      <Header />
      <Box className="elig-content">
        <HeadingType2WithBackIcon title="Eligibility Check" />

        <Box className="elig-cards">
          {customers.map((c) => {
            const status = getStatusColor(c.score);
            return (
              <Box
                key={c.id}
                className="elig-card"
                onClick={() => handleOpen(c)}
                sx={{
                  position: "relative",
                  minHeight: "110px",
                }}
              >
                <Box className="card-top">
                  <Box className="card-avatar">{c.initials}</Box>
                  <Box className="card-info">
                    <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Counterparty Name</Typography>
                    <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{c.name}</Typography>
                  </Box>
                  <Box className="card-meta">
                    <Box>
                      <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>CTPT-ID</Typography>
                      <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{c.id}</Typography>
                    </Box>
                    <Box>
                      <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>APP-ID</Typography>
                      <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{c.appId}</Typography>
                    </Box>
                    <Box>
                      <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Region</Typography>
                      <Typography className="info-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{c.region}</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Score Badge */}
                <Box
                  className="score-badge"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: 12,
                    background: status.color,
                    color: "#fff",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    padding: "2px 8px",
                  }}
                >
                  {status.label} ({c.score})
                </Box>

                {/* Date Modified */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 12,
                  }}
                >

                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <FooterMenuSet />

      {/* Result Modal */}
      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: 24,
            p: 3,
            textAlign: "center",
          }}
        >
          {selectedCustomer && (
            <>
              <Typography sx={{ fontWeight: 600, fontSize: 16, mb: 2, color: "#2d5497" }}>
                Eligibility Result
              </Typography>

              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#2d5497",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: 18,
                  margin: "0 auto 16px",
                }}
              >
                {selectedCustomer.initials}
              </Box>

              <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Counterparty Name</Typography>
              <Typography className="info-value">{selectedCustomer.name}</Typography>

              <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Region</Typography>
              <Typography className="info-value">{selectedCustomer.region}</Typography>

              <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Eligibility Score</Typography>
              <Typography className="info-value">{selectedCustomer.score}</Typography>

              <Typography className="info-label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Status</Typography>
              <Typography
                className="info-value"
                sx={{ color: getStatusColor(selectedCustomer.score).color }}
              >
                {getStatusColor(selectedCustomer.score).label}
              </Typography>

              <Button
                onClick={handleClose}
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  backgroundColor: "#2d5497",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                  borderRadius: 2,
                  textTransform: "none",
                }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
