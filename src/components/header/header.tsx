import React, { FC, useState, MouseEvent } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

import "./header.css";

import logo from "assets/as-logo@2x.png";
import bellIcon from "assets/bell.svg";
import profileIcon from "assets/profile.svg";
import aboutIcon from "assets/about.svg";
import privacyIcon from "assets/privacy.svg";
import logoutIcon from "assets/logout.svg";

const Header: FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="header-container">
      <Box className="header-content">
        {/* Branding */}
        <Box className="branding">
          <img src={logo} alt="AS Logo" className="main-logo" />
          <Box className="partner-bank-logo">
            <Box className="vertical-line" />
            <Typography className="bank-text">Bank Logo</Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box className="actions">
          {/* Notification */}
          <IconButton
            className="notification-btn"
            onClick={() => navigate("/notifications")}
            size="small"
          >
            <Box className="notification-bg">
              <img src={bellIcon} alt="Bell" className="bell-icon" />
              <Box className="red-dot" />
            </Box>
          </IconButton>

          {/* Avatar + dropdown */}
          <IconButton
            className="avatar-btn"
            onClick={handleAvatarClick}
            size="small"
          >
            <Box className="avatar-bg">
              <Typography className="avatar-text">AS</Typography>
            </Box>
            <ExpandMoreIcon className="avatar-arrow" />
          </IconButton>

          {/* Avatar menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            MenuListProps={{ disablePadding: true }}
          >
            <MenuItem
              onClick={() => {
                navigate("/account/profile");
                handleClose();
              }}
            >
              <ListItemIcon>
                <img
                  src={profileIcon}
                  alt="Profile"
                  className="menu-item-icon"
                />
              </ListItemIcon>
              <ListItemText>Profile Information</ListItemText>
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/account/about-us");
                handleClose();
              }}
            >
              <ListItemIcon>
                <img
                  src={aboutIcon}
                  alt="About Us"
                  className="menu-item-icon"
                />
              </ListItemIcon>
              <ListItemText>About Us</ListItemText>
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/account/privacy-policy");
                handleClose();
              }}
            >
              <ListItemIcon>
                <img
                  src={privacyIcon}
                  alt="Privacy"
                  className="menu-item-icon"
                />
              </ListItemIcon>
              <ListItemText>Privacy Policy</ListItemText>
            </MenuItem>

            <Divider />

            <MenuItem
              onClick={() => {
                navigate("/login");
                handleClose();
              }}
            >
              <ListItemIcon>
                <img
                  src={logoutIcon}
                  alt="Logout"
                  className="menu-item-icon"
                />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
