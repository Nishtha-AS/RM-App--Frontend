import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import cinData from "data/cinllpin-_status.json";
import "./add-new-customer-l-l-p-i-n-details.css";

interface CINRecord {
  pan: string;
  name: string;
  entityType: string;
  cin_status: string;
  cin: string | null;
  llpin: string | null;
  manual_type: string;
  manual_input: string;
  gstin: string;
}

const AddNewCustomerLLPINDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [counterpartyName, setCounterpartyName] = useState("");
  const [gstin, setGstin] = useState("");
  const [llpin, setLlpin] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pan = params.get("pan")?.toUpperCase() || "";

    const entry = (cinData as unknown as CINRecord[]).find(e => e.pan?.toUpperCase() === pan);
    if (entry) {
      setCounterpartyName(entry.name || "");
      setGstin(entry.gstin || "");
      setLlpin(entry.llpin || "");
    }
  }, [location.search]);

  return (
    <Box className="llpin-details-screen">
      <Header />

      <Box className="llpin-details-content">
        <SectionHeaderWithActions headingText="Add New Customer" />

        <Typography className="llpin-heading" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
          LLPIN Details
        </Typography>
        <Typography className="llpin-subheading" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
          Your LLPIN details are:
        </Typography>

        <Box className="llpin-card">
          <Box className="profile-icon">{counterpartyName ? counterpartyName.slice(0, 2).toUpperCase() : "NA"}</Box>
          <Box className="llpin-fields">
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                Counterparty Name
              </Typography>
              <Typography className="value" sx={{ fontSize: "10px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {counterpartyName || "Not Available"}
              </Typography>
            </Box>
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                GSTIN:
              </Typography>
              <Typography className="value" sx={{ fontSize: "10px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {gstin || "Not Available"}
              </Typography>
            </Box>
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "8px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                LLPIN:
              </Typography>
              <Typography className="value" sx={{ fontSize: "10px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {llpin || "Not Available"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="llpin-buttons">
          <Button className="nav-button" onClick={() => navigate(-1)}>Back</Button>
          <Button className="nav-button" onClick={() => navigate(`/add-customer/mca?pan=${location.search.split("=")[1]}`)}>Next</Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default AddNewCustomerLLPINDetails;
