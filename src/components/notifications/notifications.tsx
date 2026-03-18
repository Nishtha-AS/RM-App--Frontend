import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import "./notifications.css";

// Type definition for notifications
interface NotificationItem {
  id: number;
  senderInitials: string;
  message: string;
  timestamp: string;
  status: "Opened" | "Unread";
}

const Notifications = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 1,
      senderInitials: "PS",
      message: "RK Enterprises (CTPT-XXXX) has been approved by committee",
      timestamp: "2:00 pm, 19 Feb 2025",
      status: "Opened",
    },
    {
      id: 2,
      senderInitials: "HT",
      message: "Login acceptance has been done for Sagarmatha Enterprises (CTPT-XXXX)",
      timestamp: "2:00 pm, 19 Feb 2025",
      status: "Unread",
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);

  const handleNotificationClick = (notif: NotificationItem) => {
    setSelectedMessage(notif.message);
    if (notif.status === "Unread") {
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === notif.id ? { ...n, status: "Opened" } : n
        )
      );
    }
  };

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  return (
    <Box className="notifications-screen">
      {/* Header */}
      <Box className="notifications-header">
        <IconButton onClick={() => navigate("/home")}>
          <ArrowBackIcon style={{ color: "#2d5497" }} />
        </IconButton>
        <Typography className="notifications-title">Notifications</Typography>
        <IconButton onClick={handleSettingsClick}>
          <SettingsIcon style={{ color: "#2d5497" }} />
        </IconButton>
        <Menu
          anchorEl={settingsAnchorEl}
          open={Boolean(settingsAnchorEl)}
          onClose={handleSettingsClose}
        >
          <MenuItem onClick={() => alert("Muted Notifications")}>Mute</MenuItem>
          <MenuItem onClick={() => alert("Showing most recent")}>Show Most Recent</MenuItem>
          <MenuItem onClick={() => {
            setNotifications((prev) => prev.filter((n) => n.status === "Unread"));
            handleSettingsClose();
          }}>
            Show All Unopened
          </MenuItem>
        </Menu>
      </Box>

      {/* Notification List */}
      <Box className="notifications-list">
        {notifications.map((notif) => (
          <Box
            key={notif.id}
            className={`notification-item ${notif.status.toLowerCase()}`}
            onClick={() => handleNotificationClick(notif)}
            style={{ cursor: "pointer" }}
          >
            <Box className="initials-badge">{notif.senderInitials}</Box>
            <Box className="message-box">
              <Typography className="message-text">{notif.message}</Typography>
              <Typography className="timestamp">{notif.timestamp}</Typography>
              <Typography className="status-label">{notif.status}</Typography>
            </Box>
          </Box>
        ))}

        {notifications.length > 0 && (
          <Typography
            className="clear-all"
            onClick={() => setNotifications([])}
          >
            Clear All
          </Typography>
        )}
      </Box>

      {/* Message Dialog */}
      <Dialog open={!!selectedMessage} onClose={() => setSelectedMessage(null)}>
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <Typography>{selectedMessage}</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Notifications;
