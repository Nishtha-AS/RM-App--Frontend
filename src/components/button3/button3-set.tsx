// src/components/button3/button3-set.tsx
import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import "./button3-set.css";

import plusCircleIcon from "assets/pluscircle.svg";
import customerIcon   from "assets/customers.svg";

type Props = {
  /** callback when the “New Customer” card is clicked */
  onNewCustomerClick?: () => void;
  /** callback when the “My Customers” card is clicked */
  onMyCustomersClick?: () => void;
};

const Button3Set: FunctionComponent<Props> = ({
  onNewCustomerClick,
  onMyCustomersClick,
}) => {
  const buttons: {
    icon: string;
    label: string;
    onClick?: () => void;
  }[] = [
    {
      icon: plusCircleIcon,
      label: "New Customer",
      onClick: onNewCustomerClick,
    },
    {
      icon: customerIcon,
      label: "My Customers",
      onClick: onMyCustomersClick,
    },
  ];

  return (
    <Box className="button3-set">
      {buttons.map((btn, idx) => (
        <Box
          key={idx}
          className="button3-card"
          onClick={btn.onClick}
          style={{ cursor: btn.onClick ? "pointer" : "default" }}
        >
          <Box className="button3-icon">
            <img src={btn.icon} alt={btn.label} />
          </Box>
          <Typography
            className="button3-title"
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {btn.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Button3Set;
