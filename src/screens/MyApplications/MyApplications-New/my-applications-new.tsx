import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Box, Typography, Button, IconButton, Menu, MenuItem, Divider, Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import Dropdown from "components/dropdown/dropdown";
import SummaryCard from "components/summarycard/summary-card";
import AccordianOpenSet from "components/accordian/accordian-open-set";

import burgerMenuIcon from "assets/burgermenu.svg";
import recorderIcon from "assets/recorder.svg";
import creditIcon from "assets/credit.svg";
import validationIcon from "assets/validation.svg";
import otherIcon from "assets/other.svg";

import mcaData from "data/MCA-Details.json";
import { StakeholderData } from "components/modals/AddStakeholderModal";

import "./my-applications-new.css";

const MyApplicationsNew: FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pan = searchParams.get("pan");

  const [record, setRecord] = useState<any>(null);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [stakeholderData, setStakeholderData] = useState<StakeholderData[]>([]);
  const openMenu = Boolean(menuAnchor);

  const [stage, setStage] = useState<"idle" | "initiated" | "sent">("idle");
  const [toManager, setToManager] = useState("");
  const [eligibilityDone, setEligibilityDone] = useState(false);
  const [eligibilityScore, setEligibilityScore] = useState<number | null>(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  useEffect(() => {
    if (pan) {
      const matched = mcaData.find((e: any) => e.pan.toUpperCase() === pan.toUpperCase());
      if (matched) {
        setRecord({
          ctptId: `CTPT-${matched.pan.slice(-4)}`,
          pan: matched.pan,
          basic: matched.basic_details,
          financial: matched.financial_info,
          lei: matched.lei_details,
          regulatory: matched.taxation_regulatory,
          shareholders: matched.shareholding_patterns,
          liabilities: matched.charges_liabilities,
          signatories: matched.authorised_signatories,
          litigations: matched.litigation_cases,
          findings: matched.compliance_findings,
        });
      }

      const eligibleFlag = searchParams.get("eligibilityDone");
      const scoreParam = searchParams.get("score");

      if (eligibleFlag === "true") setEligibilityDone(true);
      if (scoreParam && !isNaN(Number(scoreParam))) setEligibilityScore(Number(scoreParam));

      const stakeholdersParam = searchParams.get("stakeholders");
      if (stakeholdersParam) {
        try {
          const parsed = JSON.parse(decodeURIComponent(stakeholdersParam));
          if (Array.isArray(parsed)) {
            setStakeholderData(parsed);
          }
        } catch (err) {
          console.error("Error parsing stakeholders", err);
        }
      }
    }
  }, [pan]);

  const handleInitiate = () => setStage("initiated");
  const handleSend = () => setStage("sent");

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => setMenuAnchor(e.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);
  const navigateTo = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const renderKeyValueTable = (obj: Record<string, any>) => (
    <table className="entity-table-mini">
      <tbody>
        {Object.entries(obj || {}).map(([key, val], i) => (
          <tr key={i}>
            <td style={{ fontWeight: 500 }}>{key}</td>
            <td>{String(val)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderArrayTable = (arr: any[]) => {
    if (!arr || arr.length === 0) return <Typography>No data available.</Typography>;
    return (
      <table className="entity-table-mini">
        <thead>
          <tr>
            {Object.keys(arr[0]).map((key, i) => (
              <th key={i}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {arr.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{String(val)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const mergedShareholders = [
    ...(record?.shareholders || []),
    ...stakeholderData.map((s) => ({
      Shareholder: s.name,
      Type: "Stakeholder",
      Holding: "-"
    }))
  ];

  return (
    <Box className="my-applications-new">
      <Header />
      <Box className="container">
        <Box sx={{ position: "relative" }}>
          <SectionHeaderWithActions headingText="Application 360" />
          <IconButton aria-label="menu" onClick={handleMenuClick} sx={{ position: "absolute", right: 0, top: 4 }}>
            <img src={burgerMenuIcon} alt="Menu" width={20} height={20} />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={openMenu}
            onClose={handleMenuClose}
            PaperProps={{ style: { borderRadius: 16, padding: "8px 0", width: 260 } }}
          >
            <MenuItem onClick={() => navigateTo("/meeting-recordings/new")}>
              <img src={recorderIcon} alt="" width={20} style={{ marginRight: 12 }} />
              <span className="menu-item-text">Meeting Recorder</span>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigateTo("/my-applications/credit-check")}>
              <img src={creditIcon} alt="" width={20} style={{ marginRight: 12 }} />
              <span className="menu-item-text">Credit Checks</span>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigateTo("/my-applications/entity-validation")}>
              <img src={validationIcon} alt="" width={20} style={{ marginRight: 12 }} />
              <span className="menu-item-text">Entity Validation</span>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigateTo("/my-applications/others")}>
              <img src={otherIcon} alt="" width={20} style={{ marginRight: 12 }} />
              <span className="menu-item-text">Others</span>
            </MenuItem>
          </Menu>
        </Box>

        <Typography className="section-title" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif", color: "#2d5497", mt: 2 }}>
          Brief Summary 360
        </Typography>

        {record ? (
          <>
            <SummaryCard
              data={{
                name: record.basic["Company Name"],
                businessUnit: "Mid – Corporate",
                legalStatus: record.basic["Company Type"],
                createdOn: record.basic["Incorporation Date"],
                lastAppCreatedOn: "-",
                status: stage === "sent" ? "Application sent" : "-",
              }}
            />

            {eligibilityDone && (
              <Box sx={{
                background: eligibilityScore !== null && eligibilityScore >= 75
                  ? "#e1f5e9"
                  : eligibilityScore !== null && eligibilityScore >= 60
                  ? "#fff8e1"
                  : "#fdecea",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                color: eligibilityScore !== null && eligibilityScore >= 75
                  ? "#197d4c"
                  : eligibilityScore !== null && eligibilityScore >= 60
                  ? "#b26a00"
                  : "#d92d20",
                mt: 2,
              }}>
                Eligibility Score: {eligibilityScore ?? "N/A"}
              </Box>
            )}

            {!eligibilityDone ? (
              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2, textTransform: "none" }}
                onClick={() => setConfirmDialogOpen(true)}
              >
                Check Eligibility
              </Button>
            ) : stage === "idle" ? (
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, textTransform: "none" }}
                onClick={handleInitiate}
              >
                Initiate
              </Button>
            ) : (
              <Box className="manager-dropdowns" style={{ marginTop: "12px" }}>
                <Dropdown
                  label="Send to Credit Manager"
                  options={["CM-04", "CM-05", "CM-06"]}
                  selectedValue={toManager}
                  onSelect={(val) => setToManager(val)}
                />
                <Button
                  variant="contained"
                  onClick={handleSend}
                  className="send-button"
                  disabled={!toManager}
                  sx={{ mt: 2 }}
                >
                  Send
                </Button>
              </Box>
            )}

            <Box className="accordian-section">
              <AccordianOpenSet title="1. Detailed Customer Data">{renderKeyValueTable(record.basic)}</AccordianOpenSet>
              <AccordianOpenSet title="2. Financial Information">{renderKeyValueTable(record.financial)}</AccordianOpenSet>
              <AccordianOpenSet title="3. Shareholders and Shareholding Patterns">{renderArrayTable(mergedShareholders)}</AccordianOpenSet>
              <AccordianOpenSet title="4. Charges and Liabilities">{renderArrayTable(record.liabilities)}</AccordianOpenSet>
              <AccordianOpenSet title="5. LEI Details">{renderKeyValueTable(record.lei)}</AccordianOpenSet>
              <AccordianOpenSet title="6. Taxation and Regulatory">{renderKeyValueTable(record.regulatory)}</AccordianOpenSet>
              <AccordianOpenSet title="7. Authorised Signatories">{renderArrayTable(record.signatories)}</AccordianOpenSet>
              <AccordianOpenSet title="8. Litigation Cases">{renderArrayTable(record.litigations)}</AccordianOpenSet>
              <AccordianOpenSet title="9. Compliance Findings">{renderArrayTable(record.findings)}</AccordianOpenSet>
            </Box>

            <Dialog open={confirmDialogOpen} onClose={() => setConfirmDialogOpen(false)}>
              <DialogTitle>Confirm Credit Process</DialogTitle>
              <DialogContent>
                Have you completed Credit Check and Entity Validation for this customer?
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setConfirmDialogOpen(false)}>Cancel</Button>
                <Button
                  onClick={() => {
                    setConfirmDialogOpen(false);
                    navigate(`/eligibility-popup/${record.pan}?returnPan=${record.pan}`);
                  }}
                  variant="contained"
                >
                  Yes, Proceed
                </Button>
              </DialogActions>
            </Dialog>
          </>
        ) : (
          <Typography sx={{ mt: 4, fontStyle: "italic", textAlign: "center" }}>
            No customer data found for PAN: {pan}
          </Typography>
        )}
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default MyApplicationsNew;
