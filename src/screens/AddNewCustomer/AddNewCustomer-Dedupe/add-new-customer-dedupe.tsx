import { FunctionComponent, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import DedupeCard from "components/dedupecard/dedupe-card";
import AlertIcon from "assets/alertcircle.svg";
import { useNavigate, useLocation } from "react-router-dom";

import panDetails from "data/pan-details.json";
import dedupeData from "data/dedupe.json";
import gstData from "data/gst-handling.json";

import "./add-new-customer-dedupe.css";

const AddNewCustomerDedupe: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dedupeMatches, setDedupeMatches] = useState<any[]>([]);
  const [draftEntry, setDraftEntry] = useState<any | null>(null);
  const [pan, setPan] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const panParam = params.get("pan")?.toUpperCase() || "";
    setPan(panParam);

    const panEntry = panDetails.find((entry) => entry.pan.toUpperCase() === panParam);
    if (!panEntry) return;

    // Get dedupe matches
    if (panEntry.dedupeIds) {
      const dedupeIds = panEntry.dedupeIds.split(",");
      const matches = dedupeIds
        .map((id) => dedupeData.find((d) => d.matchId === id))
        .filter(Boolean);
      setDedupeMatches(matches as any[]);
    }

    // Get draft entry
    if (panEntry.draftId) {
      const draft = dedupeData.find((d) => d.matchId === panEntry.draftId);
      if (draft) setDraftEntry(draft);
    }
  }, [location.search]);

  const handleNext = () => {
    const gstEntry = gstData.find((entry) => entry.PAN.toUpperCase() === pan);
    if (gstEntry?.["GSTIN Status"] === "FOUND") {
      navigate(`/add-customer/gstin?pan=${pan}`);
    } else {
      navigate(`/add-customer/gst-not-found?pan=${pan}`);
    }
  };

  return (
    <Box className="add-new-customer-dedupe">
      <Header />

      <Box className="dedupe-container">
        <SectionHeaderWithActions headingText="Add New Customer" hideBackIcon={false} />

        {/* Dedupe Matches Section */}
        {dedupeMatches.length > 0 && (
          <>
            <Typography className="section-heading" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
              Dedupe - Existing Matches
            </Typography>

            {dedupeMatches.map((entry, index) => (
              <DedupeCard
                key={index}
                initials={entry.initials}
                name={entry.name}
                pan={entry.pan}
                entityType={entry.entityType}
                zoneOrRegion={entry.zoneOrRegion}
                modifiedDate={new Date(entry.modifiedDate).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
                actionLabel="View More Details"
                onActionClick={() => navigate(`/add-customer/dedupe-detail?pan=${entry.pan}&dedupeId=${entry.matchId}`)}
              />
            ))}

            <Box className="alert-box red">
              <img src={AlertIcon} alt="!" />
              <Typography className="alert-text" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                Matching Customer Found!
              </Typography>
            </Box>
          </>
        )}

        {/* Drafts Section */}
        {draftEntry && (
          <>
            <Typography className="section-heading" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
              Drafts
            </Typography>

            <DedupeCard
              initials={draftEntry.initials}
              name={draftEntry.name}
              pan={draftEntry.pan}
              entityType={draftEntry.entityType}
              zoneOrRegion={draftEntry.zoneOrRegion}
              modifiedDate={new Date(draftEntry.modifiedDate).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
              actionLabel="Resume Editing"
              onActionClick={() => navigate(`/add-customer/dedupe-detail?pan=${draftEntry.pan}&dedupeId=${draftEntry.matchId}`)}
            />

            <Box className="alert-box orange">
              <img src={AlertIcon} alt="!" />
              <Typography className="alert-text" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
                Draft Found!
              </Typography>
            </Box>
          </>
        )}

        {/* Navigation Buttons */}
        <Box className="button-row">
          <Button className="nav-button" variant="contained" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button className="nav-button" variant="contained" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default AddNewCustomerDedupe;
