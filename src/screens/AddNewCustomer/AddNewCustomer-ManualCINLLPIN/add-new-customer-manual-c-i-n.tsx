import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import FooterMenu from "components/footermenu/footer-menu-set";
import Loader from "components/loader/loader";
import "./add-new-customer-manual-c-i-n.css";
import { useNavigate, useLocation } from "react-router-dom";

const AddNewCustomerManualCIN = () => {
  const [selectedType, setSelectedType] = useState<"CIN" | "LLPIN">("CIN");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      const pan = new URLSearchParams(location.search).get("pan");
      navigate(`/add-customer/mca?pan=${pan}`);
    }, 2000);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Box className="manual-cin-wrapper">
        <Header />
        <Box className="section-header-wrapper">
          <SectionHeaderWithActions headingText="Add New Customer" />
        </Box>

        <Box className="cin-content">
          <Box className="heading-container">
            <Typography className="main-heading" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
              CIN/ LLPIN Details
            </Typography>
            <Typography className="sub-heading" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
              We couldn't find a registered CIN (Corporate Identification Number) / LLPIN (Limited Liability Partnership Identification Number) for the entered details.
            </Typography>
          </Box>

          <Typography className="cin-toggle-label" sx={{ fontSize: "14px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
            Manually provide your CIN/LLPIN to proceed:
          </Typography>

          <Box className="cin-toggle-wrapper">
            <Button
              variant={selectedType === "CIN" ? "contained" : "outlined"}
              className={selectedType === "CIN" ? "toggle-btn selected" : "toggle-btn"}
              onClick={() => setSelectedType("CIN")}
            >
              CIN
            </Button>
            <Button
              variant={selectedType === "LLPIN" ? "contained" : "outlined"}
              className={selectedType === "LLPIN" ? "toggle-btn selected" : "toggle-btn"}
              onClick={() => setSelectedType("LLPIN")}
            >
              LLPIN
            </Button>
          </Box>

          <Box className="cin-input-group">
            <Typography className="input-label" sx={{ fontSize: "11px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
              Enter your {selectedType}:
            </Typography>
            <TextField
              placeholder="Enter Input Text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="custom-input"
              fullWidth
              variant="outlined"
              InputProps={{
                style: {
                  borderColor: "#2D5497",
                },
              }}
            />
          </Box>

          <Box className="cin-buttons">
            <Button className="nav-button" onClick={() => navigate("/add-customer/gst-not-found")}>Back</Button>
            <Button className="nav-button" onClick={handleNext}>Next</Button>
          </Box>
        </Box>

        <FooterMenu />
      </Box>
    </>
  );
};

export default AddNewCustomerManualCIN;
