import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "components/header/header";
import Loader from "components/loader/loader";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import AccordianOpenSet from "components/accordian/accordian-open-set";

import mcaData from "data/MCA-Details.json";

import "./add-new-customer-MCA.css";

const predefinedCtptMap: Record<string, string> = {
  "AABCR0455M": "CTPT-1234",
  "AAECN2319Q": "CTPT-1111",
  "AADFD8342N": "CTPT-3333",
  "AACFM8823K": "CTPT-4444",
};

const ViewMCADetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [record, setRecord] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [gstin, setGstin] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pan = params.get("pan")?.toUpperCase();
    const gstinParam = params.get("gstin") || "";
    setGstin(gstinParam);

    if (!pan) return;

    setLoading(true);
    setRecord(null);

    const timer = setTimeout(() => {
      const matched = mcaData.find((e: any) => e.pan?.toUpperCase() === pan);
      if (matched) {
        setRecord({
          pan: matched.pan,
          ctptId: predefinedCtptMap[matched.pan] || "CTPT-0000",
          data: matched,
        });
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.search]);

  const handleCommit = () => {
    navigate(`/add-customer/success?ctpt=${record?.ctptId}&pan=${record?.pan}`);
  };

  const styledCell = { fontSize: "13px", fontWeight: 400, fontFamily: "Poppins, sans-serif" };
  const styledValue = { fontSize: "13px", fontWeight: 600, fontFamily: "Poppins, sans-serif" };

  if (loading) {
    return <Loader />;
  }

  if (!record || !record.data) {
    return (
      <Box className="mca-screen">
        <Header />
        <SectionHeaderWithActions headingText="Add New Customer" />
        <Typography sx={{ p: 2, fontStyle: "italic" }}>No MCA details found.</Typography>
        <FooterMenuSet />
      </Box>
    );
  }

  const d = record.data;

  return (
    <Box className="mca-screen">
      <Header />

      <Box className="section-header-wrapper">
        <SectionHeaderWithActions headingText="Add New Customer" />
      </Box>

      <Box className="mca-content">
        <Typography className="main-heading" sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Poppins, sans-serif", mb: 1 }}>
          MCA Details
        </Typography>
        <Typography className="sub-heading" sx={{ fontSize: "12px", fontWeight: 400, fontFamily: "Poppins, sans-serif", mb: 2 }}>
          This section contains key information retrieved from the Ministry of Corporate Affairs (MCA) database.
        </Typography>

        <Box className="accordian-spacing">
          <AccordianOpenSet title="1. Basic Company Details">
            <Box className="section-card">
              <Table><TableBody>
                <TableRow><TableCell sx={styledCell}>Company Name:</TableCell><TableCell sx={styledValue}>{d.basic_details?.["Company Name"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>CIN:</TableCell><TableCell sx={styledValue}>{d.basic_details?.CIN || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>Company Type:</TableCell><TableCell sx={styledValue}>{d.basic_details?.["Company Type"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>Incorporation Date:</TableCell><TableCell sx={styledValue}>{d.basic_details?.["Incorporation Date"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>E-Filing Status:</TableCell><TableCell sx={styledValue}>{d.basic_details?.["E-Filing Status"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>Industry Type:</TableCell><TableCell sx={styledValue}>{d.basic_details?.["Industry Type"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>Address:</TableCell><TableCell sx={styledValue}>{d.basic_details?.Address || "–"}</TableCell></TableRow>
              </TableBody></Table>
            </Box>
          </AccordianOpenSet>

          <AccordianOpenSet title="2. Financial Information">
            <Box className="finance-boxes">
              <Box className="finance-box yellow"><strong>{d.financial_info?.["Authorized Capital"] || "–"}</strong><div>Authorized Capital</div></Box>
              <Box className="finance-box green"><strong>{d.financial_info?.["Paid-up Capital"] || "–"}</strong><div>Paid-up Capital</div></Box>
              <Box className="finance-box blue"><strong>{d.financial_info?.["Total Charges"] || "–"}</strong><div>Total Charges</div></Box>
              <Box className="finance-box red"><strong>{d.financial_info?.["Net Worth"] || "–"}</strong><div>Net Worth</div></Box>
            </Box>
          </AccordianOpenSet>

          <AccordianOpenSet title="3. Shareholders and Shareholding Patterns">
            {d.shareholding_patterns?.length ? (
              <Table><TableHead><TableRow>
                <TableCell>Shareholder</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Holding</TableCell>
              </TableRow></TableHead><TableBody>
                {d.shareholding_patterns.map((sh: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell>{sh.Shareholder}</TableCell>
                    <TableCell>{sh.Type}</TableCell>
                    <TableCell>{sh.Holding}</TableCell>
                  </TableRow>
                ))}
              </TableBody></Table>
            ) : <Typography>No data available.</Typography>}
          </AccordianOpenSet>

          <AccordianOpenSet title="4. Charges & Liabilities (Loans, Mortgages)">
            {d.charges_liabilities?.length ? (
              <Table><TableHead><TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Lender</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow></TableHead><TableBody>
                {d.charges_liabilities.map((c: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell>{c.Type}</TableCell>
                    <TableCell>{c.Lender}</TableCell>
                    <TableCell>{c.Amount}</TableCell>
                    <TableCell>{c.Status}</TableCell>
                  </TableRow>
                ))}
              </TableBody></Table>
            ) : <Typography>No data available.</Typography>}
          </AccordianOpenSet>

          <AccordianOpenSet title="5. LEI (Legal Entity Identifier) Details">
            <Box className="section-card">
              <Table><TableBody>
                <TableRow><TableCell sx={styledCell}>LEI Number:</TableCell><TableCell sx={styledValue}>{d.lei_details?.["LEI Number"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>LEI Status:</TableCell><TableCell sx={styledValue}>{d.lei_details?.["LEI Status"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>Registration Date:</TableCell><TableCell sx={styledValue}>{d.lei_details?.["Registration Date"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>LEI Expiry Date:</TableCell><TableCell sx={styledValue}>{d.lei_details?.["LEI Expiry Date"] || "–"}</TableCell></TableRow>
              </TableBody></Table>
            </Box>
          </AccordianOpenSet>

          <AccordianOpenSet title="6. Taxation & Regulatory Details">
            <Box className="section-card">
              <Table><TableBody>
                <TableRow><TableCell sx={styledCell}>GST Number:</TableCell><TableCell sx={styledValue}>{d.taxation_regulatory?.["GST Number"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>PAN Number:</TableCell><TableCell sx={styledValue}>{d.taxation_regulatory?.["PAN Number"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>TAN Number:</TableCell><TableCell sx={styledValue}>{d.taxation_regulatory?.["TAN Number"] || "–"}</TableCell></TableRow>
                <TableRow><TableCell sx={styledCell}>SEBI Registration:</TableCell><TableCell sx={styledValue}>{d.taxation_regulatory?.["SEBI Registration"] || "–"}</TableCell></TableRow>
              </TableBody></Table>
            </Box>
          </AccordianOpenSet>

          <AccordianOpenSet title="7. Authorised Signatories">
            <Box className="section-card">
              <Table><TableHead><TableRow>
                <TableCell>Name</TableCell>
                <TableCell>DIN</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Appointment Date</TableCell>
              </TableRow></TableHead><TableBody>
                {d.authorised_signatories?.map((s: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell>{s.Name}</TableCell>
                    <TableCell>{s.DIN}</TableCell>
                    <TableCell>{s.Role}</TableCell>
                    <TableCell>{s["Appointment Date"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody></Table>
            </Box>
          </AccordianOpenSet>

          <AccordianOpenSet title="8. Past & Ongoing Litigation Cases">
            {d.litigation_cases?.length ? (
              <Table><TableHead><TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Court</TableCell>
              </TableRow></TableHead><TableBody>
                {d.litigation_cases.map((l: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell>{l.Title}</TableCell>
                    <TableCell>{l.Status}</TableCell>
                    <TableCell>{l.Court}</TableCell>
                  </TableRow>
                ))}
              </TableBody></Table>
            ) : <Typography>No data available.</Typography>}
          </AccordianOpenSet>

          <AccordianOpenSet title="9. Key Compliance and Findings">
            {d.compliance_findings?.length ? (
              <ul className="findings-list">
                {d.compliance_findings.map((f: any, i: number) => (
                  <li key={i}>{f.Finding}</li>
                ))}
              </ul>
            ) : <Typography>No data available.</Typography>}
          </AccordianOpenSet>
        </Box>

        <Box className="mca-buttons">
          <Button variant="outlined" className="nav-button" onClick={() => navigate(-1)}>Back</Button>
          <Button
            variant="contained"
            className="nav-button"
            onClick={() =>
              navigate(`/add-customer/review/page1?pan=${record?.pan}&ctpt=${record?.ctptId}&gstin=${gstin}`)
            }
          >
            Review
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default ViewMCADetails;
