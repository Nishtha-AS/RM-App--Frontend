import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import "./review-customer-shareholding-pattern.css";

interface ShareholdingEntry {
  name: string;
  pan: string;
  type: string;
  sharePercentage: number;
  shareType: string;
}

interface Props {
  data: ShareholdingEntry[];
}

const ReviewCustomerShareholdingPatternPage3: React.FC<Props> = ({ data }) => {
  return (
    <Box className="review-screen">
      <Header />
      <Box className="review-content">
        <SectionHeaderWithActions headingText="Shareholding Pattern" />
        {data && data.length > 0 ? (
          data.map((entry, index) => (
            <Box key={index} className="shareholding-card">
              <Typography className="field-label">Name</Typography>
              <Typography className="field-value">{entry.name}</Typography>

              <Typography className="field-label">PAN</Typography>
              <Typography className="field-value">{entry.pan}</Typography>

              <Typography className="field-label">Type</Typography>
              <Typography className="field-value">{entry.type}</Typography>

              <Typography className="field-label">Share %</Typography>
              <Typography className="field-value">{entry.sharePercentage}%</Typography>

              <Typography className="field-label">Share Type</Typography>
              <Typography className="field-value">{entry.shareType}</Typography>

              {index < data.length - 1 && <Divider sx={{ mt: 2, mb: 2 }} />}
            </Box>
          ))
        ) : (
          <Typography sx={{ color: "#999", mt: 2 }}>
            No shareholding information available.
          </Typography>
        )}
      </Box>
      <FooterMenuSet />
    </Box>
  );
};

export default ReviewCustomerShareholdingPatternPage3;
