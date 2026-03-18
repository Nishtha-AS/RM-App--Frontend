import React from "react";
import { 
  Box, 
  Typography, 
  IconButton, 
  Link 
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

import logo from "assets/Aadiswan.png";
import websiteIcon from "assets/website.svg";
import emailIcon from "assets/email.svg";
import callingIcon from "assets/calling.svg";

import "./AboutUs.css";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="about-page">
      {/* HEADER */}
      <Box className="about-header-bar">
        <IconButton
          size="small"
          onClick={() => navigate(-1)}
          className="back-btn"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography className="header-title">
          Account &gt; About Us
        </Typography>
      </Box>

      {/* MAIN CONTENT */}
      <Box className="about-content">
        {/* Logo */}
        <Box className="about-logo-wrapper">
          <img src={logo} alt="Aadiswan" className="about-logo" />
        </Box>

        {/* Paragraph */}
        <Typography paragraph className="about-text">
          Founded in 2014, Aadiswan Info Consultants Private Limited (CIN:
          U72900UP2014PTC006148) has grown into a pioneering force in the realm
          of financial technology solutions. Our journey began with a simple
          yet powerful vision: to transform the financial industry by providing
          innovative, secure, and efficient software solutions that meet the
          complex needs of modern banking and finance. Over the years, we have
          stayed true to this vision, establishing ourselves as trusted
          partners to a diverse range of financial institutions. At Aadiswan,
          we specialize in delivering advanced software products that
          streamline critical financial operations. Our flagship suite, CredPro,
          is a testament to our commitment to excellence, offering
          comprehensive modules for underwriting, covenant management,
          document generation, pricing workflows, valuations, and third-party
          integrations. CredPro is not just a tool; it’s a complete ecosystem
          designed to enhance decision-making, reduce errors, and ensure
          compliance across the entire financial process. What sets us apart is
          our deep understanding of the financial sector. We are not just
          technologists; we are seasoned underwriters who have integrated
          real-world domain expertise into our solutions.
        </Typography>

        {/* Contact Info */}
        <Box className="about-contact">
          <Box className="contact-row">
            <img src={websiteIcon} alt="Website" className="contact-icon" />
            <Link
              href="https://www.aadiswan.com"
              target="_blank"
              rel="noopener"
              className="contact-link"
            >
              www.aadiswan.com
            </Link>
          </Box>
          <Box className="contact-row">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <Link
              href="mailto:contactus@aadiswan.com"
              className="contact-link"
            >
              contactus@aadiswan.com
            </Link>
          </Box>
          <Box className="contact-row">
            <img src={callingIcon} alt="Phone" className="contact-icon" />
            <Typography className="contact-link">
              +91 9971 77797
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
