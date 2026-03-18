// src/screens/AddNewCustomer/AddNewCustomer-DedupeDetails/add-new-customer-dedupe-detail.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "components/header/header";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import FooterMenuSet from "components/footermenu/footer-menu-set";

import dedupeData from "data/dedupe-details.json";
import "./add-new-customer-dedupe-detail.css";

type DedupeEntry = {
  dedupeId: string;
  pan: string;
  entityName: string;
  legalName: string;
  entityType: string;
  ramId: string;
  groupCustomer: string;
  parentCustomer: string | null;
  dateOfEstablishment: number;
  businessUnit: string;
  sectorClassification: string;
  legalStatus: string;
  ratingStatus: string;
  cif: string;
  alias: string;
  watchListStatus: string;
  ratedIn: string;
  rmName: string;
  isPrimaryRM: string;
  rmBusinessUnit: string;
};

const AddNewCustomerDedupeDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [entity, setEntity] = useState<DedupeEntry | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pan = params.get("pan")?.toUpperCase() || "";
    const dedupeId = params.get("dedupeId");

    if (pan && dedupeId) {
      const entry = (dedupeData as DedupeEntry[]).find(
        (e) => e.pan.toUpperCase() === pan && e.dedupeId === dedupeId
      );
      if (entry) setEntity(entry);
    }
  }, [location.search]);

  if (!entity) {
    return (
      <Box className="add-new-customer-dedupe-detail">
        <Header />
        <Box className="dedupe-detail-container">
          <SectionHeaderWithActions headingText="Add New Customer" />
          <Typography sx={{ padding: 2 }}>No data found for the given PAN and Dedupe ID.</Typography>
          <Button variant="contained" onClick={() => navigate(-1)} className="back-button">
            Back
          </Button>
        </Box>
        <FooterMenuSet />
      </Box>
    );
  }

  return (
    <Box className="add-new-customer-dedupe-detail">
      <Header />

      <Box className="dedupe-detail-container">
        <SectionHeaderWithActions headingText="Add New Customer" hideBackIcon={false} />

        <Typography className="subsection-heading">Group Counterparties</Typography>
        <Typography className="entity-name">{entity.entityName}</Typography>

        <Box className="table-container">
          <table className="info-table">
            <tbody>
              <tr><td>Parent Customer</td><td><strong>{entity.parentCustomer || "N/A"}</strong></td></tr>
              <tr><td>Primary Alias / RAM ID</td><td><strong>{entity.ramId}</strong></td></tr>
              <tr><td>Legal Status</td><td><strong>{entity.legalStatus}</strong></td></tr>
              <tr>
                <td>Date of Establishment</td>
                <td><strong>{new Date(entity.dateOfEstablishment).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</strong></td>
              </tr>
              <tr><td>Last Approved Rating</td><td><strong>{entity.ratingStatus}</strong></td></tr>
              <tr><td>Enterprise CIF</td><td><strong>{entity.cif}</strong></td></tr>
              <tr><td>PAN Number</td><td><strong>{entity.pan}</strong></td></tr>
              <tr><td>Group Customer</td><td><strong>{entity.groupCustomer}</strong></td></tr>
              <tr><td>Business Unit</td><td><strong>{entity.businessUnit}</strong></td></tr>
              <tr>
                <td>DSB (RBI) Main Classification<br />Sector / Industry</td>
                <td><strong>{entity.sectorClassification.split("\n").map(line => <div key={line}>{line}</div>)}</strong></td>
              </tr>
              <tr><td>Legal Name</td><td><strong>{entity.legalName}</strong></td></tr>
              <tr><td>Watch List / AL Status</td><td><strong>{entity.watchListStatus}</strong></td></tr>
              <tr><td>All Alias</td><td><strong>{entity.alias}</strong></td></tr>
              <tr><td>Rated In</td><td><strong>{entity.ratedIn}</strong></td></tr>
            </tbody>
          </table>
        </Box>

        <Box className="grid-container">
          <Box className="grid-header">Relationship Manager</Box>
          <Box className="grid-header">Business Unit</Box>
          <Box className="grid-header">Is Primary RM</Box>

          <Box className="grid-cell">{entity.rmName}</Box>
          <Box className="grid-cell">{entity.rmBusinessUnit}</Box>
          <Box className="grid-cell">{entity.isPrimaryRM}</Box>
        </Box>

        <Box className="button-container">
          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            className="back-button"
            sx={{ textTransform: "none" }}
          >
            Back
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default AddNewCustomerDedupeDetail;
