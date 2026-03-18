import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import "./profile-section.css";

// ✅ Import assets
import profileImage from "assets/image@2x.png";
import editIcon from "assets/edit3.svg";

const ProfileSection: FunctionComponent = () => {
  return (
    <Box className="profile-section">
      <Box className="profile-info">
        <img className="profile-pic" alt="Profile" src={profileImage} />
        <Box className="profile-text">
          <Typography className="profile-name" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>Ashley Simpson</Typography>
          <Typography className="profile-role" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Relationship Manager</Typography>
        </Box>
      </Box>
      <Box className="edit-profile">
        <img className="edit-icon" alt="Edit Profile" src={editIcon} />
        <Typography className="edit-text" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Edit Profile</Typography>
      </Box>
    </Box>
  );
};

export default ProfileSection;
