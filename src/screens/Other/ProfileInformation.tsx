import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  SelectChangeEvent,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

import editIcon from "assets/edit3.svg";
import "./ProfileInformation.css";

interface FormState {
  userId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  contact: string;
  location: string;
  department: string;
  employeeId: string;
  designation: string;
  regions: string;
  landingScreen: string;
  isMancom: boolean;
  statusActive: boolean;
  statusInactive: boolean;
  statusBlocked: boolean;
  statusMobile: boolean;
}

const ProfileInformation: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    userId: "130422",
    firstName: "Ashley",
    middleName: "",
    lastName: "Simpson",
    email: "ashleysim@gmail.com",
    contact: "+91 99979 52660",
    location: "",
    department: "",
    employeeId: "EMP-130422",
    designation: "",
    regions: "",
    landingScreen: "",
    isMancom: false,
    statusActive: true,
    statusInactive: false,
    statusBlocked: false,
    statusMobile: false,
  });

  // TextField handler
  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Select handler
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Checkbox handler
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((f) => ({ ...f, [name]: checked }));
  };

  return (
    <Box className="profile-page">
      {/* Custom header with back button */}
      <Box className="profile-header-bar">
        <IconButton
          size="small"
          onClick={() => navigate(-1)}
          className="back-btn"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography className="header-title">
          Account &gt; Profile Information
        </Typography>
      </Box>

      <Box className="profile-content">
        {/* Avatar + Name + Edit */}
        <Box className="profile-header">
          <Box className="profile-avatar">AS</Box>
          <Typography className="profile-name">Ashley Simpson</Typography>
          <IconButton className="edit-btn" size="small">
            <img src={editIcon} alt="Edit Profile" />
            <Typography className="edit-text">Edit Profile</Typography>
          </IconButton>
        </Box>

        {/* All fields */}
        <Box className="fields">
          {[
            {
              label: "User ID:",
              name: "userId",
              value: form.userId,
              disabled: true,
            },
            {
              label: "First Name:",
              name: "firstName",
              value: form.firstName,
            },
            {
              label: "Middle Name:",
              name: "middleName",
              value: form.middleName,
            },
            {
              label: "Last Name:",
              name: "lastName",
              value: form.lastName,
            },
            {
              label: "Email Address:",
              name: "email",
              value: form.email,
            },
            {
              label: "Contact No.:",
              name: "contact",
              value: form.contact,
            },
            {
              label: "Location:",
              name: "location",
              select: true,
              value: form.location,
            },
            {
              label: "Department:",
              name: "department",
              select: true,
              value: form.department,
            },
            {
              label: "Employee ID:",
              name: "employeeId",
              value: form.employeeId,
            },
            {
              label: "Designation:",
              name: "designation",
              value: form.designation,
            },
            {
              label: "Regions:",
              name: "regions",
              value: form.regions,
            },
            {
              label: "Landing Screen:",
              name: "landingScreen",
              select: true,
              value: form.landingScreen,
            },
          ].map((fld) => (
            <Box key={fld.name} className="field-row">
              <Typography className="field-label">{fld.label}</Typography>
              {fld.select ? (
                <FormControl size="small" className="field-input">
                  <InputLabel>&nbsp;</InputLabel>
                  <Select
                    name={fld.name}
                    value={fld.value}
                    onChange={handleSelectChange}
                    displayEmpty
                  >
                    <MenuItem value="">
                      – select –
                    </MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  name={fld.name}
                  value={fld.value}
                  onChange={handleFieldChange}
                  variant="outlined"
                  size="small"
                  disabled={fld.disabled}
                  className="field-input"
                />
              )}
            </Box>
          ))}

          {/* Is Mancom Member */}
          <Box className="field-row">
            <Typography className="field-label">
              Is Mancom Member?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  name="isMancom"
                  checked={form.isMancom}
                  onChange={handleCheckboxChange}
                />
              }
              label=""
            />
          </Box>

          {/* Status */}
          <Box className="field-row">
            <Typography className="field-label">Status:</Typography>
            <Box className="status-group">
              <FormControlLabel
                control={
                  <Checkbox
                    name="statusActive"
                    checked={form.statusActive}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Active"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="statusInactive"
                    checked={form.statusInactive}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Inactive"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="statusBlocked"
                    checked={form.statusBlocked}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Is-Blocked"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="statusMobile"
                    checked={form.statusMobile}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Mobile Login"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileInformation;
