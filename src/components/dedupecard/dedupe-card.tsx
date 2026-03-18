import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "assets/arrowright.svg";
import "./dedupe-card.css";

interface DedupeCardProps {
  initials: string;
  name: string;
  pan: string;
  entityType: string;
  zoneOrRegion: string;
  modifiedDate: string;
  actionLabel: string;
  onActionClick?: () => void;
}

const DedupeCard: React.FC<DedupeCardProps> = ({
  initials,
  name,
  pan,
  entityType,
  zoneOrRegion,
  modifiedDate,
  actionLabel,
  onActionClick,
}) => {
  return (
    <Box className="dedupe-card">
      <Box className="dedupe-profile-circle">{initials}</Box>

      <Box className="dedupe-details">
        <Typography
          className="dedupe-label"
          sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}
        >
          Counterparty Name
        </Typography>

        <Typography
          className="dedupe-value"
          sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}
        >
          {name}
        </Typography>

        <Box className="dedupe-info-row">
          <Typography
            className="dedupe-label"
            sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
          >
            PAN: <span className="dedupe-value">{pan}</span>
          </Typography>

          <Typography
            className="dedupe-label"
            sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
          >
            Entity Type: <span className="dedupe-value">{entityType}</span>
          </Typography>

          <Typography
            className="dedupe-label"
            sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
          >
            Zone / Region: <span className="dedupe-value">{zoneOrRegion}</span>
          </Typography>
        </Box>

        <Box className="dedupe-bottom-row">
          <Typography
            className="dedupe-label"
            sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
          >
            Date Modified: <span className="dedupe-value">{modifiedDate}</span>
          </Typography>

          <Box className="dedupe-link-right" onClick={(e) => {
               e.stopPropagation(); // prevent card click propagation
                onActionClick?.();
                }}>
              <Typography className="dedupe-link" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>{actionLabel}</Typography>
                 <img src={ArrowRightIcon} alt="arrow" />
           </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DedupeCard;
