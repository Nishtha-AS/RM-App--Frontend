import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./AddStakeholderModal.css";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: StakeholderData) => void;
}

export interface StakeholderData {
    name: string;
    pan: string;
    mobile: string;
    email: string;
    gender: string;
    dob: string;
    address: string;
  }

const AddStakeholderModal: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<StakeholderData>({
    name: "",
    pan: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    address: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      name: "",
      pan: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      address: ""
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="add-stakeholder-modal">
        <Box className="modal-header">
          <Typography className="modal-title">Add New Stakeholder</Typography>
          <IconButton onClick={onClose} className="modal-close">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box className="modal-body">
          <Box className="form-group">
            <TextField name="name" label="Full Name" value={formData.name} onChange={handleChange} fullWidth required />
          </Box>
          <Box className="form-row">
            <TextField name="pan" label="PAN" value={formData.pan} onChange={handleChange} fullWidth inputProps={{ maxLength: 10 }} />
          </Box>
          <Box className="form-row">
            <TextField name="mobile" label="Mobile Number" value={formData.mobile} onChange={handleChange} fullWidth inputProps={{ maxLength: 10 }} />
          </Box>
          <Box className="form-row">
            <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth />
          </Box>
          <Box className="form-row">
            <TextField name="gender" label="Gender" value={formData.gender} onChange={handleChange} fullWidth />
          </Box>
          <Box className="form-row">
            <TextField name="dob" label="Date of Birth" value={formData.dob} onChange={handleChange} fullWidth />
          </Box>
          <Box className="form-row">
            <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth multiline rows={2} />
          </Box>
        </Box>

        <Button variant="contained" className="modal-submit" onClick={handleSubmit} fullWidth>
          Save Stakeholder
        </Button>
      </Box>
    </Modal>
  );
};

export default AddStakeholderModal;
