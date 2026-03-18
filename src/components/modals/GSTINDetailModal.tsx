import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";
import "./GSTINDetailModal.css";

/* Exportable type for reuse */
export interface HSNEntry {
  hsn: string;
  description: string;
}

export interface FilingFrequency {
  [year: string]: {
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
  };
}

export interface GSTDetails {
  legal_name: string;
  trade_name: string;
  registration_date: string;
  constitution: string;
  gst_status: string;
  taxpayer_type: string;
  aadhaar_auth: string;
  ekyc: string;
  core_business_activity: string;
  other_business_activities: string[];
  hsn_goods: HSNEntry[];
  filing_frequency: FilingFrequency;
}

interface GSTINDetailModalProps {
  open: boolean;
  onClose: () => void;
  details: GSTDetails | null;
}

const GSTINDetailModal: React.FC<GSTINDetailModalProps> = ({
  open,
  onClose,
  details
}) => {
  if (!details) return null;

  const summaryData = [
    ["Legal Name", details.legal_name || "—"],
    ["Trade Name", details.trade_name || "—"],
    ["Registration Date", details.registration_date || "—"],
    ["Constitution", details.constitution || "—"],
    ["GST Status", details.gst_status || "—"],
    ["Taxpayer Type", details.taxpayer_type || "—"],
    ["Aadhaar Authenticated", details.aadhaar_auth || "—"],
    ["e-KYC Verified", details.ekyc || "—"],
    ["Core Business Activity", details.core_business_activity || "—"],
    [
      "Other Business Activities",
      details.other_business_activities?.length
        ? details.other_business_activities.join(", ")
        : "—"
    ]
  ];

  const filingFreq = details.filing_frequency?.["2025-26"] || {};

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="gstin-popup-overlay">
        <Box className="gstin-modal-box">
          <Typography className="gstin-modal-header">
            GSTIN Detailed Information
          </Typography>

          {/* Summary Table */}
          <Box className="gstin-modal-section">
            <Table className="gstin-detail-table">
              <TableBody>
                {summaryData.map(([label, value], index) => (
                  <TableRow key={index}>
                    <TableCell className="label-cell">{label}</TableCell>
                    <TableCell className="value-cell">{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          {/* HSN Goods */}
          {details.hsn_goods?.length > 0 && (
            <Box className="gstin-modal-section">
              <Typography className="section-heading">HSN Goods</Typography>
              <Table className="gstin-detail-table">
                <TableBody>
                  {details.hsn_goods.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="label-cell">{item.hsn}</TableCell>
                      <TableCell className="value-cell">{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}

          {/* Filing Frequency */}
          {Object.keys(filingFreq).length > 0 && (
            <Box className="gstin-modal-section">
              <Typography className="section-heading">
                Filing Frequency (2025-26)
              </Typography>
              <Table className="gstin-detail-table">
                <TableBody>
                  {Object.entries(filingFreq).map(([quarter, freq], idx) => (
                    <TableRow key={idx}>
                      <TableCell className="label-cell">{quarter}</TableCell>
                      <TableCell className="value-cell">{freq}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}

          <Button onClick={onClose} variant="contained" fullWidth sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default GSTINDetailModal;
