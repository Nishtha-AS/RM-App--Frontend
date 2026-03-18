import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import HeadingType2WithBackIcon from "components/heading2/heading-type2-with-back-icon";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import gearIcon from "assets/gear.svg";

import "./EligibilityCheck.css";

interface ParamRow {
  name: string;
  rag: "red" | "yellow" | "green";
  score: number;
}

const sampleParams: ParamRow[] = [
  { name: "parameter 1", rag: "red", score: 3.4 },
  { name: "parameter 2", rag: "yellow", score: 8.2 },
  { name: "parameter 3", rag: "green", score: 9.1 },
];

export default function EligibilityCheck() {
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);

  const handleDownload = () => {
    // TODO: hook up real report export
    alert("Download report");
  };

  return (
    <Box className="elig-page">
      {/* Global App Header */}
      <Header />

      {/* Scrollable Body */}
      <Box className="elig-content">
        <Box className="elig-content-inner">
          {/* Heading2 includes back ↑, title, search and sort icon */}
          <HeadingType2WithBackIcon title="Eligibility Check" />

          {/* Main Body */}
          {!showResults ? (
            <>
              {/* Gear + Proceed */}
              <Box className="gear-wrapper">
                <img src={gearIcon} alt="Gear" className="gear-icon" />
              </Box>
              <Box textAlign="center" className="proceed-wrapper">
                <Button
                  variant="contained"
                  className="proceed-btn"
                  onClick={() => setShowResults(true)}
                >
                  Proceed
                </Button>
              </Box>
            </>
          ) : (
            <>
              {/* Results Table */}
              <Table className="results-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Parameter</TableCell>
                    <TableCell>RAG</TableCell>
                    <TableCell align="right">Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sampleParams.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <Box
                          className="rag-dot"
                          style={{
                            backgroundColor:
                              row.rag === "red"
                                ? "#e03131"
                                : row.rag === "yellow"
                                ? "#f59f00"
                                : "#37b24d",
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">{row.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Final Result + Download */}
              <Box className="final-row">
                <CheckCircleIcon className="result-check" />
                <Typography className="result-label">GREEN</Typography>
                <IconButton
                  size="small"
                  className="download-btn"
                  onClick={handleDownload}
                >
                  <FileDownloadIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Global Footer Nav */}
      <FooterMenuSet />
    </Box>
  );
}
