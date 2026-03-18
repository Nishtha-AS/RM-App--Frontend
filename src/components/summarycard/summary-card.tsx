import { Box, Typography } from "@mui/material";
import "./summary-card.css";

interface SummaryCardProps {
  data: {
    name: string;
    businessUnit: string;
    legalStatus: string;
    createdOn: string;
    lastAppCreatedOn: string;
    status: string;
  };
}

const SummaryCard: React.FC<SummaryCardProps> = ({ data }) => {
  return (
    <Box className="summary-card">
      <Box className="summary-row">
        <Typography className="summary-label" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Name:</Typography>
        <Typography className="summary-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
          {data.name}
        </Typography>
      </Box>
      <Box className="summary-row">
        <Typography className="summary-label" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Business Unit:</Typography>
        <Typography className="summary-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{data.businessUnit}</Typography>
      </Box>
      <Box className="summary-row">
        <Typography className="summary-label" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Legal Status:</Typography>
        <Typography className="summary-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{data.legalStatus}</Typography>
      </Box>
      <Box className="summary-row">
        <Typography className="summary-label" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Customer Created On:</Typography>
        <Typography className="summary-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{data.createdOn}</Typography>
      </Box>
      <Box className="summary-row">
        <Typography className="summary-label" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Last App Created On:</Typography>
        <Typography className="summary-value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>{data.lastAppCreatedOn}</Typography>
      </Box>
      <Box className="summary-row">
        <Typography className="summary-label" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Application Status:</Typography>
        <Typography className="summary-value status-red" sx={{ fontSize: "12px", fontWeight: 600, color: "#e60000", fontFamily: "Poppins, sans-serif" }}>{data.status}</Typography>
      </Box>
    </Box>
  );
};

export default SummaryCard;
