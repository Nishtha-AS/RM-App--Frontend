import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  Modal,
  IconButton,
  Tooltip,
  Collapse
} from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HistoryIcon from "@mui/icons-material/History";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import gstVerifiedData from "data/gst-verified-details.json";
import cinData from "data/cinllpin-_status.json";
import type { GSTDetails } from "components/modals/GSTINDetailModal";
import GSTINHistoryModal from "components/modals/GSTINHistoryModal";
import GSTINDetailModal from "components/modals/GSTINDetailModal";
import "./add-new-customer-g-s-t-i-n.css";

interface GSTDetail {
  gstin: string;
  location: string;
  status: string;
  verified?: boolean;
  selected?: boolean;
  verificationStatus?: "Not Started" | "In Progress" | "Completed";
  details?: Record<string, any>;
  history?: string[];
}

interface PANEntry {
  pan: string;
  gstins: GSTDetail[];
}

const AddNewCustomerGSTIN: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [gstinList, setGstinList] = useState<GSTDetail[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [pan, setPan] = useState("");
  const [selectedGSTIN, setSelectedGSTIN] = useState<GSTDetail | null>(null);
  const [showHistoryFor, setShowHistoryFor] = useState<GSTDetail | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const panFromUrl = params.get("pan")?.toUpperCase() || "";
    setPan(panFromUrl);

    const entry = (gstVerifiedData as PANEntry[]).find((e) => e.pan === panFromUrl);
    if (entry) {
      const withMeta = entry.gstins.map((g) => ({
        ...g,
        selected: false,
        verificationStatus: "Not Started" as const,
        history: []
      }));
      setGstinList(withMeta);
    }
  }, [location.search]);

  const handleNext = () => {
    const selected = gstinList.find((g) => g.selected);
    if (!selected) {
      alert("Please select a GSTIN before proceeding.");
      return;
    }
    navigate(`/add-customer/documents/intro?pan=${pan}&gstin=${selected.gstin}`);
  };

  const handleExpand = (gstin: string) => {
    setExpanded(prev => (prev === gstin ? null : gstin));
  };

  const handleSelect = (gstin: string) => {
    setGstinList(prev =>
      prev.map(g => g.gstin === gstin ? { ...g, selected: !g.selected } : g)
    );
  };

  const handleTriggerOTP = () => {
    setGstinList(prev =>
      prev.map(g =>
        g.selected
          ? {
              ...g,
              verificationStatus: "In Progress",
              history: [...(g.history || []), `OTP Triggered at ${new Date().toLocaleString()}`]
            }
          : g
      )
    );
    setShowOverlay(true);
  };

  const handleOverlayDismiss = () => setShowOverlay(false);

  const handleDownloadReport = (gstin: string) => {
    const entry = gstinList.find((g) => g.gstin === gstin);
    if (entry?.details) {
      const doc = new jsPDF();
      doc.setFontSize(12);
      doc.text(`GSTIN Report - ${gstin}`, 10, 10);
      let y = 20;
      Object.entries(entry.details).forEach(([key, value]) => {
        const val = Array.isArray(value) ? value.join(", ") : JSON.stringify(value);
        doc.text(`${key}: ${val}`, 10, y);
        y += 10;
      });
      doc.save(`GST_Report_${gstin}.pdf`);
    }
  };

  return (
    <Box className="gstin-screen">
  <Header />
  <Box className="gstin-content">
    <SectionHeaderWithActions headingText="Add New Customer" />

    <Box className="gstin-header-row">
      <Box className="gstin-heading-block">
        <Typography
          className="gstin-heading"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            color: "#2d5497"
          }}
        >
          GSTIN Details
        </Typography>
        <Typography
          className="gstin-subtext"
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: "Poppins, sans-serif",
            color: "#555"
          }}
        >
          *Select all the GSTIN Applicable
        </Typography>
      </Box>

      <Button
        className="trigger-otp-button"
        variant="contained"
        disabled={!gstinList.some(g => g.selected)}
        onClick={handleTriggerOTP}
      >
        Trigger GSTIN OTP
      </Button>
    </Box>


    {gstinList.map((item, index) => (
  <Box key={index} className="gstin-card">
    <Box className="gstin-header">
      <IconButton onClick={() => setSelectedGSTIN(item)}>
        <InfoIcon />
      </IconButton>
      <Box className="gstin-details">
        <Typography className="gstin-text" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{item.gstin}</Typography>
        <Typography className="gstin-location" sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>Location: {item.location}</Typography>
      </Box>
      <Box className="gstin-right-group">
        <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
        <Checkbox checked={item.selected} onChange={() => handleSelect(item.gstin)} />
        <IconButton onClick={() => handleExpand(item.gstin)}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Box>

    <Collapse in={expanded === item.gstin}>
      <Box className="gstin-expanded">
        <Box className="gstin-action-row">
          <Typography className="gstin-status-label" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
            Status: {item.verificationStatus}
          </Typography>
          <IconButton
            className="icon-button active-download"
            disabled={item.verificationStatus !== "Completed"}
            onClick={() => handleDownloadReport(item.gstin)}
          >
            <DownloadIcon />
          </IconButton>
          <Button
            className="history-btn"
            startIcon={<HistoryIcon sx={{ fontSize: 16 }} />}
            onClick={() => setShowHistoryFor(item)}
          >
            History
          </Button>
        </Box>
      </Box>
    </Collapse>
  </Box>
))}

        <Box className="gstin-buttons">
          <Button className="nav-button" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button className="nav-button" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
      <FooterMenuSet />

      <Modal open={showOverlay} onClose={handleOverlayDismiss}>
        <Box className="otp-modal-box">
          <Typography className="otp-message">
            A GST verification link has been sent to the registered mobile number(s).<br />
            We will notify you once verification is complete.
          </Typography>
          <Button variant="contained" onClick={handleOverlayDismiss} fullWidth>OK</Button>
        </Box>
      </Modal>

      <GSTINDetailModal
        open={!!selectedGSTIN}
        onClose={() => setSelectedGSTIN(null)}
        details={selectedGSTIN?.details as GSTDetails}
      />
      {showHistoryFor && (
        <GSTINHistoryModal
          open={!!showHistoryFor}
          onClose={() => setShowHistoryFor(null)}
          history={showHistoryFor.history || []}
        />
      )}
    </Box>
  );
};

export default AddNewCustomerGSTIN;
