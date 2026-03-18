// src/screens/MyApplications/MyApplications-Summary/my-applications-summary.tsx

import React, { useEffect, useState } from "react";
import {
  Box, Typography, IconButton, Menu, MenuItem, Divider, Table, TableHead,
  TableRow, TableCell, TableBody
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import SummaryCard from "components/summarycard/summary-card";
import AccordianOpenSet from "components/accordian/accordian-open-set";

import burgerMenuIcon from "assets/burgermenu.svg";
import recorderIcon from "assets/recorder.svg";
import creditIcon from "assets/credit.svg";
import validationIcon from "assets/validation.svg";
import approvalsIcon from "assets/checkcircle.svg";
import otherIcon from "assets/other.svg";

import mcaData from "data/MCA-Details.json";
import "./my-applications-summary.css";

const MyApplicationsSummary: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pan = searchParams.get("pan");

  const [record, setRecord] = useState<any>(null);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const openMenu = Boolean(menuAnchor);

  useEffect(() => {
    if (pan) {
      const matched = mcaData.find((e: any) => e.pan.toUpperCase() === pan.toUpperCase());
      if (matched) {
        setRecord({
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
    }
  }, [pan]);

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => setMenuAnchor(e.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);
  const navigateTo = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const renderKeyValueTable = (obj: Record<string, any>) => (
    <Table size="small">
      <TableBody>
        {Object.entries(obj || {}).map(([key, val], i) => (
          <TableRow key={i}>
            <TableCell sx={{ fontWeight: 500 }}>{key}</TableCell>
            <TableCell>{String(val)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderArrayTable = (arr: any[]) => {
    if (!arr || arr.length === 0) return <Typography>No data available.</Typography>;

    return (
      <Table size="small">
        <TableHead>
          <TableRow>
            {Object.keys(arr[0]).map((key, i) => (
              <TableCell key={i} sx={{ fontWeight: 600 }}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row, idx) => (
            <TableRow key={idx}>
              {Object.values(row).map((val, j) => (
                <TableCell key={j}>{String(val)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <Box className="my-applications-summary-screen">
      <Header />

      <Box className="content-wrapper">
        {/* Section Header + Burger Menu */}
        <Box sx={{ position: "relative" }}>
          <SectionHeaderWithActions headingText="Application Summary" />
          <IconButton
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ position: "absolute", right: 0, top: 4 }}
          >
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

        {record ? (
          <>
            <SummaryCard
              data={{
                name: record.basic["Company Name"],
                businessUnit: "Mid – Corporate",
                legalStatus: record.basic["Company Type"],
                createdOn: record.basic["Incorporation Date"],
                lastAppCreatedOn: "-",
                status: "Application In Progress",
              }}
            />

            <Typography className="section-title" sx={{
              fontSize: "14px", fontWeight: 600,
              fontFamily: "Poppins, sans-serif", color: "#2d5497", mt: 2
            }}>
              Eligibility Score
            </Typography>

            <Box className="score-box" sx={{
              background: "#e1f5e9",
              padding: "12px 16px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#197d4c",
              mb: 2,
            }}>
              ✅ Eligibility Score: 92/100 – Eligible
            </Box>

            {/* Accordions */}
            <Box className="accordian-section">
              <AccordianOpenSet title="1. Detailed Customer Data">
                {renderKeyValueTable(record.basic)}
              </AccordianOpenSet>
              <AccordianOpenSet title="2. Financial Information">
                {renderKeyValueTable(record.financial)}
              </AccordianOpenSet>
              <AccordianOpenSet title="3. Shareholders and Shareholding Patterns">
                {renderArrayTable(record.shareholders)}
              </AccordianOpenSet>
              <AccordianOpenSet title="4. Charges and Liabilities">
                {renderArrayTable(record.liabilities)}
              </AccordianOpenSet>
              <AccordianOpenSet title="5. LEI Details">
                {renderKeyValueTable(record.lei)}
              </AccordianOpenSet>
              <AccordianOpenSet title="6. Taxation and Regulatory">
                {renderKeyValueTable(record.regulatory)}
              </AccordianOpenSet>
              <AccordianOpenSet title="7. Authorised Signatories">
                {renderArrayTable(record.signatories)}
              </AccordianOpenSet>
              <AccordianOpenSet title="8. Litigation Cases">
                {renderArrayTable(record.litigations)}
              </AccordianOpenSet>
              <AccordianOpenSet title="9. Compliance Findings">
                {renderArrayTable(record.findings)}
              </AccordianOpenSet>
            </Box>
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

export default MyApplicationsSummary;
