import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";

import creditCheckIcon from "assets/credit-check.svg";
import "./entity-validation.css";

interface EntityRow {
  name: string;
  pan: string;
  aadhaar: string;
  nsdl: string;
  cibil: string;
  creditCheck: string;
  cbsId: string;
}

const mockEntities: EntityRow[] = [
  {
    name: "Rakesh Sinha",
    pan: "ASDFR1234K",
    aadhaar: "XXXX-XXXX-1010",
    nsdl: "Verified",
    cibil: "752",
    creditCheck: "Not Checked",
    cbsId: "CBS001",
  },
  {
    name: "Meenal Deshpande",
    pan: "WERTY5678M",
    aadhaar: "XXXX-XXXX-2020",
    nsdl: "Verified",
    cibil: "770",
    creditCheck: "Not Checked",
    cbsId: "CBS002",
  },
  {
    name: "Prakash Nair",
    pan: "LKJHG8901B",
    aadhaar: "XXXX-XXXX-3030",
    nsdl: "Pending",
    cibil: "765",
    creditCheck: "Not Checked",
    cbsId: "CBS003",
  },
  {
    name: "Tanvi Rao",
    pan: "ZXCVB4321L",
    aadhaar: "XXXX-XXXX-4040",
    nsdl: "Verified",
    cibil: "782",
    creditCheck: "Not Checked",
    cbsId: "CBS004",
  },
  {
    name: "Gaurav Mehta",
    pan: "QWERT9876T",
    aadhaar: "XXXX-XXXX-5050",
    nsdl: "N/A",
    cibil: "748",
    creditCheck: "Not Checked",
    cbsId: "CBS005",
  },
];

const EntityValidation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pan, setPan] = useState<string>("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const panParam = query.get("pan") || "";
    setPan(panParam);
  }, [location.search]);

  return (
    <Box className="entity-validation-screen">
      <Header />

      <Box className="entity-validation-content">
        <SectionHeaderWithActions headingText="Entity Validation Status" />

        <Box className="entity-table-container">
          <Box className="entity-table-heading">Customer Details</Box>

          <table className="entity-table">
            <thead>
              <tr className="entity-table-header">
                <th>Entity Name</th>
                <th>PAN</th>
                <th>AADHAAR</th>
                <th>NSDL</th>
                <th>CIBIL</th>
                <th>Credit Check</th>
                <th>CBS ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mockEntities.map((entity, index) => (
                <tr key={index}>
                  <td>{entity.name}</td>
                  <td>{entity.pan}</td>
                  <td>{entity.aadhaar}</td>
                  <td>{entity.nsdl}</td>
                  <td>{entity.cibil}</td>
                  <td>{entity.creditCheck}</td>
                  <td>{entity.cbsId}</td>
                  <td>
                    <img
                      src={creditCheckIcon}
                      alt="Check"
                      className="entity-icon-btn"
                      title="Trigger Credit Check"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        <Box className="bottom-buttons">
          <Button className="btn-outlined" variant="outlined" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button className="btn-filled" variant="contained">
            Save
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default EntityValidation;
