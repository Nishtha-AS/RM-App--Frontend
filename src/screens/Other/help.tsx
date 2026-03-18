import React from "react";
import {
  Box,
  Typography,
  Link,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import HeadingType2WithBackIcon from "components/heading2/heading-type2-with-back-icon";

import emailIcon from "assets/email.svg";
import phoneIcon from "assets/calling.svg";
import docsIcon from "assets/website.svg";
import searchIcon from "assets/search.svg";

import "./help.css";

export default function Help() {
  const navigate = useNavigate();

  const cards = [
    {
      icon: emailIcon,
      title: "Email Support",
      href: "mailto:support@bank.com",
      label: "support@bank.com",
    },
    {
      icon: phoneIcon,
      title: "Call Us",
      href: "tel:+911234567890",
      label: "+91 12345 67890",
    },
    {
      icon: docsIcon,
      title: "Documentation",
      href: "https://www.bankdocs.com",
      label: "bankdocs.com",
      external: true,
    },
  ];

  return (
    <Box className="help-page">
      <Header />

      <Box className="help-content">
        <HeadingType2WithBackIcon title="Help" />

        <Box className="help-search">
          <TextField
            placeholder="Search help topics…"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src={searchIcon}
                    alt="Search"
                    className="help-search-icon"
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box className="help-cards">
          {cards.map(({ icon, title, href, label, external }) => (
            <Box key={title} className="help-card-col">
              <Paper className="help-card" elevation={1}>
                <img src={icon} alt={title} className="help-card-icon" />
                <Box>
                  <Typography className="help-card-title">
                    {title}
                  </Typography>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener" : undefined}
                    className="help-card-text"
                  >
                    {label}
                  </Link>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>

        <Box className="help-faq">
          <Typography className="help-faq-heading">
            Frequently Asked Questions
          </Typography>
          {[
            "How do I reset my password?",
            "Where can I download reports?",
            "How do I contact my account manager?",
          ].map((q) => (
            <Typography
              key={q}
              className="help-faq-item"
              onClick={() => navigate("/help/faq")}
            >
              • {q}
            </Typography>
          ))}
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
}
