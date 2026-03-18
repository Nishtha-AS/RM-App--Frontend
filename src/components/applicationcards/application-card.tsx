// src/components/applicationcards/application-card.tsx

import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import "./application-cards-list.css";

interface ApplicationCardProps {
  name: string;
  ctptId: string;
  appId?: string;
  region?: string;
  modifiedDate?: string;
  status?: string;
  date?: string;
  onClick?: () => void;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const ApplicationCard: FunctionComponent<ApplicationCardProps> = ({
  name,
  ctptId,
  appId,
  region,
  modifiedDate,
  status,
  date,
  onClick,
}) => {
  return (
    <Box className="application-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <Box className="application-card-top">
        <Box className="profile-icon">{getInitials(name)}</Box>

        <Box className="application-details">
          <Box className="field-group">
            <Typography className="label" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
              Counterparty Name
            </Typography>
            <Typography className="value" sx={{ fontSize: "10px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
              {name}
            </Typography>
          </Box>

          <Box className="field-group">
            <Typography className="label" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
              CTPT-ID
            </Typography>
            <Typography className="value" sx={{ fontSize: "10px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
              {ctptId}
            </Typography>
          </Box>

          {appId && (
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                APP-ID
              </Typography>
              <Typography className="value" sx={{ fontSize: "10px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {appId}
              </Typography>
            </Box>
          )}

          {region && (
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                Region
              </Typography>
              <Typography className="value" sx={{ fontSize: "10px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {region}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box className="application-card-bottom">
        <Typography className="modified-date" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
          Date modified: {modifiedDate || date}
        </Typography>
      </Box>
    </Box>
  );
};

export default ApplicationCard;
