import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";        // ← import
import "./button2-set.css";

import formIcon from "assets/Application.svg";
import checkIcon from "assets/Eligibility.svg";
import frameIcon from "assets/frame-36206.svg";

type Props = {
  onMyApplicationsClick?: () => void;
  onMeetingRecordingsClick?: () => void; 
  onMyMessagesClick?: () => void;
};

const Button2Set: FunctionComponent<Props> = ({
  onMyApplicationsClick,
  onMeetingRecordingsClick,
  onMyMessagesClick,
}) => {
  const navigate = useNavigate();                       // ← hook

  const cards = [
    {
      icon: formIcon,
      title: "My Applications",
      subtitle: "59 Active",
      onClick: onMyApplicationsClick,
    },
    {
      icon: checkIcon,
      title: "Eligibility Check",
      subtitle: "20 Records",
      // override to navigate to /eligibility
      onClick: () => navigate("/eligibility"),
    },
    {
      icon: frameIcon,
      title: "My Notes",
      subtitle: "5 Notes",
      onClick: () => navigate("/my-notes"),
    },
  ];

  return (
    <Box className="button2-set">
      {cards.map((card, index) => (
        <Box
          key={index}
          className="button-card"
          onClick={card.onClick}
          style={{ cursor: card.onClick ? "pointer" : "default" }}
        >
          <Box className="button-icon">
            <img src={card.icon} alt={card.title} />
          </Box>
          <Box className="button-info">
            <Typography
              className="button-title"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {card.title}
            </Typography>
            {card.subtitle && (
              <Typography
                className="button-subtitle"
                sx={{
                  fontSize: "10px",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {card.subtitle}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Button2Set;
