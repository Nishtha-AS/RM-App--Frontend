import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import checkIcon from "assets/success-check.png";
import "./customer-success.css";

const CustomerSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const pan = searchParams.get("pan") || "";
  const gstin = searchParams.get("gstin") || "";

  const ctptMap: Record<string, string> = {
    "AABCR0455M": "CTPT-1441",
    "AAECN2319Q": "CTPT-2662",
    "AADFD8342N": "CTPT-3553",
    "AACFM8823K": "CTPT-4674",
  };

  const ctptId = ctptMap[pan.toUpperCase()] || "CTPT-0000";

  const handleProceed = () => {
    navigate(`/applications/new?pan=${pan}&gstin=${gstin}&ctpt=${ctptId}`);
  };

  return (
    <Box className="success-screen">
      <Box className="success-content">
        <img src={checkIcon} alt="Success" className="success-animation" />
        <Typography className="success-text">
          Customer Created Successfully!
        </Typography>
        <Typography className="ctpt-id-text">
          CTPT ID: <strong>{ctptId}</strong>
        </Typography>
        <Button
          className="success-button"
          onClick={handleProceed}
        >
          Proceed to Application 360
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerSuccess;
