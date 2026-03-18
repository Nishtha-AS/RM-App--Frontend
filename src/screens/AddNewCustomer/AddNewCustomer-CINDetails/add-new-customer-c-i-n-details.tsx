import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import cinData from "data/cinllpin-_status.json";
import "./add-new-customer-c-i-n-details.css";

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

const AddNewCustomerCINDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pan, setPan] = useState("");
  const [counterpartyName, setCounterpartyName] = useState("");
  const [gstin, setGSTIN] = useState("");
  const [cin, setCIN] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const panParam = params.get("pan")?.toUpperCase() || "";
    const gstinParam = params.get("gstin") || "";

    setPan(panParam);
    setGSTIN(gstinParam);

    const entry = (cinData as unknown as CINRecord[]).find(
      (e) => e.pan?.toUpperCase() === panParam
    );

    if (entry) {
      setCounterpartyName(entry.name || "");
      setCIN(entry.cin || "");
    }
  }, [location.search]);

  return (
    <Box className="cin-details-screen">
      <Header />

      <Box className="cin-details-content">
        <SectionHeaderWithActions headingText="Add New Customer" />

        <Typography className="cin-heading" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
          CIN Details
        </Typography>
        <Typography className="cin-subheading" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
          Your CIN details are:
        </Typography>

        <Box className="cin-card">
          <Box className="profile-icon">
            {counterpartyName ? counterpartyName.slice(0, 2).toUpperCase() : "NA"}
          </Box>
          <Box className="cin-fields">
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                Counterparty Name
              </Typography>
              <Typography className="value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {counterpartyName || "Not Available"}
              </Typography>
            </Box>
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                GSTIN:
              </Typography>
              <Typography className="value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {gstin || "Not Available"}
              </Typography>
            </Box>
            <Box className="field-group">
              <Typography className="label" sx={{ fontSize: "10px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                CIN:
              </Typography>
              <Typography className="value" sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                {cin || "Not Available"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="cin-buttons">
          <Button className="nav-button" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button className="nav-button" onClick={() => navigate(`/add-customer/mca?pan=${pan}&gstin=${gstin}`)}>
            Next
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default AddNewCustomerCINDetails;
