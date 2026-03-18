import { FunctionComponent, useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import InputField from "components/input/input-set";
import Dropdown from "components/dropdown/dropdown";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import panDetails from "data/pan-details.json";
import gstData from "data/gst-handling.json";
import "./add-new-customer-pan-details.css";

const AddNewCustomerPanDetails: FunctionComponent = () => {
  const navigate = useNavigate();
  const [panName, setPanName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [entityType, setEntityType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [popupButtonText, setPopupButtonText] = useState("");

  const handleNextClick = () => {
    const inputPAN = panNumber.trim().toUpperCase();
    const inputName = panName.trim().toLowerCase();
    const inputEntity = entityType.trim().toLowerCase();

    const matchedPAN = panDetails.find(
      (entry) => entry.pan.toUpperCase() === inputPAN
    );

    if (!matchedPAN) {
      setPopupTitle("Invalid PAN Entered");
      setPopupMessage("Invalid PAN entered. Please check and try again.");
      setPopupButtonText("Retry");
      setShowPopup(true);
      return;
    }

    const isExactMatch =
      matchedPAN.name.trim().toLowerCase() === inputName &&
      matchedPAN.entityType.trim().toLowerCase() === inputEntity;

      if (isExactMatch) {
        const resultType = matchedPAN.resultType?.toUpperCase() || "";
        if (resultType.includes("DEDUPE") || resultType.includes("DRAFT")) {
          navigate(`/add-customer/dedupe?pan=${inputPAN}`);
        } else {
          setPopupTitle("Let’s Get You Started!");
          setPopupMessage(
            "We did not find any matches linked to the input PAN in our database."
          );
          setPopupButtonText("Create NTB Customer");
          setShowPopup(true);
        }
      } else {
        setPopupTitle("Let’s Get You Started!");
        setPopupMessage(
          "We did not find any matches linked to the input PAN in our database."
        );
        setPopupButtonText("Create NTB Customer");
        setShowPopup(true);
      } 
    };     

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupButtonClick = () => {
    const inputPAN = panNumber.trim().toUpperCase();
    const gstEntry = gstData.find((entry) => entry.PAN.toUpperCase() === inputPAN);
    if (popupButtonText === "Retry") {
      handlePopupClose();
    } else if (gstEntry?.["GSTIN Status"] === "FOUND") {
      navigate(`/add-customer/gstin?pan=${inputPAN}`);
    } else {
      navigate(`/add-customer/gst-not-found?pan=${inputPAN}`);
    }
  };

  return (
    <Box className="add-new-customer-pan-details">
      <Header />
      <Box sx={{ px: 3, width: "100%", boxSizing: "border-box", flex: 1 }}>
        <Box className="section-header-spacing">
          <SectionHeaderWithActions headingText="Add New Customer" />
        </Box>

        <Box className="pan-heading-section" sx={{ mt: 2 }}>
          <div className="pan-title">PAN Verification</div>
          <div className="pan-subtitle">
            All <span className="mandatory">*</span> fields are mandatory
          </div>
        </Box>

        <Box
          className="pan-form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <InputField
            label="Name as per PAN"
            required
            placeholder="Enter name"
            value={panName}
            onChange={(e) => setPanName(e.target.value)}
          />
          <InputField
            label="PAN Number"
            required
            placeholder="Enter PAN number"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
          />
          <Dropdown
  label="Entity Type"
  options={[
    "Public Limited",
    "Private Limited",
    "LLP",
    "Proprietorship",
    "Partnership",
    "One Person Company",
    "Trust",
    "Society",
    "Hindu Undivided Family",
    "Cooperative Society",
    "Government Department",
    "Association of Persons",
  ]}
  onSelect={(val) => setEntityType(val)}
  selectedValue={entityType}
/>

        </Box>

        <Box className="pan-button" sx={{ mt: 4, mb: 3 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleNextClick}
            sx={{
              backgroundColor: "#2d5497",
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "8px",
              padding: "10px 0",
              fontFamily: "Poppins, sans-serif",
              textTransform: "none",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>

      <Modal open={showPopup} onClose={handlePopupClose}>
        <Box className="popup-overlay">
          <Box className="popup-box">
            <Box className="popup-header">
              <InfoIcon sx={{ marginRight: 1 }} />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff",
                }}
              >
                {popupTitle}
              </Typography>
            </Box>
            <Box className="popup-content">
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                {popupMessage}
              </Typography>
              <Button
                onClick={handlePopupButtonClick}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#2d5497",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "13px",
                  borderRadius: "8px",
                  padding: "10px 0",
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "none",
                }}
              >
                {popupButtonText}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <FooterMenuSet />
    </Box>
  );
};

export default AddNewCustomerPanDetails;
