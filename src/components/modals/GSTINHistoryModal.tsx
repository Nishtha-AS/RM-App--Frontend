import React from "react";
import { Modal, Box, Typography, Button, Divider } from "@mui/material";
import "./GSTINHistoryModal.css";

interface Props {
  open: boolean;
  onClose: () => void;
  history?: string[];
}

const GSTINHistoryModal: React.FC<Props> = ({ open, onClose, history = [] }) => {
  const fallbackHistory = [
    "OTP Triggered",
    "OTP Verified",
    "Report Downloaded",
    "Verification Completed"
  ];

  const displayHistory = history.length > 0 ? history : fallbackHistory;

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="gstin-history-modal-box">
        <Typography className="gstin-history-title">
          GSTIN Verification History
        </Typography>

        {displayHistory.map((item, idx) => (
          <Box key={idx} className="gstin-history-item">
            <Typography className="gstin-history-line">• {item}</Typography>
            <Typography className="gstin-history-timestamp">
              {new Date().toLocaleDateString()} {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </Typography>
            {idx < displayHistory.length - 1 && <Divider sx={{ mt: 1, mb: 1 }} />}
          </Box>
        ))}

        <Button variant="contained" onClick={onClose} fullWidth sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default GSTINHistoryModal;
