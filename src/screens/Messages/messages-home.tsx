import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import HeadingType2WithBackIcon from "components/heading2/heading-type2-with-back-icon";

import "./messages-home.css";

const chats = [
  {
    name: "Raghav Vishnoi",
    preview: "Please update approval status of CTPT-2342",
    date: "19 May 2025",
    count: 2,
  },
  {
    name: "Abhishek Sharma",
    preview: "@ Attachment",
    date: "19 May 2025",
    count: 1,
  },
  {
    name: "Varnika Arora",
    preview: "@ Attachment",
    date: "17 May 2025",
    count: 0,
  },
];

export default function MessagesHome() {
  const navigate = useNavigate();
  const unreadCount = chats.length;

  return (
    <Box className="messages-home-screen">
      <Header />

      <Box className="messages-home-content">
        {/* Integrated heading with back, title, search, sort */}
        <HeadingType2WithBackIcon title="My Messages" />

        {/* Chats label, padded same as search field */}
        <Typography className="messages-subheading" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
          Chats ({chats.length})
        </Typography>

        {/* Chat cards */}
        <Box className="chat-list">
          {chats.map((c, i) => {
            const initials = c.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");
            return (
              <Box
                className="chat-card"
                key={i}
                onClick={() => navigate("/messages/chat")}
              >
                <Box className="avatar">{initials}</Box>
                <Box className="chat-info">
                  <Typography className="chat-name" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
                    {c.name}
                  </Typography>
                  <Typography className="chat-preview" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                    {c.preview}
                  </Typography>
                </Box>
                <Box className="chat-meta">
                  <Typography className="chat-date" sx={{ fontSize: "8px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
                    {c.date}
                  </Typography>
                  {c.count > 0 && (
                    <Box className="unread-count">
                      {c.count}
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box className="new-chat-wrapper">
          <Button
            variant="contained"
            className="new-chat-btn"
            onClick={() => navigate("/messages/chat")}
          >
            New Chat
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
}
